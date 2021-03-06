# Generated by Django 3.2.7 on 2022-01-18 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('most_map', '0006_aapdeatown'),
    ]

    operations = [
        migrations.CreateModel(
            name='PopulationAll',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.DecimalField(blank=True, decimal_places=65535, max_digits=65535, null=True)),
                ('population', models.DecimalField(blank=True, decimal_places=65535, max_digits=65535, null=True)),
                ('area', models.DecimalField(blank=True, decimal_places=65535, max_digits=65535, null=True)),
            ],
            options={
                'db_table': 'population_all',
                'managed': False,
            },
        ),
    ]
