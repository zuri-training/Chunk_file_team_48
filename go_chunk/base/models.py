import uuid
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class ChunkFile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file_id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    file = models.FileField(upload_to=f'files')
