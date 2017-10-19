const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express()

app.get('/', function(req, res) {
    res.send('Hello World, Welcome to Fabbootok')
})

app.listen(3000)






