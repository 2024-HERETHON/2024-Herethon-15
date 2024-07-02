from django.urls import path
from .views import *

app_name= 'accounts'
urlpatterns =[
    path('detail/<int:id>/',detail_view,name="detail"),
    
]
