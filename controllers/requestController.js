const Request = require('../models/requestModel');
const Department = require('../models/departmentModel');
const userModel = require('../models/userModel');
const requestModel = require('../models/requestModel');
const router = express.Router();




exports.isDepartmentHead = async (req, res, next) =>{
   

const user = await userModel.findById(req.user._id);

    if(user.role !== 'department_head'){
        return res.status(403).json({
            error:'could not view the request'
        });
    }

    next();

};

router.get('./id' .isDepartmentHead, async(req,res)=>{
    const request = await requestModel.findById(req.params.id)
if(!request){
    return res.status(403).json({
        error:'request not found'
    })
}
res.json(request);

})

module.exports = router; 



     

  
  