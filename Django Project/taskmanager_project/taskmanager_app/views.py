from django.shortcuts import render, get_object_or_404, redirect
from .models import Task

def task_list(request):
    task_table= Task.objects.all().order_by('-title')
    return render(request, 'tasks/tasklist.html', {'tasks': task_table})


def task_create(request):
    if request.method == 'POST':
        task_title = request.POST['title']
        task_description = request.POST['description']
        task_status = 'completed' in request.POST
        task_created_date = request.POST['created_date']
        task_due_date = request.POST['due_date']

        Task.objects.create(title = task_title, description = task_description, completed = task_status, created_date = task_created_date, due_date = task_due_date )
        return redirect('tasklist')
    return render(request, 'tasks/taskform.html', {'action': 'Create'})


def task_update(request, pk):
    task_record = get_object_or_404(Task, pk=pk)
    if request.method == 'POST':
        task_record.title = request.POST['title']
        task_record.description = request.POST['description']
        task_record.completed = 'completed' in request.POST
        task_record.created_date= request.POST['created_date']
        task_record.due_date = request.POST['due_date']
        task_record.save()
        return redirect('tasklist')
    return render(request, 'tasks/taskform.html', {'task': task_record, 'action': 'Update'})

def task_delete(request, pk):
    task_to_delete = get_object_or_404(Task, pk=pk)
    if request.method == 'POST':
        task_to_delete.delete()
        return redirect('tasklist')
    return render(request, 'tasks/taskdelete.html', {'task_delete': task_to_delete})