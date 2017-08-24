# angular-tooltips

Tooltips for any element using any html in AngularJS with no requirements.

**Why another tooltip library?**

There are other libraries out there like https://github.com/720kb/angular-tooltips or https://angular-ui.github.io/bootstrap/#/tooltip
but they either have requirements on other libraries or are overly convoluted in their approach (which can break other things).

This is a very small (8 kB) library that keeps things simple. It also cleans up after itself and doesn't leave rouge elements all over the window.

## Installation

Install through bower

```
bower install tooltips-angular
```

Include the library files

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

The direction of the tooltip can be specified using ```title-direction``` with the options: top, top-right, right-top, right, right-bottom, bottom-right, bottom, bottom-left, left-bottom, left, left-top, top-left

```html
<i class="fa fa-star" title="This is a star!" title-direction="right"></i>
```

The direction of the tooltip will automatically swap if the tooltip will sit outside of the window bounds.
To stop this happening and force the direction set the ```fixed-position``` option

```html
<i class="fa fa-star" title="This is a star!" title-direction="right" fixed-position="true"></i>
```

## Demo

http://intellipharm.github.io/angular-tooltips/

## Requrements

**None!!**
