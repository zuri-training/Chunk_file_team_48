from django.urls import path
from . import views

app_name = "base"

urlpatterns = [
    path('', views.home, name="home"),
    path('login/', views.loginPage, name="login"),
    path('signup/', views.signupPage, name="signup"),
    path('logout/', views.logoutUser, name="logout"),
    path('chunk/', views.chunk_file, name="chunk"),
    path('about/', views.about, name="about"),
    path('new-file/<pk>', views.new_file, name='new_file'),
    path('documentation/', views.documentation, name="documentation"),
    path('contact/', views.contact, name="contact"),
    path('faq/', views.faq, name="faq"),
    path('privacy/', views.privacy, name="privacy"),
    path('terms_condition/', views.t_c, name="t_c")

]