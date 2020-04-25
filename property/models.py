from django.db import models

class House(models.Model):
	# object encapsulates a house listing
	
	name = models.CharField(max_length=255)
	category = models.CharField(max_length=32)
	house_type = models.CharField(max_length=32)
	price = models.IntegerField(default=0)
	rooms = models.IntegerField(default=0)
	baths = models.IntegerField(default=0)
	area = models.CharField(max_length=32)
	location = models.CharField(max_length=32)
	descrip = models.TextField(blank=True, null=True)
	photo1 = models.ImageField(upload_to='photos/', blank=True, null=True)
	photo2 = models.ImageField(upload_to='photos/', blank=True, null=True)
	photo3 = models.ImageField(upload_to='photos/', blank=True, null=True)
	photo4 = models.ImageField(upload_to='photos/', blank=True, null=True)
	video = models.CharField(max_length=255, blank=True, null=True)
	latitude = models.DecimalField(max_digits=12, decimal_places=6, blank=True, null=True)
	longitude = models.DecimalField(max_digits=12, decimal_places=6, blank=True, null=True)

	def __str__(self):
		return self.name



class Land(models.Model):
	# object encapsulates a land listing
	
	name = models.CharField(max_length=255)
	category = models.CharField(max_length=32)
	price = models.IntegerField(default=0)
	area = models.CharField(max_length=32)
	location = models.CharField(max_length=32)
	parcel_no = models.CharField(max_length=32)
	descrip = models.TextField(blank=True, null=True)
	photo1 = models.ImageField(upload_to='photos/', blank=True, null=True)
	photo2 = models.ImageField(upload_to='photos/', blank=True, null=True)
	photo3 = models.ImageField(upload_to='photos/', blank=True, null=True)
	photo4 = models.ImageField(upload_to='photos/', blank=True, null=True)
	video = models.CharField(max_length=255, blank=True, null=True)
	latitude = models.DecimalField(max_digits=12, decimal_places=6, blank=True, null=True)
	longitude = models.DecimalField(max_digits=12, decimal_places=6, blank=True, null=True)

	def __str__(self):
		return self.name

class Photo(models.Model):
    photo = models.FileField(upload_to='photos')