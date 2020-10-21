from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.


@login_required
def index(request):
    ''' index page of site '''
    print('index')
    return render(request, 'index.html')


def signin(request):
    ''' login page of site '''
    print('signin')
    return render(request, 'signin.html')


def signup(request):
    ''' signup page of site '''
    return render(request, 'signup.html')