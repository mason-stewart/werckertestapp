/*global describe, it */
'use strict';
(function () {
    describe('Tell me more about pizza cats...', function(){
      it('PIZZA CATS', function () {
        expect(3).to.equal(3)
      });
    })

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
              expect(true).to.equal(false)
            });
        });
    });


})();
