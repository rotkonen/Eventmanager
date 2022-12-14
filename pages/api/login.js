import connect from "../../database/mongodb"
import User from "../../model/user"
import bcrypt from 'bcrypt'

connect()

export default async function handler(req,res){
    
    const {email,password}=req.body
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.redirect('/main')
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
    
}