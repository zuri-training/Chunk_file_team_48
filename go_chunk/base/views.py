from pickle import FALSE
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from zipfile import  ZipFile
import pandas as pd
import os
from .models import ChunkedFile
# Create your views here.
def loginPage(request):
    
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

    return render(request, 'base/login.html')


def signupPage(request):
    
    form = UserCreationForm()

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=FALSE)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'An error occured during registration')

    context = {'form':form}
    return render(request, 'base/signup.html', context)


def logoutUser(request):
    logout(request)
    return redirect('home')


def home(request):
    return render(request, 'base/home.html')

def about(request):
    return render(request, 'base/about.html')

def documentation(request):
    return render(request, 'base/documentation.html')

def contact(request):
    return render(request, 'base/contact.html')

def faq(request):
    return render(request, 'base/faq.html')

def privacy(request):
    return render(request, 'base/privacy.html')

def t_c(request):
    return render(request, 'base/t_c.html')


@login_required(login_url='/signin')
def chunk_file(request):
    if request.method == "POST":
        file = request.FILES.get('file')
        ouput_name = request.POST['file_name']
        chunk_size = request.POST['chunk_size']
        user = request.user
        if chunk_size == '' or file == None:
            messages.error(request, 'fields cannot be blank!')
            return redirect('/')
        
        if  file.name.endswith('csv')  :
            if output_name == '':
                output_name = file.name

            try:
                os.mkdir('media')
            except FileExistsError:
                pass

            chunk_size = int(chunk_size)
            batch_no = 1
            for chunk in pd.read_csv(file, chunksize=chunk_size):
                with ZipFile(f'media/{user}{output_name}-.zip', 'a') as zip_file:
                    file_name = f"{output_name}-" + str(batch_no) + ".csv"
                    zip_file.write(file_name,chunk.to_csv(file_name, index=False))
                os.remove(file_name)
                batch_no += 1
                
            f_name = f'{user}{ouput_name}-.zip'
            csv_obj = ChunkedFile.objects.create(user=user, file=f_name)
            csv_obj.save()
            
            new_file = ChunkedFile.objects.get(user=user, file=f_name)
            new_file_id = new_file.file_id
            
            messages.info(request, 'file hs been split successfully')
            return redirect(f'/new-file/{new_file_id}')
        
        messages.error(request, 'invalid file format')
        return redirect('/split_form_page')
    
    return render(request, 'split_form_page.html')


@login_required(login_url='/signin')
def new_file(request, pk):
    user=request.user 
    file = ChunkedFile.objects.filter(user=user, file_id=pk)
    if file.exists():
        file = ChunkedFile.objects.get(user=user, file_id=pk) 
        return render(request, 'new.html', {'file':file})
        
    messages.error(request, 'file not found')
    return render(request, 'new.html')