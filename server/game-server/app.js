var fs = require('fs');
var pomelo = require('pomelo');
require('./app/httpserver/login');

/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'server');

// app configuration
app.configure('production|development', 'connector', function(){
  app.set('connectorConfig',
    {
      connector : pomelo.connectors.hybridconnector,
      heartbeat : 3,
      useDict : true,
      useProtobuf : true,
      //ssl: {
      //  type: 'wss',
      //	key: fs.readFileSync('../shared/server.key'),
  		//	cert: fs.readFileSync('../shared/server.crt')
      //}
    });
});
app.configure('production|development', 'manager', function(){

  Game.HttpServer.Login.Instance.init(app);
});
// start app
app.start();

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack);
});