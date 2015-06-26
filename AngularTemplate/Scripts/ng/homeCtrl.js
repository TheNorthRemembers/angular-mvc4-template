var appHomeCtrl = (function ($) {
    "use strict";

    var exports = {},

        init = function () {
            var ctrl = angular.module('ctrl', []);
            ctrl.controller('homeCtrl', ['$scope','$appResource', function ($scope,$appResource) {
                //sample request
                //$appResource.sample.query(function (data) {

                //});

                $scope.message = "Angular JS is fun!";

            }]);
        };

    exports.initialize = init;
    return exports;

})(jQuery);