from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from property.models import House, Land

def home(request):
	listings = Land.objects.all()
	context_dict = {
		'listings': listings
	}
	return render(request, 'property/index.html', context=context_dict)

def properties(request):
	return render(request, 'property/properties.html')

def houses(request):
	listings = House.objects.all()
	context_dict = {
		'listings': listings
	}
	return render(request, 'property/houses.html', context=context_dict)

def lands(request):
	listings = Land.objects.all()
	context_dict = {
		'listings': listings
	}
	return render(request, 'property/lands.html', context=context_dict)


def property_detail(request, pid):
	"""
	Property details page
	"""
	

	context_dict = {

	}


	return render(request, 'property/property-details.html', context=context_dict)


def house_detail(request, pid):
	"""
	Property details page
	"""
	house = House.objects.get(id=pid)

	context_dict = {
		'house': house
	}


	return render(request, 'property/house_details.html', context=context_dict)


def land_detail(request, pid):
	"""
	Property details page
	"""
	land = Land.objects.get(id=pid)

	context_dict = {
		'land': land
	}


	return render(request, 'property/land_details.html', context=context_dict)


