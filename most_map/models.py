from django.contrib.gis.db import models


class AapdeaTown(models.Model):
    town_eng = models.TextField(db_column='TOWN_ENG', blank=True, null=True)  # Field name made lowercase.
    period = models.TextField(db_column='Period', blank=True, null=True)  # Field name made lowercase.
    aapdea = models.DecimalField(db_column='AAPDEA', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    dist_to_central = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    towncode = models.TextField(db_column='TOWNCODE', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'AAPDEA_1'


class LcrTown(models.Model):
    towncode = models.TextField(db_column='TOWNCODE', blank=True, null=True)  # Field name made lowercase.
    town_eng = models.TextField(db_column='TOWN_ENG', blank=True, null=True)  # Field name made lowercase.
    lcr = models.DecimalField(db_column='LCR', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    period = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'LCR_town'


class LueTown(models.Model):
    towncode = models.TextField(db_column='TOWNCODE', blank=True, null=True)  # Field name made lowercase.
    toen_eng = models.TextField(db_column='TOEN_ENG', blank=True, null=True)  # Field name made lowercase.
    lue = models.DecimalField(db_column='LUE', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    period = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'LUE_town'


class PcrTown(models.Model):
    towncode = models.TextField(db_column='TOWNCODE', blank=True, null=True)  # Field name made lowercase.
    town_eng = models.TextField(db_column='TOWN_ENG', blank=True, null=True)  # Field name made lowercase.
    pcr = models.DecimalField(db_column='PCR', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    period = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'PCR_town'

class EntropyTown(models.Model):
    towncode = models.TextField(db_column='TOWNCODE', primary_key=True)  # Field name made lowercase.
    year = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shannon_entropy = models.DecimalField(db_column='Shannon_Entropy', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'entropy_town_1985'

class EntropyVillage(models.Model):
    villcode = models.TextField(db_column='VILLCODE', primary_key=True)  # Field name made lowercase.
    shannon_entropy = models.DecimalField(db_column='Shannon_Entropy', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    year = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'entropy_village_1985'


class LandcoverChange(models.Model):
    year = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    builtup = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    barren = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    cultivated = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    water = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    vegetation = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'landcover_change'


class LandcoverChangeRatio(models.Model):
    builtup = models.DecimalField(db_column='Builtup', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    barren = models.DecimalField(db_column='Barren', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    cultivated = models.DecimalField(db_column='Cultivated', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    water = models.DecimalField(db_column='Water', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    vegetation = models.DecimalField(db_column='Vegetation', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    year = models.DecimalField(db_column='Year', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'landcover_change_ratio'


class PopulationAll(models.Model):
    year = models.DecimalField(db_column='Year', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    population = models.DecimalField(db_column='Population', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.
    area = models.DecimalField(db_column='Area', max_digits=65535, decimal_places=65535, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'population_all'


class PopulationTown(models.Model):
    town_name = models.TextField(db_column='TOWN_NAME', blank=True, null=True)  # Field name made lowercase.
    town_eng = models.TextField(db_column='TOWN_ENG', blank=True, null=True)  # Field name made lowercase.
    towncode = models.TextField(db_column='TOWNCODE', blank=True, null=True)  # Field name made lowercase.
    population = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    year = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'population_town'
