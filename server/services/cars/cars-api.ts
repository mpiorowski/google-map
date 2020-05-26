import * as express from "express";
import knex = require("../../config/db");
import { Car, cars } from "./cars-data";

const router = express.Router();
router.use(express.json());

const now = Date.now();

// clear cars every time server restart
knex<Car[]>("cars").delete().then();
knex<Car[]>("cars").insert(cars).then();

// cars api
router.get("/api/cars", async (req, res) => {
  console.log("request Api");
  try {
    knex<Car[]>("cars")
      .orderBy("id", "asc")
      .then((value) => {
        res.json(value);
      });
  } catch (error) {
    console.log(now + " - " + error.message);
  }
});

router.get("/api/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;
    knex<Car[]>("cars")
      .where("id", id)
      .then((value) => {
        res.json(value);
      });
  } catch (error) {
    console.log(now + " - " + error.message);
  }
});

// router.post("/api/cars", (req, res) => {
//   try {
//     const { text } = req.body;
//     knex<Car[]>("cars")
//       .returning("*")
//       .insert(cars)
//       .then((value) => {
//         res.json(value);
//       });
//   } catch (error) {
//     console.log(now + " - " + error.message);
//   }
// });

export = router;
