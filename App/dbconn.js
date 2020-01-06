var db = require('mysql');
var conn = db.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "one destiny"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
});


var sql = "INSERT INTO usuario (nick, email, senha) VALUES ('Tony', 'tony@domain.com', '201123123')";
  
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Data inserted!, ID: " + result.insertId); //Data inserted!, ID: 1
  });
