const express = require('express');
const app = express();

console.log('This runs on startup.');

// Middleware 
app.get('/test', (req, res) => {
    console.log(req);
    res.send('Hello!');
});

app.listen(4444, () =>{
    console.log('Listening on port 4444...');
});