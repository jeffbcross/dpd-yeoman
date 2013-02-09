var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 3501,
  env: 'development'
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});

server.use = function (middleware) {
	//TODO: Figure out what to do about middlewares
	void(middleware);
}

module.exports = server;