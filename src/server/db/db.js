var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/todos');

var Todo = mongoose.model('Todo', {
    task: String,
    isCompleted: Boolean,
    isEditing: Boolean
});

var Users = mongoose.model('Users', {
    usertype: String,
    username: String,
    password: String,
    email: String
});

module.exports.Todo = Todo;
module.exports.Users = Users;