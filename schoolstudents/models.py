from django.db import models

# Create your models here.


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
    ID_FUNCIONARIO = models.IntegerField()
    date_entrada = models.IntegerField()
    cargo = models.CharField(max_length=100)


class Diretoria(Funcionario):
    class Meta:
        proxy = True

    def save(self, *args, **kwargs):
        self.cargo += " (diretoria)"
        self.autorizacao = "Super autorização"
        super(Diretoria, self).save(*args, **kwargs)

