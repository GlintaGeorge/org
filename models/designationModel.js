const mongoose = require('mongoose');

const designationSchema =  mongoose.Schema({
    designation_name:String,

    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Department',


})


module.exports=mongoose.model("Designation", designationSchema)