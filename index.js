require('dotenv').config();

let express = require('express'),
    app = express(),
    port = 27017 || 3000;

app._router.listen(port, function() {});