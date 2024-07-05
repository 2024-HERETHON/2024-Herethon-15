from django.urls import path
from .views import detail_view, SearchFormView, filter_view

app_name = 'search'

urlpatterns = [
    path('detail/<str:userId>/', detail_view, name="detail"),
    path('', SearchFormView.as_view(), name="search"),
    path('filter/<str:category>/', filter_view, name="filter"),
]
