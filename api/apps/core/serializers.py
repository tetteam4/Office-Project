from rest_framework import serializers

from .models import BlogPost, Category, Portfolio, Section, Technology


class CategorySerializer(serializers.ModelSerializer):
    model = Category
    fields = ["id", "name", "created_at", "updated_at"]


class TechnologySerializer(serializers.ModelSerializer):
    tags = serializers.ListField(child=serializers.CharField())

    class Meta:
        model = Technology
        fields = ["id", "name", "icon", "tags"]


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ["section_id", "subtitle", "image", "description"]


class BlogPostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    sections = SectionSerializer(many=True)

    class Meta:
        model = BlogPost
        fields = [
            "id",
            "title",
            "category",
            "hero_image",
            "general_info",
            "conclusion",
            "sections",
        ]


class PortfolioSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    frontend_technologies = TechnologySerializer(many=True)
    backend_technologies = TechnologySerializer(many=True)
    database_technology = TechnologySerializer()
    other_technologies = TechnologySerializer(many=True)

    class Meta:
        model = Portfolio
        fields = [
            "id",
            "name",
            "client",
            "category",
            "rating",
            "web_url",
            "images",
            "log_images",
            "top_images",
            "dashboard_images",
            "nav_images",
            "description",
            "deployment",
            "frontend_technologies",
            "backend_technologies",
            "database_technology",
            "other_technologies",
        ]
