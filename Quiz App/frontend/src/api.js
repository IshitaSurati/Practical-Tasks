import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getQuizzes = async () => {
  try {
    const response = await axios.get(`${API_URL}/quizzes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    throw error;
  }
};

export const getQuizById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/quizzes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz:', error);
    throw error;
  }
};

export const submitQuiz = async (id, answers) => {
  try {
    const response = await axios.post(`${API_URL}/submit-quiz/${id}`, { answers });
    return response.data;
  } catch (error) {
    console.error('Error submitting quiz:', error);
    throw error;
  }
};
