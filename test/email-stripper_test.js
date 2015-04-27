'use strict'

var strip = require('../lib/email-stripper.js')

var fs = require('fs')
var input = fs.createReadStream(__dirname + '/test-file.txt')
input.pipe(strip)
strip.on('readable', function () {
     var sentence
     while (sentence = strip.read()) {
          console.log(sentence)
     }
})