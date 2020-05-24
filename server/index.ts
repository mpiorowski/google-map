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
export const io = socketIO(server);

//routes
import carsApi = require("./services/cars/cars-api");
app.use(carsApi);

//sockets 
require('./services/cars/cars-socket')(io);

server.listen(5000, () => {
  console.log("server has started");
});
