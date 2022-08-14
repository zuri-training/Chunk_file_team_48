from datetime import datetime
from pickle import FALSE
from django.utils.datastructures import MultiValueDictKeyError
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from zipfile import  ZipFile, ZIP_DEFLATED
import pandas as pd
import os
# from datetime import datetime, timedelta
from .models import ChunkedFile
# Create your views here.


dir_path = os.path.dirname(os.path.realpath('go_chunk'))
folder_path = os.path.join(dir_path,'media')
temp_folder_path = os.path.join(dir_path,'temp')
date = datetime.now().strftime("%M-%S")
print(folder_path)
def storingFile(saved, user, ouput_name, file, chunk_size,batch_no):
                if saved == 'on':
                    db_file_path = f'media/{user}-{ouput_name}-{date}.zip'
                    zip_file_path = f'media/{user}-{ouput_name}-{date}.zip'
                    for chunk in pd.read_csv(file, chunksize=chunk_size, encoding='Windows-1252'):
                        with ZipFile(zip_file_path, 'a') as zip_file:
                            file_name = f"{ouput_name}-" + str(batch_no) + ".csv"
                            zip_file.write(file_name,chunk.to_csv(file_name, index=False) ,compress_type=ZIP_DEFLATED)
                        os.remove(file_name)
                        batch_no += 1
                    csv_obj = ChunkedFile.objects.create(user=user, file=db_file_path)
                    csv_obj.save()

                if saved == False:
                    temp_zip_file_path = f'temp/{user}-{ouput_name}-{date}.zip'
                    temp_db_file_path = f'temp/{user}-{ouput_name}-{date}.zip'
                    for chunk in pd.read_csv(file, chunksize=chunk_size, encoding='Windows-1252'):
                        with ZipFile(temp_zip_file_path, 'a') as zip_file:
                            file_name = f"{ouput_name}-" + str(batch_no) + ".csv"
                            zip_file.write(file_name,chunk.to_csv(file_name, index=False) ,compress_type=ZIP_DEFLATED)
                        os.remove(file_name)
                        batch_no += 1
                    csv_obj = ChunkedFile.objects.create(user=user, file=temp_db_file_path)
                    csv_obj.save()


def home(request):
    return render(request, 'base/home.html')

def about(request):
    return render(request, 'base/about.html')

def documentation_intro(request):
    return render(request, 'base/documentation_intro.html')

def documentation_getting_started(request):
    return render(request, 'base/documentation_getting_started.html')

def documentation_how(request):
    return render(request, 'base/documentation_how.html')

def documentation_dashboard(request):
    return render(request, 'base/documentation_dashboard.html')

def contact(request):
    return render(request, 'base/contact.html')

def faq(request):
    return render(request, 'base/faq.html')

def privacy(request):
    return render(request, 'base/privacy.html')

def t_c(request):
    return render(request, 'base/t_c.html')


def loginPage(request):
    
    if request.user.is_authenticated:
        return redirect('/dashboard/')

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
            return redirect('/dashboard/')
        else:
            messages.error(request, 'Username or Password does not exist')

    return render(request, 'base/login.html')


def signupPage(request):
    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']
        if password != password2:
            messages.error(request, 'passwords do not match')
        #  return redirect('/signup')
        elif len(password) < 4:
            messages.error(request, 'password is too short')
        #  return redirect('/signup')
        elif User.objects.filter(username=username).exists():
            messages.error(request, 'username taken')
        #  return redirect('/signup')
        elif User.objects.filter(email=email).exists():
            messages.error(request, 'email already in use. if this is your account, please login')
        #  return redirect('/signup')
        else:
            new_user = User.objects.create_user(username=username, email=email, password=password)
            new_user.save()
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('/')       
    return render(request, 'base/signup.html')


def logoutUser(request):
    logout(request)
    messages.success(request, "Loggedout Successfully")
    return redirect('/')


@login_required(login_url='/login/')
def chunk_file(request):
    if request.method == "POST":
        file = request.FILES.get('doc')
        ouput_name = request.POST['file_name']
        chunk_size = request.POST['chunk_no']
        print(file)
        print(ouput_name)
        print(chunk_size)
        user = request.user
        if chunk_size == '' or file == None:
            messages.error(request, 'fields cannot be blank!')
            return redirect('/dashboard/chunk_file/')

        try:
            saved = request.POST['saved']
        except MultiValueDictKeyError:
            saved = False
            messages.error(request, "You didn't save the splited files. 15 minutes from now it will be deleted")

        if not os.path.exists(folder_path):
            os.mkdir(f'{dir_path}/media')
        if not os.path.exists(temp_folder_path):
            os.mkdir(f'{dir_path}/temp')

        if  file.name.endswith('csv')  :
            if ouput_name == '':
                ouput_name = file.name
    
            chunk_size = int(chunk_size)
            batch_no = 1
            
            # storing the chunked file in media folder or temp folder
            storingFile(saved, user, ouput_name,file, chunk_size,batch_no)
            

            messages.success(request, 'file has been split successfully')
            return redirect('/dashboard/chunk_file/')
        else:
            messages.error(request, 'invalid file format')
    return render(request, 'base/chunk_file.html')
    
@login_required(login_url='/login/')   
def dashboard(request):
    return render(request, 'base/chunk_file.html')


@login_required(login_url='/login/')
def splitted_files(request):
    user=request.user 
    files = ChunkedFile.objects.all()

    if files.exists():
        files = ChunkedFile.objects.filter(user=user)
        return render(request, 'base/splitted_files.html', {'files':files})
        
    messages.error(request, 'file not found')
    return render(request, 'base/splitted_files.html')