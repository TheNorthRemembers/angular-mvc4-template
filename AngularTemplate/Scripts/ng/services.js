var appServices = (function ($) {
    "use strict";
    
    var exports = {},
        baseUrl = "MybaseURL",
        sampleURL = "/api/request/",

        init = function () {
            var appService = angular.module('appService', ['ngResource']);

            appService.factory('$appResource', ['$resource', function ($resource) {
                return {
                    sample:$resource(baseUrl + sampleURL),               
                //for a POST
                    samplePost:$resource(baseUrl+sampleURL,null,{insert:{method:'POST'}})
                }


            }]);

        };

    exports.initialize = init;
    return exports;

})(jQuery);