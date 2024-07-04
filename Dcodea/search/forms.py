from django import forms
from django.contrib.auth import get_user_model


POSITION_CHOICES = [
        ('frontend', '프론트엔드'),
        ('backend', '백엔드'),
        ('fullstack', '풀스택'),
        ('undefined', '미정'),
    ]
class PostSearchForm(forms.Form):
    userPosition = forms.ChoiceField(choices=POSITION_CHOICES, initial='frontend')        #선택 형식으로 포지션 넘겨받기