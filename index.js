require('dotenv').config();

let express = require('express'),
    app = express(),
    port = 27017 || 3000;

let bodyParser = require('body-parser');
let todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('HELLO FROM ROOT');
})

app.use('/api/todos', todoRoutes);

app.listen(port, function() {});