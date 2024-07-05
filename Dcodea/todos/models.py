from django.db import models
from django.conf import settings
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.staticfiles.storage import staticfiles_storage

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    profile_image = models.ImageField(upload_to='profile_images/', default='/default.svg')
    introduction = models.TextField(blank=True, null=True)  # introduction 필드 추가

    def __str__(self):
        return self.user.username

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, **kwargs):
    try:
        instance.profile.save()
    except ObjectDoesNotExist:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class Todo(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # 사용자 정보
    description = models.CharField(max_length=255, default='')  # 작업 설명
    completed = models.BooleanField(default=False)  #작업 완료 여부
    date = models.DateField(default=timezone.now) # 작업 날짜
    
    def __str__(self):
        return f"{self.description} - {self.date}"
    
class Question(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    
    def __str__(self):
        return self.content
    
class Comment(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)

    def __str__(self):
        return self.content
