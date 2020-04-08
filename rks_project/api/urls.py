from . import views
from rest_framework import routers
from django.urls import path, include

# the router object
router = routers.DefaultRouter()
# router.register(r'user', views.UserView, 'User')
router.register(r'land', views.LandView, 'Land')

# all urls that can be visited
urlpatterns = [
    path('', include(router.urls)),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
