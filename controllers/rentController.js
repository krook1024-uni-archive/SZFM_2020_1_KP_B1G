const model = require("../models/Rent");

const rentController = () => {
  const insertOne = (rent) => {
    // TODO
  };

  const findOne = (id) => {
    // TODO
  };

  const findAll = async () => {
    try {
      const rents = await model.find().exec();
      return rents;
    } catch (error) {
      console.log("No rents found.");
    }
  };

  const updateOne = (rent, id) => {
    // TODO
  };

  const deleteOne = (id) => {
    // TODO
  };

  return {
    insertOne,
    findOne,
    findAll,
    updateOne,
    deleteOne,
  };
};

module.exports = rentController;
