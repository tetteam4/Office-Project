# views.py
from rest_framework import generics, permissions, viewsets
from rest_framework.mixins import (
    CreateModelMixin,
    DestroyModelMixin,
    ListModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
)

from .models import BlogPost, Category, Section, Technology
from .serializers import (
    BlogPostSerializer,
    CategorySerializer,
    SectionSerializer,
    TechnologySerializer,
)


# View for listing and creating categories
class CategoryListView(generics.GenericAPIView, ListModelMixin, CreateModelMixin):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CategoryDetailView(
    generics.GenericAPIView,
    RetrieveModelMixin,  # Add this mixin
    UpdateModelMixin,
    DestroyModelMixin,
):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "id"  # Use UUID as the lookup field

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class TechnologyListView(
    generics.GenericAPIView,
    ListModelMixin,
    CreateModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class TechnologyDetailView(
    RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, generics.GenericAPIView
):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "id"

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class SectionListView(generics.GenericAPIView, ListModelMixin, CreateModelMixin):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class SectionDetailView(
    RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, generics.GenericAPIView
):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "id"

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class BlogPostListView(generics.ListAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.AllowAny]


class BlogPostDetailView(generics.RetrieveAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "id"
