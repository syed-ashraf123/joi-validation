const express = require("express");
const app = express();
const validation = require("./validation");
app.use(express.json());

app.post("/", validation.registeration, (req, res) => {
  //Inserting Data
  res.send({ msg: "Successfully Registered" });
});

app.post("/data", validation.data, (req, res) => {
  res.send({ msg: "Data Inserted" });
});
app.listen(4000, () => console.log("Server is running"));
