import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getQuizById, submitQuiz } from '../api';

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await getQuizById(id);
        setQuiz(data);
        setAnswers(new Array(data.questions.length).fill('')); // Initialize answers array
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };
    fetchQuiz();
  }, [id]);

  const handleAnswerChange = (event) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const result = await submitQuiz(id, answers);
      navigate('/score', { state: { score: result.score, totalQuestions: result.totalQuestions } });
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  if (!quiz) return <div>Loading quiz...</div>;

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div>
      <h2>{quiz.title}</h2>
      <div className="question my-4">
        <h4>{currentQuestion.questionText}</h4>
        <div>
          {currentQuestion.choices.map((choice, index) => (
            <div key={index}>
              <input
                type="radio"
                name={`answer-${currentQuestionIndex}`}
                value={choice}
                checked={answers[currentQuestionIndex] === choice}
                onChange={handleAnswerChange}
              />
              <label>{choice}</label>
            </div>
          ))}
        </div>
        <div className="mt-3">
          {currentQuestionIndex < quiz.questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="btn btn-primary"
              disabled={!answers[currentQuestionIndex]} // Disable button if no answer is selected
            >
              Next Question
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="btn btn-success"
              disabled={!answers[currentQuestionIndex]} 
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;             