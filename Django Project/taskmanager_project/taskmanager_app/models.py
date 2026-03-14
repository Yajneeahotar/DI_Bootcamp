from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_date = models.DateTimeField()
    due_date = models.DateTimeField()

    def __str__(self):
        return self.title