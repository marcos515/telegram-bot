var compact = require('lodash.compact');
// \W will match apostrophes, unfortunately.
// If you include \. in basicWordBoundaryRegex, it will split URLs apart, so
// don't do that.
var basicWordBoundaryRegex = /[ ,;!?]/;
var wordBoundariesInURLsRegex = /[./:\-_#]/;
var urlRegex = /http.?:\/\/[^\s]+/;

function splitToWords(text) {
  var chunks = compact(text.split(basicWordBoundaryRegex));
  chunks = splitChunksThatAreNotURLsEvenFurther(chunks);
  return chunks.map(dropClosingPeriod);
}

function splitChunksThatAreNotURLsEvenFurther(chunks) {
  for (var i = chunks.length - 1; i > -1; --i) {
    var chunk = chunks[i];
    if (chunk.indexOf('/') !== -1 && !chunk.match(urlRegex)) {
      chunks.splice.apply(
        chunks,
        [i, 1].concat(chunk.split(wordBoundariesInURLsRegex))
      );
    }
  }
  return chunks;
}

function dropClosingPeriod(s) {
  var cleaned = s;
  if (s.length > 0) {
    if (s.charAt(s.length - 1) === '.') {
      cleaned = s.substr(0, s.length - 1);
    }
  }
  return cleaned;
}

module.exports = splitToWords;
