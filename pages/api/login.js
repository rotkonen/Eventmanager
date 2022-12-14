import connect from "../../database/mongodb"
import User from "../../model/user"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

connect()

export default async function handler(req,res){
    try {
        const { email, password } = req.body;
    
        if (!(email && password)) {
          res.status(400).send("All input is required");
        }
        const user = await User.findOne({ email });
    
        if (user && (await bcrypt.compare(password, user.password))) {
          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.JWT_SECRET,
            {
              expiresIn: "2h",
            }
          );
    
          user.token = token;
          res.redirect('/main')
        }
        res.status(400).send("Invalid Credentials");
      } catch (err) {
        console.log(err);
      }
    
}