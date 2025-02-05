from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    path("categories/", views.CategoryListView.as_view(), name="category-list"),
    path(
        "categories/<uuid:pk>/",
        views.CategoryDetailView.as_view(),
        name="category-detail",
    ),
]
