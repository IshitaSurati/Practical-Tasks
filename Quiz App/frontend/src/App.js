import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';  
import QuizList from './components/QuizList';
import QuizPage from './components/QuizPage';
import ScorePage from './components/ScorePage';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Navbar />  {/* Ensure Navbar is placed at the top of the app */}
      <div className="container">
        <h1 className="my-4 text-center text-primary">Quiz Application</h1>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<QuizList />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/score" element={<ScorePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
