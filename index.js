require('dotenv').config();

let express = require('express'),
    app = express(),
    port = 27017 || 3000;

let todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
    res.send('HELLO FROM ROOT');
})

app.use('/api/todos', todoRoutes);

app.listen(port, function() {});