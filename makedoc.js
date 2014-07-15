var _    = require('lodash');

var data = require('./data.json');

function codify (str) {
  if (str.indexOf('|') === -1) {
    return '`' + str + '`';
  } else {
    return '<code>' + str.replace(/\|/, '&#x7C;') + '</code>';
  }
}

console.log('# minimatch-cheat-sheet');
console.log('');
console.log('A cheat sheet for [minimatch](https://github.com/isaacs/minimatch).');
console.log('');

_.forEach(data, function (entry) {
  console.log('## ' + entry.section);
  console.log('');

  entry.description.forEach(function (desc) {
    console.log('- ' + desc);
  });
  console.log('');

  console.log('| Pattern | Matches | Does not match |');
  console.log('| ------- | ------- | -------------- |');
  entry.examples.forEach(function (ex) {
    var row = [
      codify(ex[0]),
      ex[1].map(codify).join(', '),
      ex[2].map(codify).join(', '),
    ].join(' | ');
    console.log('| ' + row + ' |');
  });
  console.log('');
});
