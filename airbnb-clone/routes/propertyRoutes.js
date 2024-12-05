const express = require('express');
const { addProperty, getProperties, updateProperty, deleteProperty } = require('../controllers/propertyController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addProperty);
router.get('/', getProperties);
router.put('/:propertyId', protect, updateProperty);
router.delete('/:propertyId', protect, deleteProperty);

module.exports = router;
