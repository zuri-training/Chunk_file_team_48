from datetime import timezone , datetime
import datetime
import uuid
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class ChunkedFile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file_id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    upload_time = models.DateTimeField(auto_created=True,blank=True,)
    saved = models.BooleanField(default=False)
    file = models.FileField(upload_to=f'files')
