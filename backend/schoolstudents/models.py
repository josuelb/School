from django.db import models

# Create your models here.


class Cargos(models.Model):
    ID_CARGOS = models.IntegerField(null=False, auto_created=True, primary_key=True)
    nome = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.nome}'


class Pessoa(models.Model):
    nome = models.CharField(max_length=100)
    date_Nasc = models.DateField()
    sexo = models.CharField(max_length=1)

    class Meta:
        abstract = True


class Aluno(Pessoa):
    matricula = models.IntegerField()
    curso = models.CharField(max_length=100)


class Funcionario(Pessoa):
    ID_FUNCIONARIO = models.IntegerField(auto_created=True)
    date_entrada = models.IntegerField()
    cargo = models.ForeignKey(Cargos, on_delete=models.CASCADE, default=None)