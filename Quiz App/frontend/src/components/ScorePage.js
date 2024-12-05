import React from 'react';
import { useLocation } from 'react-router-dom';

const ScorePage = () => {
  const location = useLocation();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  return (
    <div className="my-5">
      <h2>Your Score</h2>
      <div className="alert alert-info">
        You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong>.
      </div>
      <button className="btn btn-primary" onClick={() => window.location.href = '/'}>
        Back to Quiz List
      </button>
    </div>
  );
};

export default ScorePage;
