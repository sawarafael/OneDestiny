const bodyParser = require('body-parser')
const express = require('express')
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 3000
const ip = 'localhost';

app.use(express.static('public'))

// BODY-PARSER PROPS
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// EXPRESS GETS e POSTS
//Mostrar page - HOME
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/views/login.html');
  });
  
  io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', (data) => {
      console.log(data);
    });
  });


app.listen(port, ip, () => {

    console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    console.log("■                 Servidor Inicializado!!                    ■")
    console.log(`■ 1) Para Acessar o Servidor: http://${ip}:${port}           ■`)
    console.log("■ 2) Para Derrubar o Servidor: ctrl + c                      ■")
    console.log("■ 3) Para Reiniciar o Servidor: rs                           ■")
    console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")

})