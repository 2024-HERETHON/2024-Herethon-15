from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login, logout 

from accounts.forms import SignUpForm
from accounts.models import CustomUser

# Create your views here.

def signup_view(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            # if form.cleaned_data['password1'] == form.cleaned_data['password2']:
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password1'])
            user.save()
            login(request, user)
            request.session['username'] = user.username  # 사용자 이름을 세션에 저장
            return redirect('accounts:join')
    else:
        form = SignUpForm()

    return render(request, 'be_showJoinContainer.html', {'form': form})

def joinfinish_view(request):
    username = request.session.get('username')
    return render(request, 'JoinFinish.html', {'username': username})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            li_email = form.cleaned_data.get('username')
            li_pw = form.cleaned_data.get('password')
            user = authenticate(request=request, username=li_email, password=li_pw)
            if user is not None:
                login(request, user)
                return redirect('todo')  # 로그인 성공 시 리다이렉트할 URL
            else:
                return render(request, 'login_fail.html', {'form': form})
        return render(request, 'login_fail.html', {'form': form})
    else:
        form = AuthenticationForm()
        return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('todo')