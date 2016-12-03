var todosRoutes = require('server/todos/routes');
var signupRoutes = require('server/signup/routes');

module.exports = function routes(app) {
    app.use('/todos', todosRoutes);
    app.use('/signup', signupRoutes);
};