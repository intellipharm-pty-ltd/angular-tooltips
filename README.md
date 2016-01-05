# angular-tooltips

Tooltips for any element using any html in AngularJS with no requirements.

**Why another tooltip library?**

There are other libraries out there like https://github.com/720kb/angular-tooltips or https://angular-ui.github.io/bootstrap/#/tooltip
but they either have requirements on other libraries or are overly convoluted in their approach (which can break other things).

This is a very small (1.5 kB) library that keeps things simple. It also cleans up after itself and doesn't leave rouge elements all over the window.

## Installation

Include the library files

```
bower install tooltips-angular
```

```html
<link rel="stylesheet" href="bower_components/dist/angular-tooltips.css" />
<script src="bower_components/dist/angular-tooltips.js"></script>
```

Add the angular model ```tooltips```

```js
angular.module('app', ['tooltips'])
```

## Usage

Just add a normal title attribute and it will be overridden.

```html
<i class="fa fa-star" title="This is a star!"></i>
```

## Demo

http://intellipharm.github.io/angular-tooltips/

## Requrements

**None!!**
