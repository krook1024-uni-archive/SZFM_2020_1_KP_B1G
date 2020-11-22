const mongoose = require("mongoose");

const Rent = new mongoose.Schema({
    carId: {
        type: mongoose.ObjectId,
        required: true,
    },
    userId: {
        type: mongoose.ObjectId,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    finishTime: {
        type: Date,
        required: true,
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

Rent.virtual("id").get(function () {
    return this._id.toHexString();
});

Rent.set("toJSON", { virtuals: true });

module.exports = mongoose.model("rent", Rent);
