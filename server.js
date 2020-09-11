const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db")
const router = require("./network/routes");

db("mongodb://db_user_platzivideos:amstrongmonachello@cluster0-shard-00-00.7phln.mongodb.net:27017,cluster0-shard-00-01.7phln.mongodb.net:27017,cluster0-shard-00-02.7phln.mongodb.net:27017/socialtest_db?ssl=true&replicaSet=atlas-ghbgtf-shard-0&authSource=admin&retryWrites=true&w=majority")
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);
app.use("/app", express.static("public "));
app.listen(3000);
console.log("La app está escuchando en http://Localhost:3000/");
