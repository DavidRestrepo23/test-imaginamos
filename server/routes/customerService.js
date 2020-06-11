const express = require('express');
const router = express.Router();
const customerServiceController = require('../controllers/customerServiceController');

/**
 * List service
 * @model services
 * @route /api/services
 */

router.get('/', customerServiceController.list);

/**
 * Create service
 * @model services
 * @route /api/services
 */

router.post('/', customerServiceController.create);


/**
 * Find by id
 * @model services
 * @route /api/services
 */

router.get('/:service_id', customerServiceController.findById);


module.exports = router;