from django.urls import path, include
from . import views
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

router = routers.DefaultRouter()
router.register(r'Aluno', views.AlunoViews, basename='APIalunos')
router.register(r'Funcionario', views.FuncionarioViews,basename='APIfuncionarios')
router.register(r'Cargos',views.CargosViews, basename='APICargos')

urlpatterns = [
    path('school/APIs/', include(router.urls)),
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view())
]