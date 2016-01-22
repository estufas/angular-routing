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
  .when('/projects', {
    templateUrl: 'app/views/projects.html'
  })
   .when('/resume', {
    templateUrl: 'app/views/resume.html'
  })
   .when('/contact', {
   templateUrl: 'app/views/contact.html'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');
}]);