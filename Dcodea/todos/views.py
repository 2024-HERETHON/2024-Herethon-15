from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.conf import settings
from .forms import TodoForm, QuestionForm, CommentForm, ProfileImageForm, IntroductionForm
from .models import Profile, Todo, Question, Comment
from django.http import JsonResponse
from django.contrib import messages

@login_required
def main(request):
    todo_form = TodoForm()
    question_form = QuestionForm()
    comment_form = CommentForm()
    user_profile, created = Profile.objects.get_or_create(user=request.user)
    profile_form = ProfileImageForm(instance=user_profile)
    introduction_form = IntroductionForm(instance=user_profile)

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
        elif 'introduction_form' in request.POST:
            introduction_form = IntroductionForm(request.POST, instance=user_profile)
            if introduction_form.is_valid():
                introduction_form.save()
                return redirect('todo')

    todos = Todo.objects.filter(user=request.user).order_by('date')
    questions = Question.objects.all()
    comments = Comment.objects.all()
    user_question = Question.objects.filter(user=request.user).last()
    all_profiles = Profile.objects.all()

    return render(request, 'main.html', {
        'todo_form': todo_form,
        'todos': todos,
        'question_form': question_form,
        'questions': questions,
        'comment_form': comment_form,
        'comments': comments,
        'profile_form': profile_form,
        'introduction_form': introduction_form,
        'user_profile': user_profile,
        'userName': request.user.username,
        'userPosition': request.user.userPosition,
        'question': user_question.content if user_question else '블라블라',
        'user_introduction': user_profile.introduction,  # user_profile의 introduction 값을 전달
        'all_profiles': all_profiles,  # 모든 프로필을 전달
    })

@login_required
def delete_todo(request, todo_id):
    todo = get_object_or_404(Todo, id=todo_id)

    if request.method == 'POST':
        todo.delete()
        messages.success(request, '할 일을 성공적으로 삭제하였습니다.')
        return JsonResponse({'status': 'success'})
    return render(request, 'todos/todo_confirm_delete.html', {'todo': todo})

@login_required
def edit_todo(request, todo_id):
    todo = get_object_or_404(Todo, id=todo_id)

    if request.method == 'POST':
        data = json.loads(request.body)
        new_description = data.get('description', todo.description)
        todo.description = new_description
        todo.save()
        messages.success(request, '할 일을 성공적으로 수정하였습니다.')
        return JsonResponse({'status': 'success'})
    return render(request, 'todos/todo_edit.html', {'todo': todo})