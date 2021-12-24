const connection = require("../connection/connection");
const { ObjectId } = require("mongodb");

const getLoginUserModelByEmail = async (email) => {
  const db = await connection();
  const data = await db.collection("users").findOne({ email });
  return data;
};

const registerNewUserModel = async (name, email, password) => {
  const db = await connection();
  const data = await db
    .collection("users")
    .insertOne({ name, email, password });
  return data;
};

const getLoginUserModelById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const data = await db.collection("users").findOne(ObjectId(id));
  return data;
};

module.exports = {
  getLoginUserModelByEmail,
  registerNewUserModel,
  getLoginUserModelById,
};
