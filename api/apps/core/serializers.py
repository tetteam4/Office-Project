from rest_framework import serializers

from .models import BlogPost, Category, Section


class CategorySerializer(serializers.ModelSerializer):
    model = Category
    fields = ["id", "name", "created_at", "updated_at"]
