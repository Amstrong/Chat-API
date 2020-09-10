const db = require("mongoose");
const Model = require("./model");

db.Promise = global.Promise;
const uri =
  "mongodb://db_user_platzivideos:amstrongmonachello@cluster0-shard-00-00.7phln.mongodb.net:27017,cluster0-shard-00-01.7phln.mongodb.net:27017,cluster0-shard-00-02.7phln.mongodb.net:27017/socialtest_db?ssl=true&replicaSet=atlas-ghbgtf-shard-0&authSource=admin&retryWrites=true&w=majority";
db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("[DB] conectada con exito"))
  .catch((err) => console.error("[DB]", err));


  function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}
function getMessages() {
  return list;
}

module.exports = {
  add: addMessage,
  list: getMessages,
};
