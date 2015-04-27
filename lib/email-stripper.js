/*
 * email-stripper
 * https://github.com/jordancalder/email-stripper
 *
 * Copyright (c) 2015 Sterling Jordan Calder
 * Licensed under the MIT license.
 */

'use strict'

var stripper = require('stream').Transform( { objectMode: true } )

stripper._transform = function(chunk, encoding, callback) {
	var data = chunk.toString()
	if(this._last) data = this._last + data

	var sentences = data.split('. ')
	this._last = sentences.splice(sentences.length-1,1)[0]

	sentences.forEach(this.clean.bind(this))
    callback()
}

stripper.clean = function(s){
	s += (s.substr(s.length-1) == '.')
		? ''
		: '. '
	if(s.indexOf('@') == -1) this.push(s)
}

stripper._flush = function (callback) {
     if (this._last) this.clean(this._last)
     this._last = null
     callback()
}

module.exports = stripper
