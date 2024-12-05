const express = require('express');
const quizController = require('../controllers/quizController');

const router = express.Router();

// Route to get all quizzes
router.get('/quizzes', quizController.getAllQuizzes);

// Route to get a specific quiz by ID
router.get('/quizzes/:id', quizController.getQuizById);

// Route to submit answers and calculate score
router.post('/submit-quiz/:id', quizController.submitQuiz);

// Route to add a new quiz (for testing purposes)
router.post('/add-quiz', quizController.addQuiz);

module.exports = router;
