'use strict';

(function() {

  class MainController {

    constructor($http, $state, $scope) {
      this.$http = $http;
      this.awesomeThings = [];

    //   var countdown = 20;
    //     console.log("Phila tshaka hghajKSDHGEQJKHWLDJGHVGAK");
    //     displayText = "You will be logged out in #2 seconds",
    //     timer;
    //
    //   $scope.started = false;
    //
    //   $scope.$on('IdleStart', function () {
    //     swal({
    //       title : 'You are Idle. Do Something!',
    //       text : displayText.replace(/#2/, countdown),
    //       timer : countdown * 1000,
    //       type : "warning",
    //       html : true,
    //       allowOutsideClick: true,
    //       animation: "slide-from-top"
    //     });
    //     timer = setInterval(function () {
    //       countdown--;
    //       if (countdown<0){
    //         clearInterval(timer);
    //       }
    //       $('.sweet-alert>p').text(displayText.replace(/#2/, countdown));
    //     }, 1000);
    //   });
    //
    //   $scope.$on('IdleEnd', function () {
    //     swal.close()
    //   });
    //
    //   $scope.$on('IdleTimeout', function () {
    //     swal.close()
    //     $scope.timedout = true;
    //     $state.go('login');
    //   });
    //
    //   $scope.start = function () {
    //     swal.close()
    //     Idle.watch();
    //     $scope.started = true;
    //   };
    // }
    //
    // $onInit() {
    //   this.$http.get('/api/things')
    //     .then(response => {
    //       this.awesomeThings = response.data;
    //     });
    }
  }

  angular.module('paulBlogAppApp')
    .component('main', {
      templateUrl: 'app/views/main/main.html',
      controller:['$http','$state', '$scope', MainController]
    })
    // .config(function (IdleProvider, KeepaliveProvider) {
    //   IdleProvider.idle(20);
    //   IdleProvider.timeout(20);
    //   KeepaliveProvider.interval(10);
    // })
    // .run(function(Idle){
    //   Idle.watch();
    // })
})();
