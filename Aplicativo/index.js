var express = require("express");
var bodyParser = require('body-parser');

var chalk = require('chalk')

var app = express();

app.use(bodyParser.json());

var PORTA = 3030;

app.get('/user', function(req, res) {
    var user = [
        {
            username: "Saiko",
            email: "sawarafael@gmail.com",
            password: "1234"
        }
    ];

    res.send(JSON.stringify(user));

})

app.listen(PORTA, function(){
    console.log(chalk.green(` 
        
        Servidor rodando na porta ${PORTA}!! 
        
         `))
})