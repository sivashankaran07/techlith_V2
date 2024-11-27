import axios from 'axios';
const API_URL = 'http://localhost:5000/contact';  

export const sendContactForm = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error('Error sending contact form');
  }
};


