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
                default: 0,
            },
    transactions:
    [
        {
            
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
    contacts:
    [
        {
            
            name: {
                type: String,
                required: true
            },
            phone:{
                type: String,
            },

            created: {
                type: Date,
                
                
            }
        },
    
    ],
    
    date : {
        type: Date,
        default: Date.now
    }
    

    })

module.exports = new mongoose.model('Profile', profileSchema);