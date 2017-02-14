'use strict';

angular.module('paulBlogAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aboutUs', {
        url: '/aboutUs',
        template: '<about-us></about-us>'
      });
  });
