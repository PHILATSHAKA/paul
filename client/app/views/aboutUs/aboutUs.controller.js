'use strict';

(function(){

class AboutUsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('paulBlogAppApp')
  .component('aboutUs', {
    templateUrl: 'app/views/aboutUs/aboutUs.html',
    controller: AboutUsComponent
  });

})();
