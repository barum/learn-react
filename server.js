/**
 * Created by bahram on 11/20/2016.
 */

var express = require('express');

// create app

var app = express();

const port = process.env.PORT || 3000;

app.use(functio (req, res, next) {
    if (req.headers['x-forwaded-porto']=== 'http') {
        next();
    
    } else {
        res.redirect('http://'+ req.hostname + req.url) ;
    
    }
});

app.use(express.static('public'));

app.listen(port, function () {
    console.log('Express Server is up on port 3000');
});
