const express = require('express');
const router = express.Router();
const controller = require('../controllers/jobsController');


router.get('/', controller.getJobs);
router.post('/', controller.createJob);
router.put('/:id', controller.updateJob);
router.delete('/:id', controller.deleteJob);


module.exports = router;