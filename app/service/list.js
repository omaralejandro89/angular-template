/**
 * Created by Omar on 10/6/14.
 */
(function () {

    "use strict";

    angular
        .module("app")
        .factory("data", data);

        function data () {
            var list = [
                {
                    "name": "Omar",
                    "age": 24
                },
                {
                    "name": "Espen",
                    "age": 33
                },
                {
                    "name": "Geler",
                    "age": 24
                }
            ];

            return list;
        }




})()

