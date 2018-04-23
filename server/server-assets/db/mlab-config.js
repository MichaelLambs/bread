var mongoose = require("mongoose");

var connectionString = "mongodb://bread:bread@ds014658.mlab.com:14658/breadit";
var connection = mongoose.connection;

mongoose.connect(connectionString);

connection.on("error", err => {
 console.error("mlab Error: ", err);
});

connection.once("open", () => {
 console.log("connected to MLAB BOOOOOOYYAAAAAAAAKAAAASHAAAAAAmeow");
});