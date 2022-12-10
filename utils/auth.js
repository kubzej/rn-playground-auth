import axios from 'axios';

const API_KEY = AIzaSyDY1XiKZfqzLAb9MiwY5uHnR4djfWRj0GM;

async function createUser(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}