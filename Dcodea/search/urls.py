from django.urls import path
from .views import *

app_name= 'search'
urlpatterns =[
    path('detail/<str:userId>/',detail_view,name="detail"),
    path('', SearchFormView.as_view(), name="search"),
]
