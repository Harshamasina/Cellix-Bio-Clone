const jwt = require("jsonwebtoken");
const employees = require('../models/employeeSchema');

const authenticate = async (req, res, next) => {
    try{
        let SECRET = "CELLIXBIOAVACAPHARMACELLIXBIOPHARMA";
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, SECRET);
        const rootUser = await employees.findOne({_id : verifyToken._id, "tokens.token" : token});
        if (!rootUser) { 
            throw new Error("Employee Not Found")
        }
        req.token = token;
        req.rootUser = rootUser;
        req.empID = rootUser._id;
        next();
    } catch (err) {
        res.status(401).send('Unauthorized : No Token Provided');
        console.log(err);
    }
}
module.exports =  authenticate;