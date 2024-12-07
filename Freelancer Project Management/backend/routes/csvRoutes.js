const express = require('express');
const multer = require('multer');
const { exportProjects, importProjects } = require('../controllers/csvController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/export', authMiddleware, exportProjects);
router.post('/import', authMiddleware, upload.single('file'), importProjects);

module.exports = router;
