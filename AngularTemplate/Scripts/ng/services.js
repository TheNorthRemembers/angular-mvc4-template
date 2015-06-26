var appService = (function ($) {
    "use strict";
    
    var exports = {},
        baseUrl = "MybaseURL",
        sampleURL = "/api/request/",

        init = function () {
            var appServices = angular.module('appServices', ['ngResource']);

            appServices.factory('$appResource', ['$resource', function ($resource) {
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