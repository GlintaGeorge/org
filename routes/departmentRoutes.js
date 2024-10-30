const express = require('express')
const {fetchdepartment} = require('../controllers/departmentController')


const router = express.Router();

router.get('/', fetchdepartment);

module.exports = router;