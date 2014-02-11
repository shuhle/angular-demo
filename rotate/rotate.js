angular.module("rotate", [])

/**
 * @ngdoc directive
 * @name rotate:rotate
 *
 * @description
 * Adds css class 'canRotate' at initialization time.
 * Toggles css class 'isRotating' on each click.
 *
 * @example
   <div> <u rotate>Hello</u> World. </div>
 */
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
