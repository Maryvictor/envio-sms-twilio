var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('SID', 'Token');

// Send the text message.
client.messages.create({
  to: 'Número que vai receber a mensagem',
  from: 'Seu número na conta twilio',
  body: 'Oi, Maria! Como foi o fim de semana?'
});