from django.shortcuts import render
from django.http import HttpResponse
import json
from django.views.generic import TemplateView


def map_home(request):
    return render(request, 'map.html', context=None)


def check(request):
    response = dict()
    print("Calles")
    lat = request.GET.get("lat")
    lng = request.GET.get("lng")
    print(lat, lng)
    response["status"] = 200
    return HttpResponse(json.dumps(response))
