from django.urls import path
from .views import *

app_name= 'search'
urlpatterns =[
    path('', point_view, name="point"),
]
