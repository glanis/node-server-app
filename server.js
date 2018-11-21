const express = require('express');
const hbs = require('hbs');
const fs = require('fs');


var app = express();

app.set('view engine', 'hbs');

app.use((req, res, next) => {
    /*var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n');*/
    next();
  });

/*app.use((req, res, next) => {
    res.send('MAINTENANCE' + "\n" + "this page is being updated");
});
*/
app.use(express.static(__dirname+ '/public'));



app.get('/', (req, res,) => {
    res.send("hello express");
});


app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/bad', (req, res) => {
    res.send('Unable to handle request');
    });
 


app.listen(3000);