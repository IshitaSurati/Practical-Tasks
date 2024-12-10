const express = require('express');
const { body } = require('express-validator');
const quizController = require('../controllers/quizController');

const router = express.Router();

router.get('/quizzes', quizController.getAllQuizzes);
router.get('/quizzes/:id', quizController.getQuizById);
router.post('/submit-quiz/:id', quizController.submitQuiz);
router.post(
  '/add-quiz',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('questions').isArray({ min: 1 }).withMessage('Questions must be an array with at least one question'),
  ],
  quizController.addQuiz
);

module.exports = router;
