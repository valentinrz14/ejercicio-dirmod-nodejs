// Url del servicio a llamar
const API_URL = "https://api.cambio.today/v1/quotes";
// Key del servicio
const API_KEY = "6381|GcDjZTvuVRutX872JQ7j5d8dw9fZoshX";
// Array de Monedas a llamar en el servicio
const ARRAY_MONEDAS = [
  "USD",
  "EUR",
  "BRL",
  "CHF",
  "MXN",
  "SEK",
  "GBP",
  "NOK",
  "KRW",
  "CLP",
];
// Array de nombres para las monedas
const ARRAY_NOMBES = [
  "Dolar",
  "Euro",
  "Real",
  "Franco",
  "Peso Mexicano",
  "Corona Sueca",
  "Libra",
  "Yuan",
  "Corona Noruega",
  "Won",
  "Peso Chileno",
];
module.exports = {
  API_KEY,
  API_URL,
  ARRAY_MONEDAS,
  ARRAY_NOMBES,
};
