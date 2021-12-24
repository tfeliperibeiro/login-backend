const express = require("express");
const app = express();
const Routes = require("./routes/routes");
const cors = require("cors");
require("dotenv").config();
const errorLogin = require("./middlewares/error");

app.use(express.json());
app.use(Routes);
app.use(errorLogin);
app.use(
  cors({
    origin: "http://localhost:3000/",
  })
);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
