const Quiz = require('../models/Quiz');
const { validationResult } = require('express-validator');

// Get all quizzes
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch quizzes', error });
  }
};

// Get a specific quiz by ID
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch quiz', error });
  }
};

// Submit answers and calculate score
exports.submitQuiz = async (req, res) => {
  const { answers } = req.body; 

  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    if (!answers || answers.length !== quiz.questions.length) {
      return res.status(400).json({ message: 'Invalid number of answers submitted' });
    }

    let score = 0;
    const feedback = quiz.questions.map((question, index) => {
      const isCorrect = answers[index] === question.correctAnswer;
      if (isCorrect) score++;
      return {
        question: question.questionText,
        correctAnswer: question.correctAnswer,
        userAnswer: answers[index],
        isCorrect,
      };
    });

    res.status(200).json({ score, totalQuestions: quiz.questions.length, feedback });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit quiz', error });
  }
};

// Create a new quiz (for testing purposes)
exports.addQuiz = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, questions } = req.body;

  try {
    const quiz = new Quiz({ title, description, questions });
    await quiz.save();
    res.status(201).json({ message: 'Quiz created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create quiz', error });
  }
};
