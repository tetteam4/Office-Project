from rest_framework import serializers
from taggit.serializers import TagListSerializerField

from .models import About, BlogPost, Category, Portfolio, Section, Team, Technology


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class TechnologySerializer(serializers.ModelSerializer):
    tags = TagListSerializerField()

    class Meta:
        model = Technology
        fields = ["id", "name", "icon", "tags"]


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ["id", "subtitle", "image", "description"]


class BlogPostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    section = SectionSerializer(many=True)

    class Meta:
        model = BlogPost
        fields = [
            "id",
            "title",
            "category",
            "hero_image",
            "general_info",
            "conclusion",
            "section",
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


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = [
            "id",
            "first_name",
            "last_name",
            "designation",
            "photo",
            "whatsapp",
            "twitter_link",
            "linkedin",
            "github",
        ]


class AboutSerializer(serializers.ModelSerializer):
    technologies_used = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = About
        fields = [
            "id",
            "name",
            "description",
            "company_story",
            "services",
            "technologies_used",
            "address",
            "contact_email",
            "contact_phone",
        ]
