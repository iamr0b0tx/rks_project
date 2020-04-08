from api.models import Land
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        help_text='Leave empty if no change needed',
        style={'input_type': 'password', 'placeholder': 'Password'}
    )

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name')
        read_only_fields = ('password',)

class LandSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Land
        fields = (
            'land_id', 'uploaded_by', 'longitude', 'latitude', 'size', 'productive_quality', 'land_type', 'quality', 
            'mineral_quantity', 'road_type', 'distance_to_paved_road', 'distance_to_nearest_town',
            'nearest_town_size', 'distance_to_principal_city', 'distance_to_metropolitan_center', 
            'distance_to_city_towns', 'wheat_allotment', 'cotton_allotment', 'peanut_allotment', 'timestamp'
        )
        read_only_fields = ('land_id', 'uploaded_by', 'timestamp')
