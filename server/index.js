let express = require("express"),
bp = require("body-parser"),
cors = require("cors"),
server = express(),
session = require('./server-assets/auth/sessions')

var port = process.env.PORT || 3000;
require("./server-assets/db/mlab-config");

var authRoutes = require('./server-assets/auth/routes');

var whitelist = ['http://localhost:8080', 'https://herokuapp.com/']

var corsOptions = {
   origin: function(origin, callback){
       var originIsWhiteListed = whitelist.indexOf(origin) !== -1;
       callback(null, originIsWhiteListed);
   },
   credentials: true
}

server.use(cors(corsOptions))
server.use(session)
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
// server.use(express.static(__dirname + "/../public/www/dist"))

server.use(authRoutes);


server.use("*", (error, req, res, next) => {
    res.status(400).send(error);
   });
   
server.listen(port, () => {
    console.log("the server is running... Port:", port);
   });