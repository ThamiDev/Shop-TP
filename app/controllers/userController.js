const { User } = require("../models");
const jwt = require('jsonwebtoken');

const maxAge = 20 * 60 * 1000;
const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
}

const userController = {

    getAllUsers: async (req, res) => {
        try  {
            const users = await User.findAll();
            if (!users) {
                res.json("can't find products");
                return res.status(404);
            }
            res.json(users);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

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
    },

    signIn: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                where: {
                    email: email,
                    password: password
                }
            });
            const token = createToken(user.id); 
            res.cookie('jwt', token, { 
                httpOnly: true,
                maxAge: maxAge
            });
            res.status(200).json("connection success");

        } catch (error) {
            console.trace(error);
            res.json(error.toString()).status(500);
        }
    },

    logout: async (req, res) => {
        res.cookie('jwt', '', { maxAge: 1});
        res.status(200).json("logout success");
    }

};

module.exports = userController;