from django.urls import path
from .views import ProductListApi, ProductDetails, ProductDetailsImages

app_name = 'api'

urlpatterns = [
    path('products/', ProductListApi.as_view()),
    path('products/<int:pk>/', ProductDetails.as_view()),
    path('products/images/<int:pk>/', ProductDetailsImages.as_view()),
]