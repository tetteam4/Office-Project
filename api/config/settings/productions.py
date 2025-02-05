from .base import *

# Disable debugging in production
DEBUG = False

# Set your actual secret key for production
SECRET_KEY = env.str("DJANGO_SECRET_KEY")

# Set allowed hosts for production
ALLOWED_HOSTS = env.list("DJANGO_ALLOWED_HOSTS", default=["yourdomain.com"])

# Use a proper database for production (PostgreSQL in this case)
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",  # PostgreSQL engine
        "NAME": env.str("DJANGO_DB_NAME"),
        "USER": env.str("DJANGO_DB_USER"),
        "PASSWORD": env.str("DJANGO_DB_PASSWORD"),
        "HOST": env.str("DJANGO_DB_HOST", default="localhost"),
        "PORT": env.int("DJANGO_DB_PORT", default=5432),
    }
}

# CORS settings for production (adjust as needed)
CORS_ALLOWED_ORIGINS = env.list(
    "CORS_ALLOWED_ORIGINS", default=["https://yourfrontend.com"]
)

# Add other production-specific settings here (e.g., email backend, logging, etc.)
