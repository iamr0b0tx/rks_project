from . import views
from rest_framework import routers
from django.urls import path, include

# the router object
router = routers.DefaultRouter()
# router.register(r'user', views.UserView, 'User')
router.register(r'land', views.LandView, 'Land')
router.register(r'land_mini', views.LandMiniView, 'Land Mini')

# all urls that can be visited
urlpatterns = [
    path('predict', views.predict),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('', include(router.urls)),
]
