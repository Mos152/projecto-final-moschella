var server = require ('http').Server(app);
var io = require ('socket.io')(server);
var app = require ('express')();    

io.on('connection', function(socket){
    console.log('acaba de entrar a la aplicacion');
    socket.emit('test event','here is some data');
});

server.listen(3000, () => {
    console.log("server listening in port 3000");
});

app.get('/', function(req, res){
    res.ReadFile(__dirname + '/boton-enviar.component.ts');
    console.log ("!!!!!!!!!!!!SE RECIBIO EL EVENTOOOOOOOOOOOOOOOOOOOOOO AAAAAAAAAAAAAAAAAAHHHHHHHHHH XDDDDDDDDDDDDDDDDDD");
  });