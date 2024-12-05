import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getQuizzes } from '../api';


const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await getQuizzes();
        setQuizzes(data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2 className="my-4">Available Quizzes</h2>
      <div className="row">
        {quizzes.map((quiz) => (
          <div key={quiz._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{quiz.title}</h5>
                <p className="card-text">{quiz.description}</p>
                <Link to={`/quiz/${quiz._id}`} className="btn btn-primary">
                  Start Quiz
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
