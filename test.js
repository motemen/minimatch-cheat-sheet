var minimatch = require('minimatch');
var tap       = require('tap');
var _         = require('lodash');

var data = require('./data.json');

_.forEach(data, function (entry) {
  tap.test('# ' + entry.section + '\n' + entry.description.join('\n'), function (t) {
    entry.examples.forEach(function (e) {
      var p = e[0], oks = e[1], ngs = e[2];
      oks.forEach(function (ok) {
        t.ok(+minimatch(ok, p), '"' + p + '" =~ "' + ok + '"');
      });
      ngs.forEach(function (ng) {
        t.ok(!minimatch(ng, p), '"' + p + '" !~ "' + ng + '"');
      });
    });

    t.end();
  });
});
