angular.module('colorApp2', [])

.controller('ColorController', function($scope) {
    $scope.tone = '#f16f1a';

    $scope.textColor = function () {
        var col = net.brehaut.Color($scope.tone);
        var cutoff = col.getRed() + col.getGreen() + col.getBlue();
        return cutoff > 1.5 ? '#000000' : '#FFFFFF';
    };

    $scope.colorText = function () {
        function cval(value) {
            return '' + Math.round(value * 100) + '%';
        }

        var col = net.brehaut.Color($scope.tone);

        return 'R: '+cval(col.getRed())+
              ' G: '+cval(col.getGreen())+
              ' B: '+cval(col.getBlue())+
              ' A: '+cval(col.getAlpha());
    };
});
