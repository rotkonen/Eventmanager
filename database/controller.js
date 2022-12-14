import Events from "../model/event"

export async function getEvents(req,res){
    try{
        const events = await Events.find({})
        if(!events)return res.status(404).json({error:"Data not Found"})
        res.status(200).json(events)
    }catch{
        res.status(404).json({error:"Error while Fetching Data"})
    }
}