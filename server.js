/**
 * Created by bahram on 11/20/2016.
 */

var express = require('express');

// create app

var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Express Server is up on port 3000');
});
