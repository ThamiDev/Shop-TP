const { User } = require("../models");

const userController = {

    signUp: async (req, res) => {
        try {
            const { firstname, lastname, email, password } = req.body;

            const bodyErrors = [];
            if (!firstname) {
                bodyErrors.push("firstname can't be empty");
            }
            if (!lastname) {
                bodyErrors.push("lastname can't be empty");
            }
            if (!email) {
                bodyErrors.push("email can't be empty");
            }
            if (!password) {
                bodyErrors.push("password can't be empty");
            }
            if (bodyErrors.length) {
                return res.json(bodyErrors).status(400);
            }

            const newUser = User.build({
                firstname,
                lastname,
                email,
                password,
            });

            await newUser.save();
            res.json("user registered").status(201);

        } catch (error) {
            console.trace(error);
            res.json(error.toString()).status(500);
        }
    }

};

module.exports = userController;