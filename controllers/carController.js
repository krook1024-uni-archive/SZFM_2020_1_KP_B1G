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

  const findAll = async (sorting = null) => {
    try {
      const cars = await model
        .find({ deletedAt: null }, null, { ...sorting })
        .exec();
      return cars;
    } catch (error) {
      console.log("No cars found.");
    }
  };

  const updateOne = async (id, car) => {
    try {
      const value = new Car(car);
      const updateTime = new Date();
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
            updatedAt: updateTime,
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
      const deleteTime = new Date();
      const deletedCar = await model.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            deletedAt: deleteTime,
          },
        }
      );
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
