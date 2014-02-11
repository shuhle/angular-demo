angular.module("rotate", [])

.directive("rotor", function() {
    function link($scope, ele, attr) {
        ele.addClass("canRotate");

        ele.on("click", function() {
            ele.toggleClass("isRotating");
        });
    }

    return {
        link: link,
        restrict: 'A'
    };
});
