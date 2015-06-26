var appFilter = (function ($) {
    "use strict";

    var exports = {},
        init = function () {
            var appFilters = angular.module('appFilters', []);

            appFilters.filter('template', function () {
                return function (input) {
                    //put your filter logic here
                    return "filtered";
                };
            });

        };

    exports.initialize = init;
    return exports;

})(jQuery);