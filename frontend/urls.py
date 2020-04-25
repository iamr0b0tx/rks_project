from . import views
from django.urls import path, include
from django.contrib.auth import views as django_views

# all urls that can be visited
urlpatterns = [
    path('accounts/login/', views.signin, name='Sign In'),
    path('accounts/signup/', views.signup, name='Sign Up'),
    path('', views.index),
]
