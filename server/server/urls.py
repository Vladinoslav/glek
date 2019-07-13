from django.contrib import admin
from django.urls import include
from django.conf.urls import url


urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^api/', include("api.urls")),
    url(r'^accounts/', include("accounts.urls"))
]
