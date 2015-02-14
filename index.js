var Hapi = require('hapi');

var server = new Hapi.Server(~~process.env.PORT || 8000, '0.0.0.0');

server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
       reply('hello world');
    }
});

server.start();
