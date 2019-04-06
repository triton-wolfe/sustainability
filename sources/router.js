(function (window) {
    'use strict';
    var baseUrl = 'https://triton-wolfe.github.io/sustainability';

    angular.module('greeksustain')
        .value('baseUrl', baseUrl)
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('Home', {
                url: "/Home",
                templateUrl: "/sources/views/HomeView.html",
                params: {obj: null}
            }).state('Login', {
                url: "/Login",
                templateUrl: "/sources/views/LoginView.html",
                params: {obj: null}
            });
            $urlRouterProvider.otherwise('Home');
        }]);
})(window);
