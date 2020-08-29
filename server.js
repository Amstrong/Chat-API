const express = require("express");
//Es una extensión un modulo de express que nos ayuda a trbajar con
//la petición de una forma sencilla.
const bodyParser = require("body-parser");
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// Aquí la aplicación estara siempre escuchando y nos
//devolverá un hola.
// app.use("/", function (req, res) {
//   res.send("Hola");
// });

router.get("/message", function (req, res) {
  console.log(req.headers)
  res.header({
    "custom-header":"Nuestro valor personalizado"
  })
  res.send("Lista de mensajes");
});

router.delete("/message", function (req, res) {
  console.log(req.query);
  res.send("Mensaje:" + req.query.text + "añadido");
});

app.listen(3000);
console.log("La app está escuchando en http://Localhost:3000/");
