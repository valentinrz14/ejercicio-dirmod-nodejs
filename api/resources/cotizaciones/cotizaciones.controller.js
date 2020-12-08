const axios = require("axios");
// Constants
const {
  API_KEY,
  API_URL,
  ARRAY_MONEDAS,
  ARRAY_NOMBES,
} = require("../constants");

// funcion para traer los valores de las monedas y almacenarlos en un array
const cotizaciones = ARRAY_MONEDAS.map(async (value) => {
  const response = await axios.get(
    `${API_URL}/${value}/ARS/json?quantity=1&key=${API_KEY}`
  );
  const { result } = await response.data;
  return { result };
});
// funcion para retornar los valores con diferentes nombres
const fecthNewCotizaciones = async () => {
  // Resuelvo todas las promesas
  const getCotizaciones = await Promise.all(cotizaciones);

  const newCotizaciones =
    getCotizaciones.length === ARRAY_MONEDAS.length &&
    getCotizaciones.map(({ result }, index) => {
      const { source, value, updated } = result;
      // Modifico el valor de la fecha
      const newDate = new Date(updated)
        .toISOString()
        .replace(/-/g, "/")
        .replace(/T/, " - ")
        .replace(/\..+/, "");

      return {
        id: `${index + 1}`,
        nombre: ARRAY_NOMBES[index],
        moneda: source,
        precio: value,
        fecha: newDate,
      };
    });
  return newCotizaciones;
};

module.exports = cotizacionesController = {
  async fecthCotizaciones(req, res) {
    return res.json(await fecthNewCotizaciones());
  },
  async fecthCotizacionNombre(req, res) {
    const { nombre } = req.params;
    const data = await fecthNewCotizaciones();
    const dataFilter = data.filter(
      (value) => value.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (dataFilter.length === 0) {
      return res.send("Moneda no encontrada");
    } else {
      return res.json(dataFilter);
    }
  },
};
