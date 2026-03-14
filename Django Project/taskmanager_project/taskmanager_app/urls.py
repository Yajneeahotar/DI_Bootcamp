from django.urls import path
from . import views

urlpatterns = [
    path('mytasks/', views.task_list, name='tasklist'), 
    path('createtasks/', views.task_create, name='createtask'), 
    path('<int:pk>/updatetasks/', views.task_update, name='updatetask'), 
    path('<int:pk>/deletetasks/', views.task_delete, name='deletetask'), 

]