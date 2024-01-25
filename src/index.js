require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(cors());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
