from django.shortcuts import redirect, render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from todos.models import Todo, Question
from .forms import PostSearchForm
from django.views.generic.edit import FormView
from django.contrib.auth import get_user_model
from .models import todosearch

User = get_user_model()

@login_required
def detail_view(request, userId):
    todos = Todo.objects.filter(user__userId=userId)
    user = get_object_or_404(User, userId=userId)
    questions = Question.objects.filter(user=user)
    context = {
        'user': user,
        'todolist': todos,
        'questions': questions,
    }
    return render(request, 'explore_user.html', context)

class SearchFormView(FormView):
    form_class = PostSearchForm
    template_name = 'search.html'

    def get(self, request, *args, **kwargs):
        form = self.get_form()
        userPosition = form.fields['userPosition'].initial  # 기본값 사용
        user_todos = self.get_user_todos(userPosition)
        questions = Question.objects.all()
        return self.render_to_response(self.get_context_data(form=form, userPosition=userPosition, user_todos=user_todos, questions=questions))

    def post(self, request, *args, **kwargs):
        form = self.get_form()
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)

    def form_valid(self, form):
        userPosition = form.cleaned_data.get('userPosition', 'frontend')  # 기본값으로 'frontend' 사용
        user_todos = self.get_user_todos(userPosition)
        questions = Question.objects.all()

        content = {
            'form': form,
            'userPosition': userPosition,
            'user_todos': user_todos,
            'questions': questions,
        }

        return self.render_to_response(content)

    def get_user_todos(self, userPosition):
        users = User.objects.filter(userPosition=userPosition)
        user_todos = {
            user: Todo.objects.filter(user=user)
            for user in users
        }
        return user_todos
