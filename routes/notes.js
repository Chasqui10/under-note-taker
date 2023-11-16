const note2 = require('express').Router();
const {readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const {v4: uuidv4} = require('uuid')

note2.get('/', (req, res) => {
    console.info(`${req.method} request recieved for notes`);

    readFromFile('./db/notes.json')
    .then((data) => res.json(JSON.parse(data)));
});

note2.post('/', (req, res) => {
    console.info(`${req.method} request recieved to submit new note.`);

    const { title, text, id } = req.body;
    
    if (title && text) {
        const newNote2 = {
            title,
            text,
            id: uuidv4(),
        };
    
        readAndAppend(newNote2, './db/notes.json');

        const response = {
            status: 'success',
            body: newNote2
        };

        res.json(response);
     
    } else {
        res.json('Error in posting new notes.');
    }
});


module.exports = note2;