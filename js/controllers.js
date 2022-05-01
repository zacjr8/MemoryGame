'use strict';
var memoryGameApp = angular.module('memoryGameApp', []);
memoryGameApp.factory('game', function() {
  var gameFieldImageUrl = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6',
    'image7', 'image8'];

  return new Game(gameFieldImageUrl);
});
memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
  $scope.game = game;
});
memoryGameApp.directive('mgCard', function() {
  return {
    restrict: 'E',
    template: '<div class="col-md-3">' +
                '<div class="card-main" ng-class="{flipped: tile.gameFieldFBI}">' +
                  '<img class="front" ng-src="./images/back.png">' +
                  '<img class="back" ng-src="./images/{{tile.gameFieldImageNumber}}.jpg">' +
                '</div>' +
              '</div>',
    scope: {
      tile: '='
    }
  }
});
