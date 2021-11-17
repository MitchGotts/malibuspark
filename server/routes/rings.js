const express = require("express");
const router = express.Router();
const fs = require("fs");
const riing = __dirname + "../data/rings-details.json";
const riingList = __dirname + "../data/rings.json";
const { uuid } = require("uuidv4");

router.use(express.json());

const readFile = (file) => {
  let data = fs.readFileSync(file);
  return JSON.parse(data);
};

router.get("/", (req, res) => {
  let ringList = readFile(riingList);
  res.status(200).json(ringList);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let ringID = readFile(riing);
  let ringDeet = ringID.find((ring) => ring.id == id);
  res.status(200).json(ringDeet);
});

router.post("/", (req, res) => {
  const newID = uuid();
  let { title, description } = req.body;
  let createListObj = {
    id: newID,
    title: title,
    image: null,
    price: price,
  };
  let createDetailedObj = {
    id: newID,
    title: title,
    image: null,
    price: price,
  };
  let newString = (placeholder) => {
    return JSON.stringify(placeholder);
  };

  let ringList = readFile(riingList);
  ringList.push(createListObj);
  let newRingList = newString(ringList);
  fs.writeFileSync(riingList, ringList);
  res.status(200).send("Rings successfully updated.");

  let ringDetails = readFile(riing);
  ringDetails.push(createDetailedObj);
  let newRingDetails = newString(ringDetails);
  fs.writeFileSync(riing, ringDetails);
  res.status(200).send("Product successfully updated.");
});

module.exports = router;
