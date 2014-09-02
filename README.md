jQuery watchMe
==============

A jQuery plugin to manipulate image sources depending on hovered image position

Options
==============

// Image default state
defaultState	: 'straight',

// Speed of fade in ms
fadeSpeed		: 200,

// Timeout before fade in ms
timeout 		: 300,

// Image elements
imageSelector	: "img",

// Do we want hover to be different image?
hoverImg		: false,

// Do we want to add direction classes to images?
addClasses 		: false,

Usage
==============

	// Add watchMe to div where your images are
	$('#watchMe').watchMe();

	// Add data attributes to every image
	<img src="http://placehold.it/150x150&text=look straight" width="150" height="150"
        data-watchme-direction-straight="http://placehold.it/150x150&text=look straight"
        data-watchme-direction-straighthover="http://placehold.it/150x150&text=look straight hover"
        data-watchme-direction-up="http://placehold.it/150x150&text=look up"
        data-watchme-direction-upright="http://placehold.it/150x150&text=look upright"
        data-watchme-direction-right="http://placehold.it/150x150&text=look right"
        data-watchme-direction-downright="http://placehold.it/150x150&text=look downright"
        data-watchme-direction-down="http://placehold.it/150x150&text=look down"
        data-watchme-direction-downleft="http://placehold.it/150x150&text=look downleft"
        data-watchme-direction-left="http://placehold.it/150x150&text=look left"
        data-watchme-direction-upleft="http://placehold.it/150x150&text=look upleft"
    />

Directions (10)
==============

*   Straight (data-watchme-direction-[defaultState])
*   Straight hover (data-watchme-direction-[defaultState]hover) (Requires option "hoverImg" to be true)
*   Up (data-watchme-direction-up)
* 	Down (data-watchme-direction-down)
*	Left (data-watchme-direction-left)
*	Right (data-watchme-direction-right)
* 	Down left (data-watchme-direction-downleft)
*	Down right (data-watchme-direction-downright)
* 	Up left (data-watchme-direction-upleft)
*	Up right (data-watchme-direction-upright)

Demo
==============

See demo on [jsFiddle](http://jsfiddle.net/ReneKorss/2b2y3yez/).