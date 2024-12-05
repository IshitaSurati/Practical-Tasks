const Quiz = require('../models/Quiz');

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
  const { answers } = req.body; // Assume answers is an array of the selected choices for each question

  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });

    res.status(200).json({ score, totalQuestions: quiz.questions.length });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit quiz', error });
  }
};

// Create a new quiz (for testing purposes)
exports.addQuiz = async (req, res) => {
  const { title, description, questions } = req.body;

  try {
    const quiz = new Quiz({
      title,
      description,
      questions,
    });
    await quiz.save();
    res.status(201).json({ message: 'Quiz created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create quiz', error });
  }
};
