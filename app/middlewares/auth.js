// const jwt = require("jsonwebtoken");

// const auth = {
//     // we generate a token for the user
//     generateAccessToken: (user) => {
//         return jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: "3600s"}) // the token expire in 1hour
//     },

//     authenticateToken: (req, res, next) => {

//         const authHeader = req.headers["authorization"];
//         const token = authHeader.split(' ')[1];

//         // if there's no token we send an Unauthorized connection
//         if(!token) {
//             console.log("il n'y a pas de token")
//             return res.sendStatus(401);
//         } // else we verify that the token match with the users who generates the token
//         jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
//             if(err) {
//                 res.json({
//                     error: "Veuillez vous connecter afin d'effectuer cette opération"
//                 })
//                 return res.sendStatus(401);
//             }
//             req.user = user;
//             next();
//         });
//     },
// }

// module.exports = auth;