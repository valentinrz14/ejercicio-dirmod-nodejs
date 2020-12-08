const express = require("express");
const resRouter = require("./api/index");

const PORT = process.env.PORT || 3050;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Allow", "GET,POST,OPTIONS,PUT,DELETE,OPTIONS");
  next();
});
// Routes
app.use("/api", resRouter);

app.listen(PORT, console.log("Servidor Coriendo"));

module.exports = app;
