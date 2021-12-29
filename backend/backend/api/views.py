from .models import Product, ProductImage, CartItem
from .serializers import ProductSerializer, ProductImageSerializer, CartItemSerializer
from rest_framework import generics, permissions

class CartItemListApi(generics.ListAPIView):
    serializer_class = CartItemSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)

class ProductListApi(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny,)

class ProductDetails(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny,)

class ProductDetailsImages(generics.ListAPIView):
    serializer_class = ProductImageSerializer
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        pk = self.kwargs['pk']
        return ProductImage.objects.filter(Product__id=pk)