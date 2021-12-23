const express = require("express");
const app = express();
const Routes = require("./routes/routes");
require("dotenv").config();

app.use(express.json());
app.use(Routes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
