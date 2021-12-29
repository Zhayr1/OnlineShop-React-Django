from django.urls import include, path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairView, CustomUserCreate, LogoutAndBlacklistRefreshTokenForUserView



urlpatterns = [
    
    # path('auth/', include('rest_auth.urls')),    
    # path('auth/register/', include('rest_auth.registration.urls')),
    path('auth/user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('auth/token/obtain/', ObtainTokenPairView.as_view(), name='token_create'),  # override sjwt stock token
    path('auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/token/blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist')
]