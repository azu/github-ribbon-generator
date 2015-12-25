existential = require '..'
should      = require 'should'

describe 'Existential ::', ->

  it 'compare with null', ->
    (existential(null)).should.eql false

  it 'compare with undefined', ->
    (existential(undefined)).should.eql false

  it 'compare with positive value', ->
    (existential('string')).should.eql true
