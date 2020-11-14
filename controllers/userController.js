const mongoose = require("mongoose")
const model = require("../models/User")

const userController = () => {
    const findOne = async (id) => {
        const user = await model.findById(id).exec()

        return user
    };

    const findAll = async () => {
        const users = await model.find().exec()

        return users 
    };

    return {
        findOne,
        findAll,
    };
    
};

module.exports = userController