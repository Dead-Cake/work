//
// import * as bodyParser from 'body-parser';
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.set('views', 'views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/form',function (req, res){
    // let id = req.query.id;
    // console.log(id);
    res.render('index1');
});

app.post('/answer',function (req, res){
    console.log(req.body.title)
    res.send(req.body.title);

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});