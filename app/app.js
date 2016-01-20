var app = angular.module('DoughnutApp', ['DoughnutServices', 'DoughnutCtrls', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  //define routes
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/index.html',
    controller: 'DoughnutCtrl'
  })
  .when('/about', {
    templateUrl: 'app/views/about.html'
  })
  .when('/doughnuts/:id', {
    templateUrl: 'app/views/doughnutShow.html',
    controller: 'DoughnutShowCtrl'

  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');
}]);