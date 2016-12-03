import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoFactory from 'factories/todo-factory';
import signupFactory from 'factories/signup-factory';
import todosController from 'todos/todos';
import signupController from 'signup/signup';

const app = angular.module('app', [uiRouter, todoFactory.name, signupFactory.name]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: require('home/home.html')
        })
        .state('todos', {
            url: '/todos',
            template: require('todos/todos.html'),
            controller: todosController
        })
        .state('signup', {
            url: '/signup',
            template: require('signup/signup.html'),
            controller: signupController
        });

    $locationProvider.html5Mode(true);
});

export default app;
