const connection = require("../connection/connection");
const { ObjectId } = require("mongodb");

const getLoginUserModelByEmail = async (email) => {
  try {
    const db = await connection();
    const data = await db.collection("users").findOne({ email });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const registerNewUserModel = async (name, email, password) => {
  try {
    const db = await connection();
    const data = await db
      .collection("users")
      .insertOne({ name, email, password });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getLoginUserModelById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  try {
    const db = await connection();
    const data = await db.collection("users").findOne(ObjectId(id));
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  getLoginUserModelByEmail,
  registerNewUserModel,
  getLoginUserModelById,
};
