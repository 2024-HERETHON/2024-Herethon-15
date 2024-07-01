from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login, logout 

from accounts.forms import SignUpForm
from accounts.models import CustomUser

# Create your views here.

def signup_view(request):
    if request.method=='GET':
        form = SignUpForm()
        return render(request, 'inputUserInfo.html', {'form': form})
    
    elif request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            # 세션에 사용자 ID 저장
            request.session['user_id'] = user.id
            request.session['userName'] = user.username # 사용자 이름 세션에 저장
            return redirect('signup2')  
        else:
            return render(request, 'inputUserInfo.html', {'form': form})

def inputUserPosition(request):
    if request.method == 'GET':
        return render(request, 'inputUserPosition.html')
    
    elif request.method == 'POST':
        user_id = request.session.get('user_id')
        if user_id is None:
            return redirect('signup_view')
        
        selected_position = request.POST.get('userPosition')
        user = CustomUser.objects.get(id=user_id)
        user.userPosition = selected_position
        user.save()

        return redirect('signup3') 

def inputUserOpen(request):
    if request.method == 'GET':
        return render(request, 'inputUserOpen.html')
    
    elif request.method == 'POST':
        user_id = request.session.get('user_id')
        if user_id is None:
            return redirect('signup_view')

        selected_open = request.POST.get('userOpen')
        user = CustomUser.objects.get(id=user_id)
        user.userOpen = selected_open
        user.save()

        # 회원가입 완료 페이지로 리다이렉트 
        return redirect('signcomplete')

def signComplete(request):
    if request.method == 'GET':
        return render(request, 'JoinFinish.html')
    
    elif request.method == 'POST':
        user_id = request.session.get('user_id')
        if user_id is None:
            return redirect('signup_view')

        user = CustomUser.objects.get(id=user_id)
        user.save()

        # 회원가입 완료 페이지로 리다이렉트 
        return redirect('signup_view', {'userName' : user.username})

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
        return render(request, 'login.html', {'form': form})
    else:
        form = AuthenticationForm()
        return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('todo')