import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    eventname:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    age:{
        type:Number
    },
    payment:{
        type:Number
    }
})

module.exports = mongoose.models.Event || mongoose.model('Event',eventSchema)