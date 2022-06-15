import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const apiUrl = process.env.API_URL

app.use(cors());

app.use((req, res) => {
  axios.get(`${apiUrl}${req.userUrl}`)
  .then(response => res.json(response.data))
  .catch(e => console.error("err", e.message))
})
