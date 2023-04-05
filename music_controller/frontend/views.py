from django.shortcuts import render

# Render the html template
# 
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')