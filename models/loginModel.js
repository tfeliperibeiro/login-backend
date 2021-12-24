const connection = require("../connection/connection");

const getLoginUserModel = async (email) => {
  const db = await connection();
  const data = await db.collection("users").findOne({ email });
  return data;
};

const registerNewUserModel = async (name, email, password) => {
  const db = await connection();

  try {
    const data = await db
      .collection("users")
      .insertOne({ name, email, password });
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getLoginUserModel,
  registerNewUserModel,
};
