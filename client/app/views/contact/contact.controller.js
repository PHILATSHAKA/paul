'use strict';

(function(){
var $controller
class ContactComponent {
  constructor($scope, $http, $log, $timeout) {
  }
}

angular.module('paulBlogAppApp')
  .component('contact', {
    templateUrl: 'app/views/contact/contact.html',
    controller: ['$scope', '$http', '$log', '$timeout',ContactComponent]
  });

})();
