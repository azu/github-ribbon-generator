'use strict'

var _ = require('lodash')
var existsAssign = require('./index.js')
var objectAssign = require('object-assign')

var objt1 = {
  foo: 'bar'
}

var objt2 = {
  foo: 'hello'
}

console.log("should to be 'hello world'")
console.log('existsAssign \t', existsAssign('hello world', null))
console.log('_.merge \t', _.merge('hello world', null))

console.log("should to be 'hello world'")
console.log('existsAssign \t', existsAssign('foo', 'hello world'))
console.log('_.merge \t', _.merge('foo', 'hello world'))

console.log("should to be '{foo: 'hello'}'")
console.log('existsAssign \t', existsAssign(objt1, objt2))
console.log('_.merge \t', _.merge(objt1, objt2))
