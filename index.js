const hapi = require('hapi');

const server = hapi.server({
  port: 4000,
  host: 'localhost'
});

const init = async () => {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      return '<h1>My Hapi API';
    }
  });



};



init();
