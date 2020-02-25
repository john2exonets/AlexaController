# AlexaController
Publish MQTT packets using Alexa voice commands

This uses the (fauxWeMo)[https://kernelmanic.com/2019/05/14/control-anything-with-alexa-using-node-js/] Node.JS module to interface with Amazon's Alexa and get sent voice commands. We then just attach some Node.JS code to send out MQTT packets for both "On" and "Off".

So, in the Example code, I have defined "Emergency Plan Alpha", so to trigger this I tell Alexa: "Alexa...Turn on Emergency Plan Alpha". This triggers the program to send out 'plan/alpha: {"cmd": "Execute"}'.

