const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
let stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', (req, res) => {
    fs.readFile('./test.json', 'utf-8', (err, data) => {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    });
});

app.post('/updateNote/:note', (req, res) => {
    stringifyFile = req.params.note;
    fs.writeFile('./test.json', stringifyFile, (err) => {
        if (err) throw err;
        console.log('File updated');
    });
    res.send('File updated');
});

const server = app.listen(3000);