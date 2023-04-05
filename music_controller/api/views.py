from django.shortcuts import render
from rest_framework import generics
from .serialisers import RoomSerialiser
from .models import Room

# Create your views here.

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerialiser