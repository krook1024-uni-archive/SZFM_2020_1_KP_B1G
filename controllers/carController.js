const Car = require("../models/Car");
const model = require("../models/Car");

const carController = () => {
  const insertOne = async (car) => {
    console.log("New Car Added", car);
    const newCar = new Car(car);
    await newCar.save();

    return newCar;
  };

  const findOne = async (id) => {
    const car = await model.findById(id).exec();

    return car;
  };

  const findAll = async () => {
    // todo: mongodbbol kikeresni
    const cars = await model.find().exec();

    return cars;
  };

  const updateOne = async (id, car) => {
    const value = new Car(car);
    const item = await model.findOne({ _id: id });
    if (!item) console.log("car not found");
    const updatedCar = await model.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          plateNumber: value.plateNumber,
          make: value.make,
          model: value.model,
          productionYear: value.productionYear,
          seatNumber: value.seatNumber,
          mileage: value.mileage,
          color: value.color,
          fuelType: value.fuelType,
          gearboxType: value.gearboxType,
          imgURL: value.imgURL,
        },
      }
    );

    return updatedCar;
  };


  const deleteOne = async (id) => {
    const deletedCar = await model.deleteOne({ _id: id });
    return deletedCar;
  };

  return {
    insertOne,
    findOne,
    findAll,
    updateOne,
    deleteOne
  };
};

module.exports = carController;
