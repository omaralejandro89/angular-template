/**
 * Created by Omar on 10/6/14.
 */
(function () {

    "use strict";

    angular
        .module("app")
        .controller("MyController", ["data", MyController]);


    function MyController (data) {
        var vm = this;

        vm.list = data;

    }






})();

