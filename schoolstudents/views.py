from rest_framework import viewsets
from .models import Student
from .serializer import StudentSerializer
# Create your views here.


class StudentsViewSets(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
