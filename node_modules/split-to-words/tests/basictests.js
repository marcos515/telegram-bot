var test = require('tape');
var splitToWords = require('../index');

var testCases = [
  {
    text:
      "I bomb atomically/Socrates' philosophies and hypotheses/Can't define how I be droppin' these mockeries/Lyrically perform armed robbery/Flee with the lottery/Possibly, they spotted me!",
    expected: [
      'I',
      'bomb',
      'atomically',
      "Socrates'",
      'philosophies',
      'and',
      'hypotheses',
      "Can't",
      'define',
      'how',
      'I',
      'be',
      "droppin'",
      'these',
      'mockeries',
      'Lyrically',
      'perform',
      'armed',
      'robbery',
      'Flee',
      'with',
      'the',
      'lottery',
      'Possibly',
      'they',
      'spotted',
      'me'
    ]
  },
  {
    text:
      "So @username's app uses @othername. Here is a url: http://yo.com/2345/#/single-page-app  Cool, amirite?",
    expected: [
      'So',
      "@username's",
      'app',
      'uses',
      '@othername',
      'Here',
      'is',
      'a',
      'url:',
      'http://yo.com/2345/#/single-page-app',
      'Cool',
      'amirite'
    ]
  },
  {
    text:
      'If a sentence follows this sentence, it is not true. The previous sentence is true.',
    expected: [
      'If',
      'a',
      'sentence',
      'follows',
      'this',
      'sentence',
      'it',
      'is',
      'not',
      'true',
      'The',
      'previous',
      'sentence',
      'is',
      'true'
    ]
  },
  {
    text: 'What a terrible crash.',
    expected: ['What', 'a', 'terrible', 'crash']
  },
  {
    text: '"Split" to words',
    expected: ['"Split"', 'to', 'words']
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test(testCase.text, function basicTest(t) {
    t.deepEqual(
      splitToWords(testCase.text),
      testCase.expected,
      'Words split correctly.'
    );
    t.end();
  });
}
