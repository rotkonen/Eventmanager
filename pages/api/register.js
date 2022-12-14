import connect from "../../database/mongodb"
import User from "../../model/user"
import jwt from "jsonwebtoken"


connect()

export default async function handler(req,res){
    try{
        const {firstname, lastname, number, date, email, password} = req.body;
        if (!(firstname && lastname && number && date && email && password)) {
            res.status(400).send("All inputs are required");
          }
        if (password.length <= 8) {
            return res.status(409).send("Password to short");
        }
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
          }
        const user = await User.create({
            firstname,
            lastname,
            number,
            date,
            email,
            password
        });
        const token = jwt.sign({ user_id: user._id, email },process.env.JWT_SECRET,{expiresIn: "2h",});
        user.token = token;
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
}