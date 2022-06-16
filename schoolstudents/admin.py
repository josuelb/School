from django.contrib import admin
from .models import Student
# Register your models here.


class Students(admin.ModelAdmin):
    list_display = ('id', 'name', 'rg', 'nasc')
    list_display_links = ('id', 'name')
    search_fields = ('id', 'name')


admin.site.register(Student, Students)
