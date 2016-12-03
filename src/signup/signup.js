import _ from 'lodash';

export default function($scope, signupFactory) {
    let params = {
        createHasInput: false
    };

    // $scope.todos = [
    // {
    //     task: 'do dishes',
    //     isCompleted: false,
    //     isEditing: false
    // },
    // {
    //     task: 'walk the dog',
    //     isCompleted: true,
    //     isEditing: false
    // }
    // ];

    signupFactory.getUsers($scope);

    /*$scope.onCompletedClick = todo => {
        todo.isCompleted = !todo.isCompleted;
    };

    $scope.onEditClick = todo => {
        todo.isEditing = true;
        todo.updatedTask = todo.task;
    };

    $scope.onCancelClick = todo => {
        todo.isEditing = false;
    };*/

    const { createUser } = signupFactory;

    $scope.createUser = _.partial(createUser, $scope);
    //$scope.updateTask = _.partial(updateTask, $scope);
    //$scope.deleteTask = _.partial(deleteTask, $scope);
    //$scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params, $scope));
}
