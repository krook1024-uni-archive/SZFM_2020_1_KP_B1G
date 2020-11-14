const mongoose = require("mongoose");

const Car = new mongoose.Schema({
    plateNumber: {
        type: String,
        required: true,
    },
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    productionYear: {
        type: Date,
        required: true,
    },
    seatNumber: {
        type: Integer,
        required: true,
    },
    mileage: {
        type: Integer,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    fuelType: {
        type: String,
        required: true,
    },
    gearboxType: {
        type: String,
        required: true,
    },
    imgURL: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        required: false,
    },
    deletedAt: {
        type: Date,
        required: false,
    },
});

module.exports = mongoose.model("CarModel", Car);
