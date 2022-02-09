from django.urls import include, path
from most_map.views import LandCoverChange,LandCoverChangeRatio,EntropyTownView,EntropyVillageView,AAPDEATownView,PopulationAllView,PopulationTownView,LueTownView,LcrTownView,PcrTownView
urlpatterns = [
    path('lulc/all',LandCoverChange, name='LandCoverChange'),
    path('lulc/all_ratio',LandCoverChangeRatio, name='LandCoverChangeRatio'),
    path('entropy/town',EntropyTownView, name='EntropyTown'),
    path('entropy/village',EntropyVillageView, name='EntropyVillage'),
    path('AAPDEA/town',AAPDEATownView, name='AAPDEATown'),
    path('pop/all',PopulationAllView,name='PopAll'),
    path('pop/town',PopulationTownView,name='PopTown'),
    path('sdg/lue',LueTownView,name='lue'),
    path('sdg/lcr',LcrTownView,name='lcr'),
    path('sdg/pcr',PcrTownView,name='pcr')
]