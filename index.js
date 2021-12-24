const express = require("express");
const app = express();
const Routes = require("./routes/routes");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const errorLogin = require("./middlewares/error");

app.use(express.json());
app.use(Routes);
app.use(errorLogin);
app.use(bodyParser.urlencoded({ extended: true }));

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
