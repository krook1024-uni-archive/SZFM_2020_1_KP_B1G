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
    const item = await model.findOne(
      {_id: id,}
    )
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
          licenseCategory: value.licenseCategory
        },
      }
    );

    return updatedUser;
  };

  return {
    insertOne,
    findOne,
    findAll,
    updateOne,
  };
};

module.exports = userController;
