// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) { // if you are using clearDB - you will use the cleardb url - see the config vars
  // We are in production
  connection= mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // We are in a local environment
   connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "muddavugga",
    password: "Posies23",
    database: "burgers_db"
  });
  
  // Make connection.
  
}; 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;