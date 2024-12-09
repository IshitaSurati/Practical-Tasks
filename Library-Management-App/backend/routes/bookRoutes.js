const express = require('express');
const { addBook, getBooks, getBookById, updateBook, deleteBook, borrowBook, returnBook } = require('../controllers/bookController');
const upload = require('../config/multer');
const router = express.Router();

router.post('/', upload.single('image'), addBook);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.post('/:id/borrow', borrowBook);
router.post('/:id/return', returnBook);

module.exports = router;
