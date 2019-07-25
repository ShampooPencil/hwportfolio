const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/AAprofile.html'));
});

app.use("/style", express.static(__dirname + './public/style.css'));

//Serve static content for the app from the "public" directory in the application directory.

    // GET /style.css etc
    app.use(express.static(__dirname + '/public'));

// Mount the middleware at "/static" to serve static content only when their request path is prefixed with "/static".

    // GET /static/style.css etc.
    app.use('/static', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});