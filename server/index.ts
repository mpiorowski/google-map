import express = require("express");
import cors = require("cors");
import knex = require("./config/db");

import socketIO = require("socket.io");
import http = require("http");

const app = express();
//middleware
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = socketIO(server, { path: "/socket"});

//routes
import carsApi = require("./services/cars/cars-api");
app.use(carsApi);

//sockets 
require('./services/cars/cars-socket')(io);

const port = 9000;
server.listen(port, () => {
  console.log("server has started on port:", port);
});
