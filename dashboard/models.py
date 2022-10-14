from django.db import models

# Create your models here.
class Timestamp(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    class Meta:
        abstract = True
        
    
class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    
class DailyReport(models.Model):
    name = models.OneToOneField(User,on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    wow_point = models.CharField(max_length=100)
    source_of_improvement = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
    
    
