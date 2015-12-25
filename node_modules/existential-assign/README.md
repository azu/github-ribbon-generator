# existential-assign

![Last version](https://img.shields.io/github/tag/Kikobeats/existential-assign.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/existential-assign/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/existential-assign)
[![Dependency status](http://img.shields.io/david/Kikobeats/existential-assign.svg?style=flat-square)](https://david-dm.org/Kikobeats/existential-assign)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/existential-assign.svg?style=flat-square)](https://david-dm.org/Kikobeats/existential-assign#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/existential-assign.svg?style=flat-square)](https://www.npmjs.org/package/existential-assign)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/kikobeats)

> Check for the existential value of a variable/object. Assign one if the value doesn't exist.

Very useful to setup a object with default values if the user preferences are empty. Works fine with deep objects:

```js
var defaults = {
  timeout: 3000,
  cb: function() {},
  user: {
    name: 'someone'
    url: 'github.com'
  }
}

var objt = {
  user: {
    name: 'Kiko Beats'
    url: 'github.com'
  }
}

existsAssign(defaults, objt)
// {
//   timeout: 3000,
//   cb: function() {},
//   user: {
//     name: 'Kiko Beats'
//     url: 'github.com'
//   }
// }
```

Notes that is *slightly* different than [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

## Install

```bash
npm install existential-assign
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install existential-assign --save
```

and later link in your HTML:

```html
<script src="bower_components/existential-assign/dist/existential-assign.js"></script>
```

## Usage

First load the library:

```js
var existsAssign = require('existential-assign');
```

Working with something that is not a `Object`:

```js
existsAssign('hello world', null); // => 'hello world'
existsAssign('world', 'hello'); // => 'hello'
```

Working with `Object`:

```js
existsAssign({hello: 'world'}, null) // => {hello: 'world'}
existsAssign({hello: 'Aloha'}, {hello: 'world'}) // => {hello: 'world'}
```

You can provide more than one *source*:

```js
existsAssign({hello: 'world'}, null, undefined) // => {hello: 'world'}
```

It's equivalent to:

```js
existsAssign(existsAssign({hello: 'world'}, null), undefined) // => {hello: 'world'}
```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
