from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import pointDown
from .models import Point

@login_required
def point_view(request):
    myPoint, created = Point.objects.get_or_create(user=request.user)

    input_point_num = 0  # 변수 초기화

    if request.method == "POST":
        form = pointDown(request.POST)
        if form.is_valid():
            input_point_num = form.cleaned_data['input_point_num']
            if input_point_num <= myPoint.myPoint:
                myPoint.myPoint -= input_point_num
                myPoint.save()
                messages.success(request, '신청 완료')
            else:
                messages.error(request, '신청 실패')
            return redirect('.')
    else:
        form = pointDown()
    return render(request, 'point.html', {'form': form, 'myPoint': myPoint, 'input_point_num': input_point_num})
