'use strict';

(function(){
var $controller
class LoginComponent {
  constructor($scope, $rootScope) {
  }
}
angular.module('paulBlogAppApp')
  .component('login', {
    templateUrl: 'app/views/login/login.html',
    controller: ['$scope','$rootScope', LoginComponent]
  });
})();
