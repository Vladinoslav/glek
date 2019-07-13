from django.urls import path
from django.conf.urls import url
from rest_framework.authtoken.views import obtain_auth_token

from .views import UserCreate, UserLoginView



urlpatterns = [
    url(r'registration$', UserCreate.as_view(), name="registration"),
    url(r'login$', obtain_auth_token, name="login")
]