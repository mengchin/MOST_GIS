from django.contrib import admin

# Register your models here.
from .models import LandcoverChange,LandcoverChangeRatio,EntropyTown,EntropyVillage,AapdeaTown,PopulationAll,LueTown,LcrTown,PcrTown
admin.site.register(LandcoverChange)
admin.site.register(LandcoverChangeRatio)
admin.site.register(PopulationAll)
admin.site.register(EntropyTown)
admin.site.register(EntropyVillage)
admin.site.register(AapdeaTown)
admin.site.register(LueTown)
admin.site.register(LcrTown)
admin.site.register(PcrTown)
