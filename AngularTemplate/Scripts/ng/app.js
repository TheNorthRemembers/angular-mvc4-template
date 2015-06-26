var app = (function ($) {
    "use strict";

    var exports = {},
        instance,
        init = function () {
            if (!instance) {
                instance = register();
            }
            return instance;
        },

        register = function () {

            var app = angular.module('app', ['ctrl', 'ngRoute','ngResource','appService']).
                config(['$routeProvider', function ($routeProvider) {
                    $routeProvider
                    .when("/index", {
                        templateUrl: '/home.html',
                        controller: 'homeCtrl'
                    })
                    .otherwise({
                        templateUrl: '/home.html',
                        controller: 'homeCtrl'
                    });
                }]);

            appServices.initialize();
         
            appHomeCtrl.initialize();

        };

    exports.initialize = init;
    return exports;

})(jQuery);


(function () {
    "use strict";
    app.initialize();
}());