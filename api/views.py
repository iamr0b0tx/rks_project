# from stdlib
from json import dumps, loads

# from lib code
from api.models import Land

# from thirdparty
import numpy as np
from pykrige.rk import RegressionKriging
from pykrige.compat import train_test_split
from sklearn.linear_model import LinearRegression

from django_pandas.io import read_frame

from rest_framework import viewsets
from rest_framework.decorators import api_view
from django.shortcuts import HttpResponse
from rest_framework.response import Response

from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from rest_framework.authentication import TokenAuthentication
from api.serializers import LandSerializer, UserSerializer, LandMiniSerializer

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by()
    serializer_class = UserSerializer

class LandView(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    queryset = Land.objects.all()
    serializer_class = LandSerializer


    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)

class LandMiniView(viewsets.ReadOnlyModelViewSet):
    ''' show partial view for land '''
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    queryset = Land.objects.values('land_id', 'longitude', 'latitude')
    serializer_class = LandMiniSerializer

@login_required
@api_view(['POST'])
def predict(request):
    ''' index page of site '''

    # slice of data to use
    data_size = 5000

    # default response
    prediction, message = -1, 'Prediction Unsuccessfull!'
    regression_kriging_score = regression_score = prediction = -1

    if request.method == 'POST':
        trial_data = request.data
        df = read_frame(Land.objects.all()).drop(columns=['land_id', 'uploaded_by', 'timestamp'])

        # take the first 5000 as Kriging is memory intensive
        target = df["land_value"][:data_size].to_numpy().astype('float')
        x = df[['longitude', 'latitude']][:data_size].to_numpy().astype('float')

        df = df.drop(columns=['land_value', 'latitude', 'longitude'])
        p = df[:data_size].to_numpy().astype('float')

        p_train, p_test, x_train, x_test, target_train, target_test = train_test_split(
            p, x, target, test_size=0.3, random_state=42
        )

        lr_model = LinearRegression(normalize=True, copy_X=True, fit_intercept=False)
        print("regression model:", lr_model.__class__.__name__)

        m_rk = RegressionKriging(regression_model=lr_model, n_closest_points=10)
        m_rk.fit(p_train, x_train, target_train)

        regression_score = m_rk.regression_model.score(p_test, target_test)
        print("Regression Score: ", regression_score)

        if len(df) > 16:
            regression_kriging_score = m_rk.score(p_test, x_test, target_test)
            print("RK score: ", regression_kriging_score)

            # the trial values
            p_trial = np.array([[trial_data.get(column_name, 0) for column_name in df.columns]]).astype('float')
            x_trial = np.array([[trial_data.get('longitude', 0), trial_data.get('latitude', 0)]]).astype('float')
            prediction = m_rk.predict(p_trial, x_trial)[0]
            print("Prediction: ", prediction)

            message = "Prediction successfull"

        else:
            message = 'Not enough Dataset'

    return HttpResponse(dumps({
        "message": message,
        "regression_score": regression_score,
        "regression_kriging_score": regression_kriging_score,
        "prediction": prediction
    }))