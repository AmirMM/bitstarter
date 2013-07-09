
var fs = require('fs');
//var buff = require('buffer');

var inputFile = 'index.html';

var inputBuff = fs.readFileSync(inputFile);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
response.send(inputBuff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
