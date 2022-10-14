from django.contrib import admin

# Register your models here.
from .models import User,DailyReport

admin.site.register(User)
admin.site.register(DailyReport)
