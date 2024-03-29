var blwNgLoadingWidget = angular.module('benjaminWilliams.loadingWidget', []);

blwNgLoadingWidget.factory('requestNotificationChannel', ['$rootScope', function ($rootScope) {
  // private notification messages
  var _START_REQUEST_ = '_START_REQUEST_';
  var _END_REQUEST_ = '_END_REQUEST_';

  // publish start request notification
  var requestStarted = function () {
    $rootScope.$broadcast(_START_REQUEST_);
  };
  // publish end request notification
  var requestEnded = function () {
    $rootScope.$broadcast(_END_REQUEST_);
  };
  // subscribe to start request notification
  var onRequestStarted = function ($scope, handler) {
    $scope.$on(_START_REQUEST_, function (event) {
      handler();
    });
  };
  // subscribe to end request notification
  var onRequestEnded = function ($scope, handler) {
    $scope.$on(_END_REQUEST_, function (event) {
      handler();
    });
  };

  return {
    requestStarted: requestStarted,
    requestEnded: requestEnded,
    onRequestStarted: onRequestStarted,
    onRequestEnded: onRequestEnded
  };
}]);

blwNgLoadingWidget.directive('blwLoadingWidget', ['requestNotificationChannel', function (requestNotificationChannel) {
  return {
    restrict: "A",
    link: function (scope, element) {
      // hide the element initially
      element.addClass("invisible");

      var startRequestHandler = function () {
        // got the request start notification, show the element
        element.removeClass("invisible");
      };

      var endRequestHandler = function () {
        // got the request start notification, show the element
        element.addClass("invisible");

      };

      requestNotificationChannel.onRequestStarted(scope, startRequestHandler);

      requestNotificationChannel.onRequestEnded(scope, endRequestHandler);
    }
  };
}]);

blwNgLoadingWidget.directive('blwNotLoadingWidget', ['requestNotificationChannel', function (requestNotificationChannel) {
  return {
    restrict: "A",
    link: function (scope, element) {
      element.addClass("invisible");
      var startRequestHandler = function () {
        element.addClass("invisible");
      };
      var endRequestHandler = function () {
        element.removeClass("invisible");
      };

      requestNotificationChannel.onRequestStarted(scope, startRequestHandler);

      requestNotificationChannel.onRequestEnded(scope, endRequestHandler);
    }
  };
}]);
