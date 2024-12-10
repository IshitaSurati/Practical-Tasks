const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      choices: [{ type: String, required: true }],
      correctAnswer: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Quiz', quizSchema);
