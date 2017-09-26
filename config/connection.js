// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) { // if you are using clearDB - you will use the cleardb url - see the config vars
  // We are in production
  connection= mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME
  });
} else {
  // We are in a local environment
  connection = mysql.createConnection({
      host: "localhost",
      user: "muddavugga",
      password: "Posies23",
      database: "burgers_db"
  });
}; 

// Export connection for our ORM to use.
module.exports = connection;