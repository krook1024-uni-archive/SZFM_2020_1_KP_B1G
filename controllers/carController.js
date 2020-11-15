const Car = require("../models/Car");
const model = require("../models/Car");

const carController = () => {
  const insertOne = async (car) => {
    try {
      console.log("New Car Added", car);
      const newCar = new Car(car);
      await newCar.save();

      return newCar;
    } catch (error) {
      console.log("Car validation failed.");
    }
  };

  const findOne = async (id) => {
    try {
      const car = await model.findById(id).exec();

      return car;
    } catch (error) {
      console.log(`Car with id: ${id} not found`);
    }
  };

  const findAll = async () => {
    try {
      const cars = await model.find().exec();
      return cars;
    } catch (error) {
      console.log("No cars found.");
    }
  };

  const updateOne = async (id, car) => {
    try {
      const value = new Car(car);
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
    } catch (error) {
      console.log(`Update error: Car with id: ${id} not found`);
    }
  };

  const deleteOne = async (id) => {
    try {
      const deletedCar = await model.deleteOne({ _id: id });
      return deletedCar;
    } catch (error) {
      console.log(`Delete error: Car with id: ${id} not found`);
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

module.exports = carController;
