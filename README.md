[![npm version](https://badge.fury.io/js/jquery-watchme.svg)](https://badge.fury.io/js/jquery-watchme)
[![npm](https://img.shields.io/npm/dt/jquery-watchme.svg)](https://www.npmjs.com/package/jquery-watchme)
[![Known Vulnerabilities](https://snyk.io/test/github/renekorss/jquery-watchme/badge.svg?targetFile=package.json)](https://snyk.io/test/github/renekorss/jquery-watchme?targetFile=package.json)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# jQuery watchMe

> A jQuery plugin to manipulate image sources depending on hovered image position

## Install

`npm install jquery-watchme`

## Demo

See demo on [jsFiddle](http://jsfiddle.net/ReneKorss/2b2y3yez/).

## Options

```JavaScript
// Image default state
defaultState: 'straight',

// Speed of fade in ms
fadeSpeed: 200,

// Timeout before fade in ms
timeout: 300,

// Image elements
imageSelector: "img",

// Do we want hover to be different image?
hoverImg: false,

// Do we want to add direction classes to images?
addClasses: false,
```

## Usage

```JavaScript
// Add watchMe to div where your images are
$('#watchMe').watchMe();
```

```HTML
// Add data attributes to every image
<img src="https://placehold.it/150x150&text=look straight" width="150" height="150"
  data-watchme-direction-straight="https://placehold.it/150x150&text=look straight"
  data-watchme-direction-straighthover="https://placehold.it/150x150&text=look straight hover"
  data-watchme-direction-up="https://placehold.it/150x150&text=look up"
  data-watchme-direction-upright="https://placehold.it/150x150&text=look upright"
  data-watchme-direction-right="https://placehold.it/150x150&text=look right"
  data-watchme-direction-downright="https://placehold.it/150x150&text=look downright"
  data-watchme-direction-down="https://placehold.it/150x150&text=look down"
  data-watchme-direction-downleft="https://placehold.it/150x150&text=look downleft"
  data-watchme-direction-left="https://placehold.it/150x150&text=look left"
  data-watchme-direction-upleft="https://placehold.it/150x150&text=look upleft"
/>
```

## Directions (10)

* Straight `data-watchme-direction-[defaultState]`
* Straight hover `data-watchme-direction-[defaultState]hover` (Requires option `hoverImg` to be true)
* Up `data-watchme-direction-up`
* Down `data-watchme-direction-down`
* Left `data-watchme-direction-left`
* Right `data-watchme-direction-right`
* Down left `data-watchme-direction-downleft`
* Down right `data-watchme-direction-downright`
* Up left `data-watchme-direction-upleft`
* Up right `data-watchme-direction-upright`

## License

Licensed under [MIT](LICENSE)
