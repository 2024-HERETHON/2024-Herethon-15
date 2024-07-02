from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('userId', 'username', 'userPosition', 'userOpen', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active', 'userPosition')
    fieldsets = (
        (None, {'fields': ('userId', 'username', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal info', {'fields': ('userPosition', 'userOpen')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('userId', 'username', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('userId', 'username')
    ordering = ('userId',)

admin.site.register(CustomUser, CustomUserAdmin)