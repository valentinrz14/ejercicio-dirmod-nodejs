const express = require("express");
const cotizacionesRouter = require("./resources/cotizaciones/cotizaciones.router");

const resRouter = express.Router();

resRouter.use("/", cotizacionesRouter);

module.exports = resRouter;
