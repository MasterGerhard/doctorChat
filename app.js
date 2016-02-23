var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.sendfile('views/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

});

server.listen(app.get('port'), function() {
    console.log('Express httpServerr listening on port ' + app.get('port'));
});
