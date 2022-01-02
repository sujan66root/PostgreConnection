const express = require("express");
const db = require("./db/db");
const router = express.Router();
const app = express();
const PORT = 3000;
app.use(express.json());

// station table
app.get("/station", async (req, res) => {
  const station = await db("station").select([
    "id",
    "name",
    "latitude",
    "longitude",
  ]);
  res.json({ station });
});
app.post("/station", async (req, res) => {
  const station = await db("station").insert(req.body);
  res.json({ station });
});
// parameter table
app.post("/parameter", async (req, res) => {
  const parameter = await db("parameter").insert(req.body);
  res.json({ parameter });
});
app.get("/parameter", async (req, res) => {
  const parameter = await db("parameter").select([
    "id",
    "name",
    "code",
    "station_id",
  ]);
  res.json({ parameter });
});
// joining tables
app.get("/stationp", async (req, res) => {
  const z = await db("parameter")
    .select("*")
    .join("station", { "station.id": "parameter.station_id" });
  res.json({ z });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
