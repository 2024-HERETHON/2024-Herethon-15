from django import forms
from django.contrib.auth import get_user_model

class pointDown(forms.Form):
    input_point_num = forms.IntegerField(min_value=1, attrs={"class": "input_point_box"})
