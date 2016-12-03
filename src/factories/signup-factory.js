import _ from 'lodash';
import angular from 'angular';

const signupFactory = angular.module('app.signupFactory', [])

.factory('signupFactory', ($http) => {
    function getUsers($scope) {
        $http.get('/signup').success(response => {
            $scope.users = response.users;
        });
    }

    function createUser($scope) {
        if (!$scope.username && !$scope.password && !$scope.email) { return; }
        console.log('Mari === ',$scope);
        $http.post('/signup', {
            usertype: $scope.usertype,
            username: $scope.username,
            password: $scope.password,
            email: $scope.email
        }).success(response => {
            //getTasks($scope);
            $scope.usertype = '';
            $scope.username = '';
            $scope.password = '';
            console.log('Insert success');
        });
    }

    /*function updateTask($scope, todo) {
        $http.put(`/todos/${todo._id}`, { task: todo.updatedTask }).success(response => {
            getTasks($scope);
            todo.isEditing = false;
        });
    }

    function deleteTask($scope, todoToDelete) {
        $http.delete(`/todos/${todoToDelete._id}`).success(response => {
            getTasks($scope);
        });

        // _.remove($scope.todos, todo => todo.task === todoToDelete.task);
    }

    function watchCreateTaskInput(params, $scope, val) {
        const createHasInput = params.createHasInput;

        if (!val && createHasInput) {
            $scope.todos.pop();
            params.createHasInput = false;
        } else if (val && !createHasInput) {
            $scope.todos.push({ task: val, isCompleted: false });
            params.createHasInput = true;
        } else if (val && createHasInput) {
            $scope.todos[$scope.todos.length - 1].task = val;
        }
    }*/

    return {
        getUsers,
        createUser
    };
});

export default signupFactory;
