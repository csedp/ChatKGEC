from django.db import models

# Create your models here.
class Category(models.Model):
    title=models.CharField(max_length=20)
    def __str__(self) -> str:
        return self.title

class Menu(models.Model):
    dishName = models.CharField(max_length=35)
    dishDesc = models.TextField()
    dishPrice = models.IntegerField()
    dishPrepTime= models.IntegerField()
    dishImage= models.ImageField(upload_to='menu_imgs/')
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    def __str__(self) -> str:
        return self.dishName

from django.contrib.auth.models import User
# Create your models here.

class Task(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE, null=True, blank=True)
    title=models.CharField(max_length=200)
    description=models.TextField(null=True, blank=True)
    complete=models.BooleanField(default=False)
    created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering=['complete']