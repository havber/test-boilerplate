var assert = require('chai').assert;

describe('Frontpage', function() {
    before(function() {
        casper.start('http://localhost:8000');
    });

    it('should have correct title', function() {
        casper.then(function() {
            assert.equal(this.getTitle(), 'CasperJS Test');
        });
    });
});
