from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^$', views.map_home),
    url(r'test_ajax/$', views.check),
]
