const User = require("../models/User");
const model = require("../models/User");

const userController = () => {
  const insertOne = async (user) => {
    try {
      const newUser = new User(user);
      await newUser.save();
      return newUser;
    } catch (error) {
      console.log("User validation failed");
    }
  };

  const findOne = async (id) => {
    try {
      const user = await model.findById(id).exec();
      return user;
    } catch (error) {
      console.log(`User with id: ${id} not found`);
    }
  };

  const findAll = async () => {
    try {
      const users = await model.find().exec();
      return users;
    } catch (error) {
      console.log("No users found");
    }
  };

  const updateOne = async (id, user) => {
    try {
      const value = new User(user);
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
    } catch (error) {
      console.log(`Update error: User with id: ${id} not found`);
    }
  };

  const deleteOne = async (id) => {
    try {
      const deletedUser = await model.deleteOne({ _id: id });
      return deletedUser;
    } catch (error) {
      console.log(`Delete error: User with id: ${id} not found`);
    }
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
