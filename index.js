import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const url = process.env.URL

app.use(cors());

app.use((req, res, next) => {
  axios.get(`${url}${req.userUrl}`)
  .then(response => res.json(response.data))
  .catch(e => console.error("err", e.message))
})
