const UserModel = require("../models/User");

module.exports = () => {
    const register = async (user) => {
        let newUser = new UserModel(user);

        // VALIDATE OBJECT AGAINST SCHEMA
        let error = newUser.validateSync();
        if (error) {
            return error;
        }

        // OTHER VALIDATIONS
        newUser.isAdmin = false;

        // SAVE OBJECT
        try {
            newUser = await newUser.save();
        } catch (err) {
            if (err.errors) {
                return err.errors;
            }
            return "ismeretlen hiba tortent!";
        }

        // RESPOND WITH THE NEW OBJECT (INCLUDING THE ID)
        return newUser;
    };

    return {
        register,
    };
};
