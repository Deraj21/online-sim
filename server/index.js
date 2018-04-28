const express = require('express');
const bodyParser = require('body-parser');
const pc = require('./controllers/places_controller');

const app = express();
app.use(bodyParser.json());
app.use(express.static( __dirname + '/../build'));

app.get('/api/places', pc.read);
app.post('/api/places', pc.create);

const port = 3000;
app.listen( port, () => console.log(`Server listening on port ${port}`) );