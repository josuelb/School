from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Aluno', views.AlunoViews, basename='APIalunos')
router.register(r'Funcionario', views.FuncionarioViews,basename='APIfuncionarios')
router.register(r'Diretoria',views.DiretoriaViews, basename='APIdiretoria')

urlpatterns = [
    path('school/APIs/', include(router.urls)),
]