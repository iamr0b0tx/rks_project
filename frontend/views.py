from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required
def index(request):
    ''' index page of site '''
    return render(request, 'index.html')


def signin(request):
    ''' login page of site '''
    return render(request, 'signin.html')
