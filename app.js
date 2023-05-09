const express = require("express");
const {
  getSnacks,
  getSnackById,
  postSnack
} = require("./controllers/snacks.controllers");
const { getStatus } = require("./controllers/api.controllers");

const app = express();

app.use((req, res, next) => {
  // log the time of each request
  const currentTime = new Date().toLocaleString();
  // console.log("Request made at:", currentTime);
  next();
});

app.use(express.json());

app.get("/api", getStatus);

app.get("/api/snacks", getSnacks);
app.post("/api/snacks", postSnack);

app.get("/api/snacks/:snack_id", getSnackById);

// error-handling middleware chain

app.use((err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send({ msg: "bad request!" });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "server error! We're very sorry!" });
});

module.exports = app;
