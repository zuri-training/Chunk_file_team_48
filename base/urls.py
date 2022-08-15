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
    path('documentation_intro/', views.documentation_intro, name="documentation_intro"),
    path('documentation_getting_started/', views.documentation_getting_started, name="documentation_getting_started"),
    path('documentation_how/', views.documentation_how, name="documentation_how"),
    path('documentation_dashboard/', views.documentation_dashboard, name="documentation_dashboard"),
    path('contact/', views.contact, name="contact"),
    path('dashboard/settings/', views.dashboard_setting, name="dashboard_settings"),
    path('faq/', views.faq, name="faq"),
    path('privacy/', views.privacy, name="privacy"),
    path('terms_condition/', views.t_c, name="t_c"),
    path('dashboard/', views.dashboard, name="dashboard")

]