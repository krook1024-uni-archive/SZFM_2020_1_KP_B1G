const User = require("../models/User");
const model = require("../models/User");

const userController = () => {
  const insertOne = async (user) => {
    console.log("New User Added:", user);
    const newUser = new User(user);
    await newUser.save();

    return newUser;
  };

  const findOne = async (id) => {
    const user = await model.findById(id).exec();

    return user;
  };

  const findAll = async () => {
    const users = await model.find().exec();

    return users;
  };

  return {
    insertOne,
    findOne,
    findAll,
  };
};

module.exports = userController;
