import axios from "axios";

const API_URL = "http://localhost:8080/api/inventory";

export const getInventory = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addInventory = async (item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
};

export const updateInventory = async (id, item) => {
  const response = await axios.put(`${API_URL}/${id}`, item);
  return response.data;
};

export const deleteInventory = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
