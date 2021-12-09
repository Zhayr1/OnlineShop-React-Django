from .models import Product, ProductImage
from .serializers import ProductSerializer, ProductImageSerializer
from rest_framework import generics


class ProductListApi(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetails(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailsImages(generics.ListAPIView):
    serializer_class = ProductImageSerializer

    def get_queryset(self):
        pk = self.kwargs['pk']
        return ProductImage.objects.filter(Product__id=pk)