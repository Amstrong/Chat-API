const express = require("express");

var app = express();

// Aquí la aplicación estara siempre escuchando y nos 
//devolverá un hola.
app.use("/", function (req, res) {
  res.send("Hola");
});

app.listen(3000);
console.log("La app está escuchando en Http://Localhost:3000/")