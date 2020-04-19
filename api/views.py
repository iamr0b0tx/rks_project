from api.models import Land
from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from api.serializers import LandSerializer, UserSerializer, LandMiniSerializer
from rest_framework.authentication import TokenAuthentication

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
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    queryset = Land.objects.values('land_id', 'longitude', 'latitude')
    serializer_class = LandMiniSerializer

