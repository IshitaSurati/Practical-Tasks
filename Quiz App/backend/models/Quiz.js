const mongoose = require('mongoose');

// Define the Quiz schema
const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      choices: [
        { type: String, required: true }
      ],
      correctAnswer: { type: String, required: true },
    }
  ],
});

// Create and export the Quiz model
module.exports = mongoose.model('Quiz', quizSchema);
