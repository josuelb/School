from rest_framework import serializers
from .models import *


class AlunoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = [
            'id',
            'nome',
            'matricula',
            'date_Nasc',
            'sexo',
            'curso'
        ]


class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = [
            'id',
            'nome',
            'ID_FUNCIONARIO',
            'date_Nasc',
            'sexo',
            'cargo',
            'date_entrada'
        ]


class DiretoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diretoria
        fields = [
            'id',
            'nome',
            'ID_FUNCIONARIO',
            'date_Nasc',
            'sexo',
            'cargo',
            'date_entrada'
        ]
