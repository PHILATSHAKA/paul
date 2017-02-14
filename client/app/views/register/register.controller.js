"use strict";
(function () {
  var $controller;
  class RegisterComponent {
    constructor($scope, $http, $log) {
    }
  }
angular.module('paulBlogAppApp')
   .component('register', {
    templateUrl: 'app/views/register/register.html',
     controller: ['$scope', '$http','$log', RegisterComponent]
   });
})();
