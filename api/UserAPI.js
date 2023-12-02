import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getUserDetails = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUserDetails = async (userId, userDetails) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, userDetails);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (userDetails) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, userDetails);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};