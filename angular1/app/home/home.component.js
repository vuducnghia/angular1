'use strict';
angular.module('spaApp')
    .controller('HomeController', function ($scope) {
        $scope.flash = 'Hello world! I am Tweedy bird.';
        $scope.img = 'http://img2.wikia.nocookie.net/__cb20121120221843/scratchpad/images/thumb/5/54/Tweety.gif/180px-Tweety.gif';
    });