const express = require('express');
const mongoose = require('mongoose');
const juiceRouter = require('./routes/juiceRouter')
const sodaRouter = require('./routes/sodaRouter');
const app = express();

console.log('This runs on startup.');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/sodas', sodaRouter);
app.use('/juices', juiceRouter);

// make a secondary router

app.use('/', (req, res) => {
    console.log(req);
    res.send('Hello there, General Kenobi.');
});

mongoose.connect('mongodb://localhost:27017/beverages', { useNewUrlParser: true});
mongoose.connection.on('connected', () => {
    console.log('Connected to Beverages DB.');
});
mongoose.connection.on('error', () => {
    console.log('Error.');
});

const port = process.env.PORT || 4444
app.listen(port, () =>{
    console.log(`Listening on port ${port}...`);
});