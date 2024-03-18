"use strict";
const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// import routes
const usersRouter = require("./src/routes/Users");
const housesRouter = require("./src/routes/Houses");

// import database config
require("./src/config/database");

app.use(cors());
app.use(bodyParser.json());

app.use("/users", usersRouter);
app.use("/houses", housesRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
