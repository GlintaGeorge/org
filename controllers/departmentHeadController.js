const Request = require('../models/requestModel')
const Designation = require('../models/designationModel');
const Department = require('../models/departmentModel');
const User = require('../models/userModel')




exports.submitRequest = async (req, res) => {
try{
    const newRequest = new Request ({
        userId:req.userId,
        task:req.body.task,
        status:'pending'

    });
    await newRequest.save();
    res.status(201).json({message: 'pending for approval'})
}

catch(error){
    res.status(500).json({message: 'error submitting the request', error})


}
   
};

exports.approveRequest = async (req, res) =>{
    try{
        const request = await Request.findById(req.params.request_id)

        if(!request || Request.status != 'pending'){
            return res.status(404).json({message: 'request is not processed'});
        }
        req.status = 'approved';

        await request.save();

        res.status(200).json({ message: 'Request approved successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error approving request.', error });
  }
    };


const getApproval = async (req, res) => {
    try {
      
        const getAppovalRequest = await User.aggregate([
            {
             
              $match: {

                "department_head": true
              }
            },
            {
              
              $lookup: {

                from: "departments",

                  localField: "department_id",
                foreignField: "_id",
                as: "department_info"
              }
            },
            {
              
              $unwind: {

                path: "$department_info",
                
              }
            },
            
            {
              
              $project: {

                _id: 1,
                name: 1,
                email: 1,
                streetaddress: 1,

                employee_id: 1,
                employee_grade: 1,
                department_head: 1,

                department_name: "$department_info.name",
                
              }
            },
            {
             
              $sort: {

                
                "department_name": 1
              }
        }])
  
      
  
      
      res.json({
        approveRequest,
        getAppovalRequest,
        getRequest,
        getAllRequests


      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching details', error });
    }
  };
  
  module.exports = {
    getApproval,
    
  };

  exports.getApprovedRequests = async (req,res) => {
    try {
        const approveRequest = await Request.findById({staus:'approved'})
        res.status(200).json({message: 'approved'});
    }

    catch(error){
        res.status(500).json({message:'error', error})
    }
};






