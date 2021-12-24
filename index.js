const express = require("express");
const app = express();
const Routes = require("./routes/routes");
require("dotenv").config();
const errorLogin = require("./middlewares/error");

app.use(express.json());
app.use(Routes);
app.use(errorLogin);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
