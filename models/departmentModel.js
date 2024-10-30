const mongoose = require('mongoose');

const departmentSchema =  mongoose.Schema({

    department_name:String,

    type: mongoose.Schema.Types.ObjectId, 
        
    
});


module.exports = mongoose.model("Department",departmentSchema)

