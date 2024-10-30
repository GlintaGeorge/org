const express = require('express')
const {isDepartmentHead} = require('../controllers/requestController')


const router = express.Router();

router.get('/', isDepartmentHead);

module.exports = router;