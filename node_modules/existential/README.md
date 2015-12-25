# Existential

![Last version](https://img.shields.io/github/tag/Kikobeats/existential.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/existential/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/existential)
[![Dependency status](http://img.shields.io/david/Kikobeats/existential.svg?style=flat-square)](https://david-dm.org/Kikobeats/existential)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/existential.svg?style=flat-square)](https://david-dm.org/Kikobeats/existential#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/existential.svg?style=flat-square)](https://www.npmjs.org/package/acho)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/kikobeats)

> The missing existential operator for JavaScript. Returns true unless a variable is `null` or `undefined`.

## Install

```bash
npm install existential
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install existential --save
```

and later link in your HTML:

```html
<script src="bower_components/existential/dist/existential.js"></script>
```

## Usage

```js
var exists = require('existential');

console.log(exists(null));
// => false

console.log(exists('hello world'));
// => true
```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
