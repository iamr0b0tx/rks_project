from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Land(models.Model):
    # identity
    land_id = models.AutoField(primary_key=True)
    uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE)

    # parameters
    longitude = models.CharField(max_length=16)
    latitude = models.CharField(max_length=16)

    # more paramters
    size = models.CharField(max_length=16)
    productive_quality = models.CharField(max_length=16)
    land_type = models.CharField(max_length=16)
    quality = models.CharField(max_length=16)
    mineral_quantity = models.CharField(max_length=16)
    road_type = models.CharField(max_length=16)
    distance_to_paved_road = models.CharField(max_length=16)
    distance_to_nearest_town = models.CharField(max_length=16)
    nearest_town_size = models.CharField(max_length=16)
    distance_to_principal_city = models.CharField(max_length=16)
    distance_to_metropolitan_center = models.CharField(max_length=16)
    distance_to_city_towns = models.CharField(max_length=16)
    wheat_allotment = models.CharField(max_length=16)
    cotton_allotment = models.CharField(max_length=16)
    peanut_allotment = models.CharField(max_length=16)
    
    # the time of recordning
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'land'