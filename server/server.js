const express = require("express");
const app = express();
const PORT = 8080;
const ringsRoutes = require("./routes/rings");
const cuffsRoutes = require("./routes/cuffs");
const necklacesRoutes = require("./routes/necklaces");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  next();
});

app.use("/rings", ringsRoutes);

app.use("/cuffs", cuffsRoutes);

app.use("/necklaces", necklacesRoutes);

app.listen(PORT, () => {});
