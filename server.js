/*jshint strict: true, node: true*/
//simple static page express app created with html/css
//contains a link which returns and image from the server
'use strict';
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001;

app.use(express.static( 'public', { maxAge: 86400000 })); //one day cache

app.get( '/', function( req, res ) {
    res.sendFile('/index.html');
});

app.listen( port, function() {
    console.log("Server started on " + port);
});
