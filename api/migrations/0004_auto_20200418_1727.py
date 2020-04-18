# Generated by Django 3.0.5 on 2020-04-18 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200418_1621'),
    ]

    operations = [
        migrations.AlterField(
            model_name='land',
            name='cotton_allotment',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='distance_to_city_towns',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='distance_to_metropolitan_center',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='distance_to_nearest_town',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='distance_to_paved_road',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='distance_to_principal_city',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='land_type',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='land_value',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='latitude',
            field=models.DecimalField(decimal_places=19, max_digits=32),
        ),
        migrations.AlterField(
            model_name='land',
            name='longitude',
            field=models.DecimalField(decimal_places=19, max_digits=32),
        ),
        migrations.AlterField(
            model_name='land',
            name='mineral_quantity',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='nearest_town_size',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='peanut_allotment',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='productive_quality',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='quality',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='road_type',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='size',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
        migrations.AlterField(
            model_name='land',
            name='wheat_allotment',
            field=models.DecimalField(decimal_places=8, max_digits=16),
        ),
    ]
