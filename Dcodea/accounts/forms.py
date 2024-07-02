from django import forms
from django.contrib.auth import get_user_model

class SignUpForm(forms.ModelForm):
    password1 = forms.CharField(widget=forms.PasswordInput, label="비밀번호")
    password2 = forms.CharField(widget=forms.PasswordInput, label="비밀번호 확인")

    class Meta:
        model = get_user_model()
        fields = ['username', 'userId', 'password1', 'password2', 'userPosition', 'userOpen']

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords do not match")
        return password2

    def save(self, commit=True):
        user = super(SignUpForm, self).save(commit=False)
        user.set_password(self.cleaned_data['password1'])  # 비밀번호 설정
        if commit:
            user.save()
        return user
