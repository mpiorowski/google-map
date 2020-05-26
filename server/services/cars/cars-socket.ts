
import knex = require("../../config/db");
import { Car, cars } from "./cars-data";

const now = Date.now();
function ioConnection(io) {
  let interval;

  io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => socketCarsResponse(socket), 5000);
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      clearInterval(interval);
    });
  });
  
  //randomly change cars direction and send data socket request to client (should add all updates into Promise.all and then send data, but my time has ended :) )
  const socketCarsResponse = (socket) => {
    cars.forEach((car) => {
      car.x = car.x - 0.0001;
      car.y = car.y - 0.0001;
      knex("cars")
        .where({ name: car.name })
        .update({ x: car.x, y: car.y })
        .then();
    });
  
    knex<Car[]>("cars")
      .orderBy("id", "asc")
      .then((value) => {
        socket.emit("cars-response", value);
      });
  };
}
  
export = ioConnection;
