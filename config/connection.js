// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) { // if you are using clearDB - you will use the cleardb url - see the config vars
  // We are in production
  connection= mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // We are in a local environment
  connection = mysql.createConnection({
      host: "etdq12exrvdjisg6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "bhg21cb78xlyfmss",
      password: "zky4bxpiowife21s",
      database: "burgers_db"
  });
}; 

// Export connection for our ORM to use.
module.exports = connection;