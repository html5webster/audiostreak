var mongoose = require('mongoose');
var Users = require('server/db/db').Users;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    Users.find(function(err, results) {
        if (err) { console.log(err); }

        res.send({ users: results });
    });
});

router.post('/', function(req, res) {
    var users = new Users(req.body);
    users.save(function(err) {
        if (err) { console.log(err); }

        res.send('users saved');
    });
});

/*router.put('/:id', function(req, res) {
    var id = req.params.id;
    Todo.update({ _id: mongoose.Types.ObjectId(id) }, {
        $set: { task: req.body.task }
    }, function(err) {
        if (err) { console.log(err); }

        res.send('ToDo updated');
    });
});

router.delete('/:id', function(req, res) {
    var id = req.params.id;
    Todo.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) { console.log(err); }

        res.send('ToDo deleted');
    });
});*/

module.exports = router;