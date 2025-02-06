from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    path("categories/", views.CategoryListView.as_view(), name="category-list"),
    path(
        "categories/<uuid:id>/",
        views.CategoryDetailView.as_view(),
        name="category-detail",
    ),
    path("technologies/", views.TechnologyListView.as_view(), name="technology-list"),
    path(
        "technologies/<uuid:id>/",
        views.TechnologyDetailView.as_view(),
        name="technology-detail",
    ),
    path("sections/", views.SectionListView.as_view(), name="section-list"),
    path(
        "sections/<uuid:id>/",
        views.SectionDetailView.as_view(),
        name="section-detail",
    ),
    path("blogs/", views.BlogPostListView.as_view(), name="blogpost-list"),
    path(
        "blogs/<uuid:id>/", views.BlogPostDetailView.as_view(), name="blogpost-detail"
    ),
]
