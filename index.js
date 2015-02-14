var Hapi = require('hapi');

var server = new Hapi.Server(~~process.env.PORT || 5000, '0.0.0.0');

server.route({
  method: 'GET',
  path:'/hello',
  handler: function (request, reply) {
     reply('hello world');
  }
},
{
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
     reply('hello');
  }
}
);

server.start();
