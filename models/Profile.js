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
            type:{
                type: String,
            },

            to: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            
            date: {
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