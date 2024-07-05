from django import forms
from .models import Todo, Question, Comment, Profile

class ProfileImageForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['profile_image']

class IntroductionForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['introduction']

class TodoForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ['description']
        #fields = ['description', 'date', 'completed']
        '''
        widgets = {
            'date': forms.DateInput(attrs={'type': 'date'}),
        }
        '''

class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ['content']
        exclude = ('user',)

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['content']
        exclude = ('article', 'user',)