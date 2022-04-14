const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

async function dbConnection() {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    console.log("db is connected");
    return client;
  } catch (err) {
    console.log("Could not connect to database", err);
  }
}

module.exports = dbConnection;
