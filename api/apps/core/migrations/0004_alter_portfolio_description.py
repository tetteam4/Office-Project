# Generated by Django 5.1.5 on 2025-02-06 06:39

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0003_alter_portfolio_dashboard_images_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="portfolio",
            name="description",
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
    ]
