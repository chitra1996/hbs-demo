"use strict";

const express = require('express');
const app = express();
const hbs = require('express-handlebars');

app.engine('.hbs', hbs({extname: '.hbs',defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.use(express.static('public'));

app.get('/home',function(req,res) {
    res.render('home');
})

app.get('/dashboard',function(req,res) {
    res.render('dashboard');
})

app.get('/new',function(req,res) {
    res.render('customLayout', {layout: 'newLayout'});
})

app.listen('3000',function() {
    console.log('server started at : 3000');
})
