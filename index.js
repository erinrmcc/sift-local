var express = require('express');
var server = express();
var port = process.env.PORT || 8080;

server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.use(express.static(__dirname + '/public'));

server.listen(port);
