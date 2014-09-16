var casper = require('casper').create();

casper.start('http://localhost:8000', function() {
    this.echo(this.getTitle());
});

casper.run();
