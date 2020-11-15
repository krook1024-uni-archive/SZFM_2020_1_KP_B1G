// fills the MongoDB database with random data using Faker.js
// USAGE: node filldb.js

const mongoose = require("mongoose");
const faker = require("faker");

require("dotenv").config();

const mongo_config = {
    auth: { authSource: "admin" },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

mongoose.connect(process.env.MONGO_URI, mongo_config);
var db = mongoose.connection;

db.once("open", () => {
    const UserModel = require("./models/User");
    const CarModel = require("./models/Car");
    const RentModel = require("./models/Rent")

    var users = [];
    for (var i = 0; i < 50; i++) {
        users = [
            ...users,
            {
                name: faker.name.findName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                dateOfBirth: faker.date.past(),
                licenseCategory: "B",
                createdAt: faker.date.past(),
            },
        ];
    }

    UserModel.insertMany(users, (error, docs) => console.log(error, docs));

    var cars = [];
    var seatNumbers = [2, 3, 5, 7];
    var gearboxTypes = ["manualis", "automata"];
    for (var i = 0; i < 50; i++) {
        cars = [
            ...cars,
            {
                plateNumber: faker.vehicle.vin().substr(0, 6),
                make: faker.vehicle.manufacturer(),
                model: faker.vehicle.model(),
                productionYear: faker.date.past().getYear(),
                seatNumber: seatNumbers[~~(Math.random() * seatNumbers.length)],
                mileage: faker.random.number(),
                color: faker.vehicle.color(),
                fuelType: faker.vehicle.fuel(),
                gearboxType:
                    gearboxTypes[~~(Math.random() * gearboxTypes.length)],
                imgURL: faker.image.imageUrl(),
            },
        ];
    }

    CarModel.insertMany(cars, (error, docs) => {
        console.log(error, docs);
    });

    var rents = []
    for(var i=0; i< 3; i++){
        rents = [
            ...rents,
            {
                carId: "5fb0069d4940301fe24bf3e6",
                userId: "5fb0069d4940301fe24bf3b7",
                startTime: faker.date.past(),
                finishTime: faker.date.future()
            }
        ];
    }
    RentModel.insertMany(rents, (error, docs) => {
        console.log(error, docs);
        mongoose.disconnect();
    });
});
