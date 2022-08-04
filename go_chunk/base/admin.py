from django.contrib import admin
from .models import ChunkedFile


class ChunkedFileAdmin(admin.ModelAdmin):
    list_display = ('user', 'file_id', 'file', 'upload_time', 'saved')
    
admin.site.register(ChunkedFile, ChunkedFileAdmin)