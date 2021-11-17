const express = require("express");
const router = express.Router();
const fs = require("fs");
const cuffss = __dirname + "../data/cuffs.json";
const cuffssDetails = __dirname + "../data/cuffs-details";
const { uuid } = require("uuidv4");

router.use(express.json());

const readFile = (file) => {
  let data = fs.readFileSync(file);
  return JSON.parse(data);
};

router.get("/", (req, res) => {
  let cuffList = readFile(cuffs);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let cuffID = readFile(cuffssDetails);
  let cuffDeet = cuffID.find((cuff) => cuff.id == id);
  res.status(200).json(cuffDeet);
});
