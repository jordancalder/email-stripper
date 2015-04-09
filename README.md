# email-stripper [![Build Status](https://secure.travis-ci.org/jordancalder/email-stripper.png?branch=master)](http://travis-ci.org/jordancalder/email-stripper)

A tool to find and remove email addresses from a set of text. Sentences that contain the email address will be removed.

## Getting Started
Install the module with: `npm install email-stripper`

```javascript
var strip = require('email-stripper')

var fs = require('fs')
var input = fs.createReadStream(__dirname + '/test-file.txt')
input.pipe(strip)
strip.on('readable', function () {
     var sentence
     while (sentence = strip.read()) {
          //Do something with sentence
     }
})
```

## License
Copyright (c) 2015 Sterling Jordan Calder  
Licensed under the MIT license.
