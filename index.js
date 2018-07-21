const hapi = require('hapi');
const mongoose = require('mongoose');

const server = hapi.server({
  port: 4000,
  host: 'localhost'
});

const init = async () => {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      return '<h1>My Hapi API is running';
    }
  });

  await server.start();
  console.log('====================================');
  console.log(`Server running at: ${server.info.uri}`);
  console.log('====================================');
};



init();
