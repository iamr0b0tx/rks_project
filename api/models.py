from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Land(models.Model):
    # identity
    land_id = models.AutoField(primary_key=True)
    uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE)

    # parameters
    longitude = models.DecimalField(max_digits=24, decimal_places=20)
    latitude = models.DecimalField(max_digits=24, decimal_places=20)

    # more paramters
    size = models.DecimalField(max_digits=16, decimal_places=8)
    productive_quality = models.DecimalField(max_digits=16, decimal_places=8)
    land_type = models.DecimalField(max_digits=16, decimal_places=8)
    quality = models.DecimalField(max_digits=16, decimal_places=8)
    mineral_quantity = models.DecimalField(max_digits=16, decimal_places=8)
    road_type = models.DecimalField(max_digits=16, decimal_places=8)
    distance_to_paved_road = models.DecimalField(max_digits=16, decimal_places=8)
    distance_to_nearest_town = models.DecimalField(max_digits=16, decimal_places=8)
    nearest_town_size = models.DecimalField(max_digits=16, decimal_places=8)
    distance_to_principal_city = models.DecimalField(max_digits=16, decimal_places=8)
    distance_to_metropolitan_center = models.DecimalField(max_digits=16, decimal_places=8)
    distance_to_city_towns = models.DecimalField(max_digits=16, decimal_places=8)
    wheat_allotment = models.DecimalField(max_digits=16, decimal_places=8)
    cotton_allotment = models.DecimalField(max_digits=16, decimal_places=8)
    peanut_allotment = models.DecimalField(max_digits=16, decimal_places=8)

    land_value = models.DecimalField(max_digits=16, decimal_places=8)
    
    # the time of recordning
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'land'
