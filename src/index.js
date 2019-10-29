// const config = require('config');
const express = require('express');
const bodyParser = require("body-parser");
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();
app.set('views', 'src/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/form',function (req, res){
    res.render('index1');
});

app.post('/answer',function (req, res){
    console.log(req.body.title);
    res.render('answer',{title1 :req.body.title})
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}`);
});