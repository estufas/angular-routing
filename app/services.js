angular.module('DoughnutServices', ['ngResource'])
.factory('Doughnut', ['$resource', function($resource) {
  return $resource('http://api.doughnuts.ga/doughnuts/:id');
}]);
