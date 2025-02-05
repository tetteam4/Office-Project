from django.contrib import admin

from .models import Gallery, GalleryCategory, Images, Services

admin.site.register(Services)
admin.site.register(Images)
admin.site.register(GalleryCategory)
admin.site.register(Gallery)
