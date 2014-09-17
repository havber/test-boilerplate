#HTML & JavaScript test-boilerplate

Boilerplate for Web-projects set up with casperjs for HTML-testing and karma test-runner for JavaScript testing.

###Installation
```bash
$ git clone git@github.com:havber/test-boilerplate.git
```
```bash
$ cd test-boilerplate
```
and
```bash
$ npm install
```

###Run tests

csperjs and karma emits an exit code if tests fail, which causes ```npm run``` to
exit with an error. I have not figured out how to avoid this, so instaed i wrote simple shell scripts
as shortcuts to run the tests. This is just because I don't want to install casperjs and karma
globally and I don't want to use the entire node_modules path when executing the tests. I must find a way to streamline this.

For html testing, run the casperjs tests with ```$ ./htmltest.sh```.

For js-testing, start the karma test-runner with ```$ ./jstest.sh```.
