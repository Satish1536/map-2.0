from django.shortcuts import render
from django.views.generic import TemplateView


def map_home(request):
    return render(request, 'map.html', context=None)
