from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Land(models.Model):
    # identity
    land_id = models.AutoField(primary_key=True)
    uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE)

    # parameters
    longitude = models.IntegerField()
    latitude = models.IntegerField()

    # more paramters
    size = models.IntegerField()
    productive_quality = models.IntegerField()
    land_type = models.IntegerField()
    quality = models.IntegerField()
    mineral_quantity = models.IntegerField()
    road_type = models.IntegerField()
    distance_to_paved_road = models.IntegerField()
    distance_to_nearest_town = models.IntegerField()
    nearest_town_size = models.IntegerField()
    distance_to_principal_city = models.IntegerField()
    distance_to_metropolitan_center = models.IntegerField()
    distance_to_city_towns = models.IntegerField()
    wheat_allotment = models.IntegerField()
    cotton_allotment = models.IntegerField()
    peanut_allotment = models.IntegerField()

    land_value = models.IntegerField()
    
    # the time of recordning
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'land'