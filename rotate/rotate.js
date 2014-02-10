angular.module("rotate", [])
.directive("rotor", function() {
    function link($scope, ele, attr) {
        var rotating = false;

        ele.addClass("canRotate");

        ele.on("click", function() {
            var act = rotating ? ele.removeClass : ele.addClass;
            act.bind(ele, "isRotating")();
            rotating = !rotating;
        });
    }

    return {
        link: link,
        restrict: 'A'
    };
});
