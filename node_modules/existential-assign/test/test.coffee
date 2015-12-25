existsAssign = require '..'
should       = require 'should'

describe 'existential default ::', ->

  describe 'behavior', ->

    it "don't modify input values", ->
      expected =
        foo: 'bar'
        hello: 'world'

      value1 = hello: 'world'
      value1Copy = hello: 'world'

      value2 = foo: 'bar'
      value2Copy = foo: 'bar'

      result = existsAssign(value1, value2)

      result.should.be.eql expected
      value1.should.be.eql value1Copy
      value2.should.be.eql value2Copy

    it 'works with one parameter', ->
      existsAssign('hello world').should.be.equal 'hello world'
      existsAssign(foo: 'bar').should.be.eql foo: 'bar'

    it 'works with more than one source', ->
      existsAssign(null, undefined, 'hello world').should.be.equal 'hello world'
      existsAssign(null, 'hello world', undefined).should.be.equal 'hello world'
      existsAssign('hello world', null, undefined).should.be.equal 'hello world'
      existsAssign('hello world', 'foo', 'bar').should.be.equal 'foo'

      expected = hello: 'world', foo: 'bar', pokemon: 'digimon'
      existsAssign({hello: 'world'}, {foo: 'bar'}, {pokemon: 'digimon'}).should.be.eql expected

      expected = hello: 'bar', pokemon: 'digimon'
      existsAssign({hello: 'world'}, {hello: 'bar'}, {pokemon: 'digimon'}).should.be.eql expected

  describe 'non object', ->

    it 'resolve when not exists the value', ->
      existsAssign('hello world', null).should.eql 'hello world'
      existsAssign('foo', 'hello world').should.eql 'hello world'

  describe 'object', ->

    it 'added missing field', ->
      expected = hello: 'world', foo: 'bar'
      existsAssign({foo: 'bar'}, {hello: 'world'}).should.be.eql expected

    it  'dont overwrite a present field', ->
      expected = hello: 'world'
      existsAssign({hello: 'foo'}, {hello: 'world'}).should.be.eql expected

    it  'works with recursive object keys', ->
      defaults =
        one: 'one'
        two:
          three: 'three'
          five: 'five'

      objt =
        two: four: 'four'

      expected =
        one: 'one'
        two:
          three: 'three'
          four: 'four'
          five: 'five'

      existsAssign(defaults, objt).should.be.eql expected

      objt =
        two: 'two'

      expected =
        one: 'one'
        two: 'two'

      existsAssign(defaults, objt).should.be.eql expected
