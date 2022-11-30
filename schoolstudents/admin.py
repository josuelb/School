from django.contrib import admin
from .models import *
# Register your models here.


@admin.register(Aluno)
class Alunos(admin.ModelAdmin):
    list_display = (
        "id",
        "nome",
        "matricula",
        "date_Nasc",
        "sexo",
        "curso"
    )
    list_display_links = (
        "id",
        "nome",
        "matricula"
    )
    search_fields = (
        "id",
        "nome",
        "matricula",
        "curso"
    )


@admin.register(Funcionario)
class Funcionarios(admin.ModelAdmin):
    list_display = (
        "id",
        "nome",
        "ID_FUNCIONARIO",
        "date_Nasc",
        "sexo",
        "cargo",
        "date_entrada"
    )

    list_display_links = (
        "id",
        "nome",
        "ID_FUNCIONARIO"
    )

    search_fields = (
        "id",
        "nome",
        "ID_FUNCIONARIO",
        "cargo",
        "date_entrada"
    )


@admin.register(Diretoria)
class Diretorias(admin.ModelAdmin):
    list_display = (
        "id",
        "nome",
        "ID_FUNCIONARIO",
        "date_Nasc",
        "sexo",
        "cargo",
        "date_entrada"
    )
    list_display_links = (
        "id",
        "nome",
        "ID_FUNCIONARIO"
    )
    search_fields = (
        "id",
        "nome",
        "ID_FUNCIONARIO",
        "cargo",
        "date_entrada"
    )