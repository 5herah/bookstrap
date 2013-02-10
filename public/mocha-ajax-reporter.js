
/**
 * Module dependencies.
 */

var Base = require('./base')
  , color = Base.color;

/**
 * Expose `AJAXReporter`.
 */

exports = module.exports = AJAXReporter;

/**
 * Initialize a new `AJAXReporter` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function AJAXReporter(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , total = runner.total;

  var report = []

  runner.on('start', function(){
    console.log(JSON.stringify(['start', { total: total }]));
  });

  runner.on('pass', function(test){
    report.push(JSON.stringify(['pass', clean(test)]));
  });

  runner.on('fail', function(test, err){
    report.push(JSON.stringify(['fail', clean(test)]));
  });

  runner.on('end', function(){
    // process.stdout.write(JSON.stringify(['end', self.stats]));
    $.post('http://localhost:3000/specreports/mocha', report, function () {
      console.log('Report sent.');
    })
  });
}

/**
 * Return a plain-object representation of `test`
 * free of cyclic properties etc.
 *
 * @param {Object} test
 * @return {Object}
 * @api private
 */

function clean(test) {
  return {
      title: test.title
    , fullTitle: test.fullTitle()
    , duration: test.duration
  }
}

// require user login to run tests
$(document).ready(function () {
  if(!sessionStorage.loggedin){
    $('body').append("<form><input id='student1' type='text' placeholder='GitHub Username 1'></input><input id='student2' type='text' placeholder='GitHub Username 2'></input><input id='loginsubmit' type='submit'></input></form>")
  }

  $('#loginsubmit').on('click', function (e) {
    e.preventDefault();
    history.go(0);
    sessionStorage.clear();
    sessionStorage.user1 = $('#student1').val();
    sessionStorage.user2 = $('#student2').val();
    if(sessionStorage.user1 || sessionStorage.user2){
      sessionStorage.loggedin = true;
      mocha.reporter('ajax-reporter')
      // jasmine.getEnv().execute();
    } else {
      console.log('Please enter at least one GitHub username.')
    }
  });
});
