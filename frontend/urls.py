from . import views
from django.urls import path, include
from django.contrib.auth import views as django_views

# all urls that can be visited
urlpatterns = [
    path('', views.index),
    path('accounts/login/', views.signin, name='login'),
]
