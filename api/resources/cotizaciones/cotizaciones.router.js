const express = require("express");
// controlador de cotizaciones
const cotizacionesController = require("./cotizaciones.controller");

const cotizacionesRouter = express.Router();
// Routes para devolver valores
cotizacionesRouter
  .route("/cotizaciones/:nombre")
  .get(cotizacionesController.fecthCotizacionNombre);

cotizacionesRouter
  .route("/cotizaciones")
  .get(cotizacionesController.fecthCotizaciones);


module.exports = cotizacionesRouter;
