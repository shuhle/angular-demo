angular.module('colorApp3', [])

.controller('ColorController', function($scope) {
    $scope.foreground = '#fabe00';
    $scope.background = '#01af00';
})

.directive('color', function() {
    function link($scope, element, attr) {
        var span = $('span', element);
        var input = $('input', element);

        function animate(animation) {
            span.animate(animation, 2000);
        }; 

        input.focus(animate.bind(this, {opacity: 1.0}));
        input.blur(animate.bind(this, {opacity: 0.1}));
    };

    return {
        restrict: 'E',
        scope: {
            color: "=value"
        },
        templateUrl: 'color.html',
        link: link,
        controller: function($scope) {

            $scope.textColor = function () {
                var col = net.brehaut.Color($scope.color);
                var cutoff = col.getRed() + col.getGreen() + col.getBlue();
                return cutoff > 1.5 ? '#000000' : '#FFFFFF';
            };

            $scope.colorText = function () {
                function cval(value) {
                    return '' + Math.round(value * 100) + '%';
                }

                var col = net.brehaut.Color($scope.color);

                return 'R: '+cval(col.getRed())+
                      ' G: '+cval(col.getGreen())+
                      ' B: '+cval(col.getBlue())+
                      ' A: '+cval(col.getAlpha());
            };
        }
    };
});
