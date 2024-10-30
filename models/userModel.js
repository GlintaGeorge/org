const mongoose = require('mongoose');
require('dotenv').config();

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    department_head:String,
    

    department: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Department',
        required: true 
      }],

      roles: [
        {
            isadmin:String,
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ],

      

    isVerified: {
        type: Boolean,
        default: false,
      },

})

module.exports=mongoose.model("User", userSchema);

