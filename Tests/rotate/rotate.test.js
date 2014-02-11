'use strict'


describe('directive rotate', function() {
    var elm, $scope;

    beforeEach(module('rotate'));

    beforeEach(
        inject(function($rootScope, $compile) {
              $scope = $rootScope.$new();
              elm = angular.element('<div rotor></div>');
              $compile(elm)($scope);
        })
    );

    it('adds css class canRotate', function() {
        expect(elm.hasClass('canRotate')).toBe(true);
    });

    it('does initially not set css class isRotating', function() {
        expect(elm.hasClass('isRotating')).toBe(false);
    });

    it('adds css class isRotating after one click', function() {
        elm.click();
        expect(elm.hasClass('isRotating')).toBe(true);
    });

    it('removes css class isRotating after two clicks', function() {
        elm.click();
        elm.click();
        expect(elm.hasClass('isRotating')).toBe(false);
    });
});
