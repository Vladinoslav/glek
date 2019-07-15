from django.urls import path
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.views import obtain_auth_token

from .views import UserCreate, UserLoginView


urlpatterns = [
    url(r'registration$', csrf_exempt(UserCreate.as_view()), name="registration"),
    url(r'login$', csrf_exempt(UserLoginView.as_view()), name="login")
]
