from django.urls import path
from menu import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("",views.index, name= "home"),
    path("home",views.index, name= "home"),
    path("login", views.login_request, name="login"),
    path("logout", views.logout_request, name= "logout"),
    path("register", views.register_request, name="register"),
    path("menu",views.menu, name= "menu"),
    path("about",views.about, name= "about")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)