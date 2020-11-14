const mongoose = require("mongoose");
const model = require("../models/Car");

const carController = () => {
    const findOne = async (id) => {
        const car = await model.findById(id).exec();

        return car;
    };

    const findAll = async () => {
        // todo: mongodbbol kikeresni
        const cars = await model.find().exec();

        return cars;
    };

    // todo: tobb fugveny

    return {
        findOne,
        findAll,
    };
};

module.exports = carController;
