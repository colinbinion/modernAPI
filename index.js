const hapi = require('hapi');
const mongoose = require('mongoose');

const server = hapi.server({
  port: 4000,
  host: 'localhost'
});

mongoose.connect('mongo://bobLoblaw:test1234@ds145951.mlab.com:45951/modernapi');

mongoose.connect('mongo://indrek::test@ds129670.mlab.com:31090/powerful-api');

mongoose.connection.once('open', () => {
  console.log('====================================');
  console.log(`connected to DB`);
  console.log('====================================');
})

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
