"""MOST_GIS URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from most_map.views import index,index_tw, home,home_tw,guide,guide_tw

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',index,name='index'),
    path('tw',index_tw,name='index_tw'),
    path('home',home, name='home'),
    path('home_tw',home_tw, name='home_tw'),
    path('guide',guide, name='guide'),
    path('guide_tw',guide_tw, name='guide_tw'),
    path('', include('most_map.urls'))
]
