'use strict';

(function(){

class ProfileComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('paulBlogAppApp')
  .component('profile', {
    templateUrl: 'app/views/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'profileCtrl'
  });

})();
