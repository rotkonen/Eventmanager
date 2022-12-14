import connect from "../../../database/mongodb"
import { getEvents } from "../../../database/controller"

export default async function handler(req, res){
    connect().catch(() => res.status(405).json({error:"Error in the Connection"}))
    const { method } = req
    
    switch(method){
        case 'GET':
            getEvents(req,res)
            break
        case 'POST':
            res.status(200).json({method,name:'POST Request'})
            break
        default:
            res.setHeader('Allow',['GET','POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break
    }
}