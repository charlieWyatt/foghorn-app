import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const fetchTweets = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tweets`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postTweet = async (tweet) => {
  try {
    const response = await axios.post(`${BASE_URL}/tweets`, tweet);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTweet = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/tweets/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTweet = async (id, updatedTweet) => {
  try {
    const response = await axios.put(`${BASE_URL}/tweets/${id}`, updatedTweet);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};