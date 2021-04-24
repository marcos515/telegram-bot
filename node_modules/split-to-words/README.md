split-to-words
==================

Split a sentence to words. Considers URLs a single word.

Installation
------------

    npm install split-to-words

Usage
-----


      var splitToWords = require('split-to-words');

      console.log(splitToWords('I bomb atomically/Socrates\' philosophies and hypotheses/Can\'t define how I be droppin\' these mockeries/Lyrically perform armed robbery/Flee with the lottery/Possibly, they spotted me!'));

Output:

    [
      'I',
      'bomb',
      'atomically',
      'Socrates\'',
      'philosophies',
      'and',
      'hypotheses',
      'Can\'t',
      'define',
      'how',
      'I',
      'be',
      'droppin\'',
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

    console.log(splitToWords(''So @username\'s app uses @othername. Here is a url: http://yo.com/2345/#/single-page-app  Cool, amirite?'));

Output:

    [
      'So',
      '@username\'s',
      'app',
      'uses',
      '@othername.',
      'Here',
      'is',
      'a',
      'url:',
      'http://yo.com/2345/#/single-page-app',
      'Cool',
      'amirite'
    ]

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2016 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
