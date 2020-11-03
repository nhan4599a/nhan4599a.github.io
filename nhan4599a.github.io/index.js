var express = require('express');

var app = express();

app.use(express.urlencoded());

app.use(express.json());

app.post('/', (req, res) => {
    res.send(`You have sent: ${req.body.name}`);
});

app.get('/', (req, res) => {
    res.sendFile('/view/index.html');
});

app.listen(8080);