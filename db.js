const db = require("mongoose");

async function connect(url) {
  db.Promise = global.Promise;
  await db
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("[DB] conectada con exito"))
    .catch((err) => console.error("[DB]", err));
}

module.exports = connect;
