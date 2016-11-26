/**
 * Created by bahram on 11/20/2016.
 */

var express = require('express');

// create app

var app = express();

const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
    if (req.headers['x-forwaded-porto']=== 'http') {
        next();

    } else {
        res.redirect('http://'+ req.hostname + req.url) ;

    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express Server is up on ' + PORT);
});
