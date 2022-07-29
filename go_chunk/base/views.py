from pickle import FALSE
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
import pandas as pd
# Create your views here.
def loginPage(request):
    
    page = 'login'
    if request.user.is_authenticated:
        return redirect('home')

    if request.method == "POST":
        username = request.POST.get('username').lower()
        password = request.POST.get('password')

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'User does not exist')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Username or Password does not exist')
    context = {'page':page}
    return render(request, 'base/login_register.html', context)


def logoutUser(request):
    logout(request)
    return redirect('home')


def home(request):
    return render(request, 'base/home.html')


def chunk_file(request):
    if request.method == "POST":
        file = request.FILES.get('file')
        chunk_size = request.POST[chunk_size]
        
        if file == None or chunk_size == '' :
            messages.error(request, 'fields cannot be blank!')
            return redirect('/')
        
        chunk_size = int(chunk_size)
        batch_no = 1
        for chunk in pd.read_csv(file, chunksize=chunk_size):
            new_file = "new_folder/csv_file" + str(batch_no) + ".csv"
            chunk.to_csv(new_file, index=False)
            batch_no += 1
            return redirect('/')
            
        
        