// Initial communication to node packages, static environments, and routes.  
const express = require('express');
const path = require('path');
const { check } = require('./middleware/check')
const api = require('./routes/index.js');

const PORT = process.envPORT || 3001;

const app = express();

//Importing middleware, 
app.use(check);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname,'/public/index.html'))
);

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);