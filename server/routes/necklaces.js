const express = require("express");
const router = express.Router();
const fs = require("fs");
const necklacess = __dirname + "../data/necklaces.json";
const necklacessDetails = __dirname + "../data/necklaces-details.json";
const { uuid } = require("uuidv4");

router.use(express.json());

const readFile = (file) => {
  let data = fs.readFileSync(file);
  return JSON.parse(data);
};

router.get("/", (req, res) => {
  let necklaceList = readFile(necklacess);
  res.status(200).json(necklaceList);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let necklaceID = readFile(necklacessDetails);
  let neckDeet = necklaceID.find((necklace) => necklace.id == id);
  res.status(200).json(necklacessDetails);
});
