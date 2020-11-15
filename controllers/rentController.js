const Rent = require("../models/Rent");
const model = require("../models/Rent");

const rentController = () => {
  const insertOne = async (rent) => {
    try {
      console.log("New rent added", rent);
      const newRent = new Rent(rent);
      await newRent.save();

      return newRent;
    } catch (error) {
      console.log("Rent validation failed.");
    }
  };

  const findOne = async (id) => {
    try {
      const rent = await model.findById(id).exec();
      return rent;
    } catch (error) {
      console.log(`Rent with id: ${id} not found`);
    }
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
