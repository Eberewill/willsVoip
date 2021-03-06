const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    firstname : {
        type: String
    },
    lastname: {
        type: String
    },
    phonenumber : {
        type: String
    },
    location : {
        type: String
    },
    ballance:{
                type: Number,
                default: 10,
            },
    transactions:
    [
        {
            id: {
                type: Number,
                
            },
            
            amount: {
                type: Number,
                required: true
            },
            status:{
                type: String,
            },
            message:{
                type: String
            },

            paid_at: {
                type: Date,
                
                
            }
        },
    
    ],
    transfers:
    [
        {            
            amount: {
                type: Number,
                required: true
            },
            status:{
                type: String,
                default: "Success"
            },
            type:{
                type: String
            },
            t_user:{
                type: String
            },

            date: {
                type: Date,
                default: Date.now
                
                
            }
        },
    
    ],
    contacts:
    [
        {
            
            name: {
                type: String,
                required: true
            },
            phone:{
                type: String,
                require: true
            },

            created: {
                type: Date,
                default: Date.now
                
                
            }
        },
    
    ],
    
    date : {
        type: Date,
        default: Date.now
    }
    

    })

module.exports = new mongoose.model('Profile', profileSchema);