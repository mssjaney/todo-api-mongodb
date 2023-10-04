let mongoose = require('mongoose');

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

mongoose.set('debug', true);
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.frjgcbw.mongodb.net/todo-api?retryWrites=true&w=majority`);

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
