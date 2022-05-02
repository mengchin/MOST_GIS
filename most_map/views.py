#-----Basic imports-----
import os
import json
import requests
from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.serializers import serialize
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from .models import LandcoverChange,LandcoverChangeRatio,EntropyTown,EntropyVillage,AapdeaTown,PopulationAll,PopulationTown,LueTown,LcrTown,PcrTown

# Create your views here.
def index(request):
    return render(request, 'index.html')

def index_tw(request):
    return render(request, 'index_tw.html')

def home(request):
    return render(request, 'home.html')

def home_tw(request):
    return render(request, 'home_tw.html')

def guide(request):
    return render(request, 'guide.html')

def guide_tw(request):
    return render(request, 'guide_tw.html')
    
def LandCoverChange(request):
    data = serialize('json',LandcoverChange.objects.all(),
                    fields = ('year','builtup','barren','cultivated','water','vegetation'))
    return HttpResponse(data, content_type='application/json')

def LandCoverChangeRatio(request):
    data = serialize('json',LandcoverChangeRatio.objects.all(),
                    fields = ('year','builtup','barren','cultivated','water','vegetation'))
    return HttpResponse(data, content_type='application/json')

def EntropyTownView(request):
    data = serialize('json',EntropyTown.objects.all(),
                    fields = ('towncode','year','shannon_entropy'))
    return HttpResponse(data, content_type='application/json')

def EntropyVillageView(request):
    data = serialize('json',EntropyVillage.objects.all(),
                    fields = ('villcode','year','shannon_entropy'))
    return HttpResponse(data, content_type='application/json')

def AAPDEATownView(request):
    data = serialize('json',AapdeaTown.objects.all(),
                    fields = ('towncode','period','aapdea','townname'))
    return HttpResponse(data, content_type='application/json')

def PopulationAllView(request):
    data = serialize('json',PopulationAll.objects.all(),
                    fields = ('year','population','area'))
    return HttpResponse(data, content_type='application/json')

def PopulationTownView(request):
    data = serialize('json',PopulationTown.objects.all(),
                    fields = ('towncode','year','population'))
    return HttpResponse(data, content_type='application/json')

def LueTownView(request):
    data = serialize('json', LueTown.objects.all(),
                    fields = ('towncode','period','lue'))
    return HttpResponse(data, content_type='application/json')

def LcrTownView(request):
    data = serialize('json', LcrTown.objects.all(),
                    fields = ('towncode','period','lcr'))
    return HttpResponse(data, content_type='application/json')

def PcrTownView(request):
    data = serialize('json', PcrTown.objects.all(),
                    fields = ('towncode','period','pcr'))
    return HttpResponse(data, content_type='application/json')