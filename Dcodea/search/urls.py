from django.urls import path
from .views import *

app_name= 'search'
urlpatterns =[
    path('detail/<int:id>/',detail_view,name="detail"),
    
]
