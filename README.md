
<!-- TITLE/ -->

# Hasfield action for [ChainyJS](http://chainyjs.org)

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/chainy-plugins/chainy-plugin-hasfield.png?branch=master)](http://travis-ci.org/chainy-plugins/chainy-plugin-hasfield "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/chainy-plugin-hasfield.png)](https://npmjs.org/package/chainy-plugin-hasfield "View this project on NPM")
[![Dependency Status](https://david-dm.org/chainy-plugins/hasfield.png?theme=shields.io)](https://david-dm.org/chainy-plugins/hasfield)
[![Development Dependency Status](https://david-dm.org/chainy-plugins/hasfield/dev-status.png?theme=shields.io)](https://david-dm.org/chainy-plugins/hasfield#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- CHAINY_DOCUMENTATION/ -->

<!-- DESCRIPTION/ -->

Chainy action that filters out items in the chains data that do not have the specified field

<!-- /DESCRIPTION -->


``` javascript
require('chainy').create().require('set hasfield log')
	.set([{id:1, name:1}, {name:2}])
	.hasField('id')
	.log()  // [{id:1, name:1}]
```

<!-- /CHAINY_DOCUMENTATION -->


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('chainy-plugin-hasfield')`
- Install: `npm install --save chainy-plugin-hasfield`

### [Browserify](http://browserify.org/)
- Use: `require('chainy-plugin-hasfield')`
- Install: `npm install --save chainy-plugin-hasfield`
- CDN URL: `//wzrd.in/bundle/chainy-plugin-hasfield@1.0.1`

### [Ender](http://ender.jit.su/)
- Use: `require('chainy-plugin-hasfield')`
- Install: `ender add chainy-plugin-hasfield`

<!-- /INSTALL -->


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/chainy-plugins/chainy-plugin-hasfield/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/chainy-plugins/chainy-plugin-hasfield/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/bevry.png)](https://www.gittip.com/bevry/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](http://img.shields.io/bitcoin/donate.png?color=yellow)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](http://img.shields.io/wishlist/browse.png?color=yellow)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/chainy-plugins/hasfield/commits?author=balupton)

[Become a contributor!](https://github.com/chainy-plugins/chainy-plugin-hasfield/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2014+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

<!-- /LICENSE -->


