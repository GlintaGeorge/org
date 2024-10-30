const Department = require('../models/departmentModel')

exports.fetchdepartment = async (req,res) =>{
    try {
        const department = await Department.find();
        res.status(200).json(department);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching department'});
      }
    };

    





    