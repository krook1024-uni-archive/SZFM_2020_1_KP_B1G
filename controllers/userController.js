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

  const updateOne = async (id, user) => {
    const value = new User(user);
    const item = await model.findOne({ _id: id });
    if (!item) console.log("user not found");
    const updatedUser = await model.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          name: value.name,
          email: value.email,
          password: value.password,
          dateOfBirth: value.dateOfBirth,
          licenseCategory: value.licenseCategory,
        },
      }
    );

    return updatedUser;
  };

  const deleteOne = async (id) => {
    const deletedUser = await model.deleteOne({ _id: id });
    return deletedUser;
  };

  return {
    insertOne,
    findOne,
    findAll,
    updateOne,
    deleteOne,
  };
};

module.exports = userController;
