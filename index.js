const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

// middleWare
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Doctors portal server is running");
});

app.listen(port, () => console.log(`Doctors portal running on port : ${port}`));
