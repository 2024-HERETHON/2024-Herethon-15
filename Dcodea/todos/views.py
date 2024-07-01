from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from .models import Todo
from .forms import TodoForm

# Create your views here.

@login_required
def todo(request):
    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            todo = form.save(commit=False)
            todo.user = request.user
            todo.save()
            return redirect('todo')
    else:
        form = TodoForm()

    todos = Todo.objects.filter(user=request.user).order_by('date')
    return render(request, 'main.html', {'form': form, 'todos': todos, 'userName': request.user.username, 'userPosition': 'Your Position Here'})