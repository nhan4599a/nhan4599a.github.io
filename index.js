var express = require('express');

var app = express();

app.use(express.urlencoded());

app.use(express.json());

app.post('/', (req, res) => {
    res.send(`You have sent: ${req.body.name}`);
});

app.listen(8080);