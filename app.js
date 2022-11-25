const express = require("express")
const app = express()
const logger = require("morgan")

const {conect} = require("./db/db")

const indexRouter = require("./routes/index");
const productoRouter = require("./routes/producto")

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/drogueria", productoRouter);

conect();

module.exports = app;


