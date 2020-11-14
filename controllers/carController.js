const Car = require("../models/Car");
const model = require("../models/Car");

const carController = () => {
    const insertOne = async (car) =>{
        console.log("New Car Added", car)
        const newCar = new Car(car)
        await newCar.save()

        return newCar
    }

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
        insertOne,
        findOne,
        findAll,
    };
};

module.exports = carController;
