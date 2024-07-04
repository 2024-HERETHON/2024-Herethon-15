from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.conf import settings
from .forms import TodoForm, QuestionForm, CommentForm, ProfileImageForm
from .models import Profile, Todo, Question, Comment

@login_required
def main(request):
    todo_form = TodoForm()
    question_form = QuestionForm()
    comment_form = CommentForm()
    user_profile, created = Profile.objects.get_or_create(user=request.user)
    profile_form = ProfileImageForm(instance=user_profile)

    if request.method == 'POST':
        if 'todo_form' in request.POST:
            todo_form = TodoForm(request.POST)
            if todo_form.is_valid():
                todo = todo_form.save(commit=False)
                todo.user = request.user
                todo.save()
                return redirect('todo')
        elif 'question_form' in request.POST:
            question_form = QuestionForm(request.POST)
            if question_form.is_valid():
                question = question_form.save(commit=False)
                question.user = request.user
                question.save()
                return redirect('todo')
        elif 'comment_form' in request.POST:
            question_id = request.POST.get('question_id')
            question = Question.objects.get(id=question_id)
            comment_form = CommentForm(request.POST)
            if comment_form.is_valid():
                comment = comment_form.save(commit=False)
                comment.question = question
                comment.user = request.user
                comment.save()
                return redirect('todo')
        elif 'profile_form' in request.POST:
            profile_form = ProfileImageForm(request.POST, request.FILES, instance=user_profile)
            if profile_form.is_valid():
                profile_form.save()
                return redirect('todo')

    todos = Todo.objects.filter(user=request.user).order_by('date')
    questions = Question.objects.all()
    comments = Comment.objects.all()

    return render(request, 'main.html', {
        'todo_form': todo_form,
        'todos': todos,
        'question_form': question_form,
        'questions': questions,
        'comment_form': comment_form,
        'comments': comments,
        'profile_form': profile_form,
        'user_profile': user_profile,
        'userName': request.user.username,
        'userPosition': request.user.userPosition,
    })