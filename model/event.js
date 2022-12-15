import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    eventname:{
        type:String
    },
    city:{
        type:String
    },
    address:{
        type:String
    },
    date:{
        type:String
    },
    age:{
        type:Number
    },
    payment:{
        type:Number
    }
})

module.exports = mongoose.models.Event || mongoose.model('Event',eventSchema)