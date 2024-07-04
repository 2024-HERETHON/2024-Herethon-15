from django.db import models
from accounts.models import CustomUser
from todos.models import Todo

# Create your models here.
# class User(models.Model):
#     user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

#     def __str__(self):
#         return str(self.user.username)

class todosearch(models.Model):
    todo = models.ForeignKey(Todo,on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user.username)