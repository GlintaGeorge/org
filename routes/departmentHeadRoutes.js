const express = require('express')
const {submitRequest, approveRequest,getApprovedRequests } = require('../controllers/departmentHeadController') 

const router = express.Router();

router.post('/', submitRequest);
router.put('/approveRequest', approveRequest);
router.get('/getApprovedRequests', getApprovedRequests)




module.exports = router;