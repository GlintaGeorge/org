const mongoose = require('mongoose');

const requestSchema =   mongoose.Schema({
    request_id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    task:"string",

    status:String,

    createdDate:{
        type:Date
        // default:Date.now
    }

})

module.exports = mongoose.module("Request", requestSchema)