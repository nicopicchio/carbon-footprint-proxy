require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use((req, res) => {
	const reqUrl = req.originalUrl.replace('/', '');
	const url = `${process.env.API_URL}${reqUrl}`;
	axios
		.get(url)
		.then((response) => {
			res.json(response.data);
		})
		.catch((e) => {
			res.status(500).json({ error: 'Error calling the API' });
			console.error('err', e.message);
		});
});

app.listen(port, () => {
	console.log('Listening on', port);
});
