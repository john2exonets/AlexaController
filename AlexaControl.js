//
//  AlexaController.js  --  Publish MQTT packets via Alexa
//
//  John D. Allen
//  February, 2020
//

'use strict';

var DEBUG = true;
const BROKER = "http://10.1.1.28";

var fauxmo = require('node-fauxmo');
var mqtt = require('mqtt');

var copts = {
  keepalive: 5000
};

//---------------------------------------------------------------------------
// MQTT Stuff
//---------------------------------------------------------------------------
var client = mqtt.connect(BROKER, copts);

client.on("connect", function() {
  // do nothing; here in case we want to act on incoming MQTT packets.
});

//---------------------------------------------------------------------------
// Alexa Stuff
//---------------------------------------------------------------------------
var fm = new fauxmo(
{
  devices: [{
  {
    name: 'Destruct',
    port: 12344,
    handler: (action) => {
      if (action == 1) { console.log("Self Destruct Started..."); }
      if (action == 0) { console.log("Self Destruct Stopped."); }
    }
  },
  {
    name: 'Emergency Plan Alpha',
    port: 12345,
    handler: (action) => {
      if (DEBUG) { console.log('Alpha action:', action); }
      if (action == 1) {
        client.publish('plan/alpha', '{"cmd": "Execute"}');
      }
      if (action == 0) {
        client.publish('plan/alpha', '{"cmd": "Stop"}');
      }
    }
  }
  ]
});

console.log('Alexa Controller has Started...');
