const express = require('express');

const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config()
const axios = require('axios')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));



app.post('/add', async (req, res) => {
  try {
    const [lat, lng] = Object.keys(req.body)[0].split(' ')
    const API_KEY = process.env.API_KEY
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=5&appid=${API_KEY}`
    const data = await axios.get(url);
    res.status(200).send(data.data[0].name)
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting location');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
























