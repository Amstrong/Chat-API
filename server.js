const express = require("express");
//Es una extensión un modulo de express que nos ayuda a trbajar con
//la petición de una forma sencilla.
const bodyParser = require("body-parser");
const router = express.Router();
const response = require("./network/response");
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
  console.log(req.headers);
  //con esto le daremos cabeceras al cliente personalizadas.
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  // res.send("Lista de mensajes");
  response.success(req,res, "Lista de mensajes")
});

router.post("/message", function (req, res) {
  console.log(req.query);
  if(req.query.error == "ok"){
    response.error(req,res, "Error simulado",400)

  } else{
    response.success(req,res, "Creado correctamente",201)

  }
  // res.send("Mensaje:" + req.query.text + "añadido");
  // res.status(201).send({ error: "", body: "Creado correctamente" });

});
app.use("/app", express.static("public"))
app.listen(3000);
console.log("La app está escuchando en http://Localhost:3000/");
