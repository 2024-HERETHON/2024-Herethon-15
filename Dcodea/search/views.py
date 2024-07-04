from django.shortcuts import redirect, render, get_object_or_404
from django.contrib.auth.decorators import login_required
from todos.models import Todo


# Create your views here.

@login_required
def detail_view(request, id):
    post = get_object_or_404(Todo, id = id)
    return render(request, 'explore_user.html', {'post':post})