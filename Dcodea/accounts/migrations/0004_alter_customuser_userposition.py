# Generated by Django 5.0.6 on 2024-07-05 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_customuser_userposition'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='userPosition',
            field=models.CharField(blank=True, choices=[('프론트', '프론트'), ('백', '백'), ('풀스택', '풀스택'), ('미정', '미정')], max_length=20, null=True),
        ),
    ]
