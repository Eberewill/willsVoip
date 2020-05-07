const mongoose = require('mongoose');

//let create User Schema
const TransactionSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    amount: {
        type: Number,
        isrequired: true,
       
    },
    date : {
        type: Date,
        default: Date.now
    },
    isSucessful:{
        type : Boolean
    }

});
//cexport the user schema to model
module.exports = mongoose.model('transaction', TransactionSchema);