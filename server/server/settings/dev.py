import os

from .base import *


ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get('DB_NAME'),
        'HOST': os.environ.get('DB_HOST'),
        'PASSWORD': os.environ.get('DB_PASSWORD'),
        'USER': os.environ.get('DB_USER'),
        'PORT': os.environ.get('DB_PORT')
    }
}