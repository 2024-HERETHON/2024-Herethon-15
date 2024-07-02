from django.db import models
from django.contrib.auth.models import AbstractUser 

# Create your models here.

class CustomUser(AbstractUser):
    #userName = models.CharField(max_length=10, null=False, blank=False)
    userId = models.EmailField(primary_key=True, max_length=254, unique=True, null=False, blank=False)
    #userPw = models.CharField(max_length=20, null=False, blank=False)
    #userPwCheck = models.CharField(max_length=20, null=False, blank=False)
    POSITION_CHOICES = [
        ('frontend', '프론트엔드'),
        ('backend', '백엔드'),
        ('fullstack', '풀스택'),
        ('undefined', '미정'),
    ]
    userPosition = models.CharField(max_length = 20, choices = POSITION_CHOICES, null=True, blank=True)
    userOpen = models.BooleanField(default = False)

    USERNAME_FIELD = 'userId'  # 로그인에 사용할 필드 설정
    REQUIRED_FIELDS = ['username']


    def __str__(self):
        return self.username