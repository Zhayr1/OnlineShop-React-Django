from django.db import models
from django.conf import settings

# Create your models here.
class Product(models.Model):
    name = models.TextField()
    image = models.ImageField()
    description = models.TextField()
    price = models.DecimalField(decimal_places=2, max_digits=20)
    discount = models.IntegerField()
    stock = models.IntegerField()

    def __str__(self):
        return str(self.id) + ' ' +self.name

class ProductImage(models.Model):
    Product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField()

    
class CartItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)