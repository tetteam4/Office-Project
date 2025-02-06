from ckeditor.fields import RichTextField
from django.db import models
from django.utils.translation import gettext_lazy as _
from taggit.managers import TaggableManager

from apps.common.models import TimeStampedUUIDModel


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
    log_images = models.ImageField(upload_to="portfolio/", null=True, blank=True)
    top_images = models.ImageField(upload_to="portfolio/", null=True, blank=True)
    dashboard_images = models.ImageField(upload_to="portfolio/", null=True, blank=True)
    nav_images = models.ImageField(upload_to="portfolio/", null=True, blank=True)
    description = RichTextField(blank=True, null=True)
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

    def __str__(self):
        return self.name


class BlogPost(TimeStampedUUIDModel):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    hero_image = models.ImageField(upload_to="blogs/heroes/")
    section = models.ManyToManyField("Section")
    general_info = models.TextField()
    conclusion = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Blog Post")
        verbose_name_plural = _("Blog Posts")
        ordering = ["-created_at"]


class Section(TimeStampedUUIDModel):
    subtitle = models.CharField(max_length=200)
    image = models.ImageField(upload_to="blogs/sections/")
    description = models.TextField()

    def __str__(self):
        return self.subtitle

    class Meta:
        verbose_name = _("Section")
        verbose_name_plural = _("Sections")


class Team(TimeStampedUUIDModel):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    designation = models.CharField(max_length=255)
    photo = models.ImageField(upload_to="photos/%Y/%m/%d/")
    whatsapp = models.URLField(max_length=100)
    twitter_link = models.URLField(max_length=100)
    linkedin = models.URLField(max_length=100)
    github = models.URLField(max_length=100)

    def __str__(self):
        return self.first_name


class About(TimeStampedUUIDModel):
    class ServiceChoices(models.TextChoices):
        DEVELOPMENT = "Development", _("Development")
        DESIGN = "Design", _("Design")
        MARKETING = "Hosting", _("Hosting")
        OTHER = "Other", _("Other")

    name = models.CharField(max_length=200, verbose_name=_("Company Name"))
    description = models.TextField(
        blank=True, null=True, verbose_name=_("Company Description")
    )
    company_story = models.TextField(
        blank=True, null=True, verbose_name=_("Company Story")
    )
    services = models.CharField(
        max_length=200,
        choices=ServiceChoices.choices,
        default=ServiceChoices.DEVELOPMENT,
        verbose_name=_("Main Service"),
    )
    technologies_used = models.ManyToManyField(
        Technology,
        related_name="technologies",
        blank=True,
        verbose_name=_("Technologies Used"),
    )

    address = models.CharField(
        max_length=255, blank=True, null=True, verbose_name=_("Company Address")
    )
    contact_email = models.EmailField(
        blank=True, null=True, verbose_name=_("Contact Email")
    )
    contact_phone = models.CharField(
        max_length=20, blank=True, null=True, verbose_name=_("Contact Phone")
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _("About Us")
        verbose_name_plural = _("About Us")
