'use strict';

angular.module('paulBlogAppApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
      url: '/',
      template: '<main></main>'
    });
  })

