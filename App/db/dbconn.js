var mysql = require('mysql2')


const connection = mysql.createConnection({
    host:       'localhost',
    user:       'root',
    database:   'od'
});



export function autenticacao() {

connection.query(

    'SELECT * FROM `usuarios` WHERE `id` = "1"',

    function res (err, results) {

       return results;

        if(err) {
           return console.log("Erro em conseguir dados!")
        }
        
      
    })};

