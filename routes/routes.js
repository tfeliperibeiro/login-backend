const express = require("express");

const Routes = express.Router();

Routes.get("/login", (_req, res) => {
  res.status(200).json({ message: "Page Login" });
});

module.exports = Routes;
