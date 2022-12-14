import connect from "../../database/mongodb"
import Event from "../../model/event"

connect()

export default async function handler(req,res){
        try{
                const event = await Event.create(req.body);
                res.redirect('/main')
                if(!event){
                    return res.json({code:'Event not created'})
                }
            } catch (error) {
                res.status(400).json({status:'Not able to create a new event.'})
            }  
}
