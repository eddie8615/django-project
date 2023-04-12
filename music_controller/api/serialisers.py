from rest_framework import serializers
from .models import Room

# Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes
# that can then be easily rendered into JSON, XML, or other content types.
class RoomSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 
                  'votes_to_skip', 'created_at')
        
class CreateRoomSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')

class UpdateRoomSerialiser(serializers.ModelSerializer):
    code = serializers.CharField(validators=[])

    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip', 'code')