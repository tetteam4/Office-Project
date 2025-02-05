from .base import *

# Debugging enabled in local development
DEBUG = True

# Database settings for local development (SQLite by default)
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",  # SQLite engine for local dev
        "NAME": ROOT_DIR / "db.sqlite3",  # Use a local SQLite file for dev
    }
}

# CORS settings for local development (you can restrict the origin here)
CORS_ALLOWED_ORIGINS = env.list(
    "CORS_ALLOWED_ORIGINS", default=["http://localhost:3000"]
)

# Security settings for local (to be more strict in production)
SECRET_KEY = env.str(
    "DJANGO_SECRET_KEY", default="local-secret-key"
)  # Default secret key for local

ALLOWED_HOSTS = ["*"]  # Allow all hosts for local dev
