const config = {
  dbUrl:
    process.env.DB_URL ||
    "mongodb://db_user_platzivideos:amstrongmonachello@cluster0-shard-00-00.7phln.mongodb.net:27017,cluster0-shard-00-01.7phln.mongodb.net:27017,cluster0-shard-00-02.7phln.mongodb.net:27017/socialtest_db?ssl=true&replicaSet=atlas-ghbgtf-shard-0&authSource=admin&retryWrites=true&w=majority",
  port: process.env.PORT || "3000",
  host: process.env.HOST || "http://localhost",
  publicRoute: process.env.PUBLIC_ROUTE || "/app",
};

module.exports = config;
