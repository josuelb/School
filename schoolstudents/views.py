from rest_framework import viewsets, response
from .models import *
from .serializer import *
from rest_framework.permissions import IsAuthenticated
# Create your views here.


class AlunoViews(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )

    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer


class FuncionarioViews(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )

    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer


class CargosViews(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )

    queryset = Cargos.objects.all()
    serializer_class = CargosSerializer
