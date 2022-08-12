from django.urls import path
from . import views

app_name = "base"

urlpatterns = [
    path('', views.home, name="home"),
    path('login/', views.loginPage, name="login"),
    path('signup/', views.signupPage, name="signup"),
    path('logout/', views.logoutUser, name="logout"),
    path('dashboard/chunk_file/', views.chunk_file, name="chunk_file"),
    path('about/', views.about, name="about"),
    path('dashboard/splitted-files/', views.splitted_files, name='splitted_files'),
    path('documentation/', views.documentation, name="documentation"),
    path('contact/', views.contact, name="contact"),
    path('faq/', views.faq, name="faq"),
    path('privacy/', views.privacy, name="privacy"),
    path('terms_condition/', views.t_c, name="t_c"),
    path('dashboard/', views.dashboard, name="dashboard")

]