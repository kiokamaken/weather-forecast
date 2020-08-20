const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
const port = 3001;

const API_ENDPOINT = 'https://www.metaweather.com/api';

app.use(cors());

app.get('/api/location/search', (req, res) => {
  const query = req.query['query'];
  const lattlong = req.query['lattlong'];

  const url = `${API_ENDPOINT}/location/search/?${
    query ? `query=${query}` : ''
  }${lattlong ? `lattlong=${lattlong}` : ''}`;

  return request(url).pipe(res);
});


app.get('/api/location/:id', (req, res) => {
  const id = req.params['id'];
  const url = `${API_ENDPOINT}/location/${id}`;

  return request(url).pipe(res);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
