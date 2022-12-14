import connect from "../../database/mongodb"
import Event from "../../model/event"

connect()

export default async function handler(req,res){
        try{
                const events = await Event.find()

                if(!events)return res.status(404).json({error:"Data not found"})
                res.status(200).json({events})
            } catch (error) {
                res.status(404).json({error:"Error while fetching data"})
            }  
}