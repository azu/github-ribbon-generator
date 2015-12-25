# gh-pages-deploy-sh [![Build Status](https://travis-ci.org/azu/gh-pages-deploy-sh.svg?branch=master)](https://travis-ci.org/azu/gh-pages-deploy-sh)

This shell script wrapper for deploy to gh-pages.

Alt. [azu/gh-pages-deploy-cmd](https://github.com/azu/gh-pages-deploy-cmd "azu/gh-pages-deploy-cmd")

## Installation

    npm install -D gh-pages-deploy-sh

## Usage

> $ gh-pages-deploy-sh directory

### 1. Add "gh-pages-deploy-sh" to npm run-script.

```
  "scripts": {
    "deploy": "gh-pages-deploy-sh dist/"
  },
```

### 2. Add `GH_TOKEN` to `.travis.yml`

See [travis-ci/travis.rb](https://github.com/travis-ci/travis.rb "travis-ci/travis.rb")

```sh
gem install travis
travis encrypt GH_TOKEN=<your github personal token> --add
```

### 3. git push

Automatically deploy to `gh-pages` :tada:

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MITg
