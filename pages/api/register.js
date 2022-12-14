import connect from "../../database/mongodb"
import User from "../../model/user"


connect()

export default async function handler(req,res){

    try{
        const user = await User.create(req.body);
        res.redirect('/')
        if(!user){
            return res.json({code:'All fields must be filled'})
        }
    } catch (error) {
        res.status(400).json({status:'Not able to create a new user.'})
    }
}