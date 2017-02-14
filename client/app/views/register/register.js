'use strict';

angular.module('paulBlogAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        template: '<register></register>'
      });
  });
