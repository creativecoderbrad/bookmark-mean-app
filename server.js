
const express = require('express');
const pug = require('pug');
const path = require('path');

const app = express();


// load our view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set public folder
app.use(express.static(path.join(__dirname, 'public')));


// home route
app.get('/', function(req, res){
    res.render('index', { 
    })
})



// start our server
app.listen(3000, function() {
  console.log('started server on port 3000');
});
