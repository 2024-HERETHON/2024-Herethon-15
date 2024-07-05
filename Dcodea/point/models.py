from django.db import models
from django.conf import settings

from accounts.models import CustomUser
# Create your models here.

class Point(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    myPoint = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f'{self.user.username} - {self.myPoint} Points'
    