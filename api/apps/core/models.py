from apps.common.models import TimeStampedUUIDModel
from django.db import models
from django.utils.translation import gettext_lazy as _
from taggit.managers import TaggableManager


class Category(TimeStampedUUIDModel):
    name = models.CharField(max_length=100, verbose_name=_("Category Name"))

    def __str__(self):
        return f"Categories: {self.name}"

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")


class Technology(TimeStampedUUIDModel):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to="portfolio/")
    tags = TaggableManager()

    def __str__(self):
        return f"Technology: {self.name}"

    class Meta:
        verbose_name = _("Technology")
        verbose_name_plural = _("Technologies")


class Portfolio(TimeStampedUUIDModel):
    PORTFOLIO_CHOICES_TOP = "T"
    PORTFOLIO_CHOICES_NORMAL = "N"

    PORTFOLIO_CHOICES = (
        (PORTFOLIO_CHOICES_TOP, "Top"),
        (PORTFOLIO_CHOICES_NORMAL, "Normal"),
    )
    name = models.CharField(max_length=100, verbose_name=_("Project Name"))
    client = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    rating = models.CharField(
        choices=PORTFOLIO_CHOICES, default=PORTFOLIO_CHOICES_TOP, max_length=1
    )
    web_url = models.URLField(blank=True, null=True)
    images = models.ImageField(upload_to="portfolio/")
    log_images = models.ImageField(upload_to="portfolio/")
    top_images = models.ImageField(upload_to="portfolio/")
    dashboard_images = models.ImageField(upload_to="portfolio/")
    nav_images = models.ImageField(upload_to="portfolio/")
    description = models.TextField(blank=True, null=True)
    deployment = models.CharField(blank=True, null=True, max_length=255)
    frontend_technologies = models.ManyToManyField(
        Technology, related_name="frontend_technologies", blank=True
    )
    backend_technologies = models.ManyToManyField(
        Technology, related_name="backend_technologies", blank=True
    )
    database_technology = models.ForeignKey(
        Technology, related_name="database_technology", on_delete=models.CASCADE
    )
    other_technologies = models.ManyToManyField(
        Technology, related_name="other_technologies", blank=True
    )

    class Meta:
        verbose_name = _("Portfolio")
        verbose_name_plural = _("Portfolios")
        ordering = ["-created_at"]


class BlogPost(TimeStampedUUIDModel):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    hero_image = models.ImageField(upload_to="blogs/heroes/")
    section = models.ForeignKey("Section", on_delete=Category)
    general_info = models.TextField()
    conclusion = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Blog Post")
        verbose_name_plural = _("Blog Posts")
        ordering = ["-created_at"]


class Section(models.Model):
    section_id = models.CharField(max_length=100, unique=True)
    blog_post = models.ForeignKey(
        BlogPost, related_name="sections", on_delete=models.CASCADE
    )
    subtitle = models.CharField(max_length=200)
    image = models.ImageField(upload_to="blogs/sections/")
    description = models.TextField()

    def __str__(self):
        return self.subtitle

    class Meta:
        verbose_name = _("Section")
        verbose_name_plural = _("Sections")
