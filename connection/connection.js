const { MongoClient } = require("mongodb");
require("dotenv").config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB_NAME = process.env.DB_NAME;

const MONGO_DB_URL = process.env.MONGO_DB_URL;

let db = null;

const connection = () =>
  db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
        db = conn.db(DB_NAME);
        return db;
      });
module.exports = connection;
