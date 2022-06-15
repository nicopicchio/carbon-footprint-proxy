import express from 'express';
import axios from 'axios';
import cors from 'cors';
const app = express();

app.use(cors());

app.use((req, res, next) => {
  axios.get(`https://api.websitecarbon.com/site?url=http%3A%2F%2F${req.userUrl}`)
  .then(response => res.json(response.data))
  .catch(e => console.error("err", e.message))
})
