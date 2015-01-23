/*
 * jQuery watchMe
 * A plugin to manipulate image sources depending on hovered image position
 *
 * @copyright  Copyright (c) 2015 jQuery watchMe (https://github.com/renekorss/jquery-watchme)
 * @license    http://opensource.org/licenses/MIT
 * @version    1.0.0, 2015-01-23
 * @author     Rene Korss <rene.korss@gmail.com>
 */

;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var watchMe = "watchMe",
        defaults = {
            // Image default state
            defaultState    : 'straight',

            // Speed of fade in ms
            fadeSpeed       : 200,

            // Timeout before fade in ms
            timeout         : 300,

            // Image elements
            imageSelector   : "img",

            // Do we want hover to be different image?
            hoverImg        : false,

            // Do we want to add direction classes to images?
            addClasses      : false,
    };

    // Plugin constructor
    function Plugin ( element, options ) {
        this.element    = element;

        this.settings   = $.extend( {}, defaults, options );

        if ('defaultState' in options) {
            this.settings.defaultState = options.defaultState;
        }
        else if ('defaultState' in this.element.data()) {
            this.settings.defaultState = this.element.data('defaultState');
        }

        this._defaults  = defaults;
        this._name      = watchMe;
        this.images     = $(this.element).find(this.settings.imageSelector);
        this.directions = [this.settings.defaultState, this.settings.defaultState+'hover', 'up', 'upright', 'right', 'downright', 'down', 'downleft', 'left', 'upleft'];
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function () {
            // This changes
            var self = this;

            // Init
            var fadeTimeout;

            // Preload images
            self._preloadImages();

            // Add class
            if(self.settings.addClasses){
                self.images.addClass('watchMe');
            }

            // On img hover
            self.images.hover(function(e){
                self.evt = e;
                self.hoverOffset = $(this).offset();
                self.hoverEl     = $(this);

                // Check if timeout is set, clear it
                if(fadeTimeout){
                    clearTimeout(fadeTimeout);
                }

                // Check if we are not working
                if(!self.working){
                    // Set timeout, so we wont call it too often
                    fadeTimeout = setTimeout(function(){
                        // Update images directions
                        self.updateDirections();
                    }, self.settings.timeout);
                }
            },
            function(e){
                // Check if timeout is set, clear it
                if(fadeTimeout){
                    clearTimeout(fadeTimeout);
                }

                // Check if we are not working
                if(!self.working){
                    // Set timeout, so we wont call it too often
                    fadeTimeout = setTimeout(function(){
                        // Reset images
                        self.reset();
                    }, self.settings.timeout);
                }
            });
        },
        // Function to update directions
        updateDirections: function()
        {
            // This changes
            var self = this;

            // Init variables
            var offset;

            self.images.each(function(e){
                // Get element offset
                offset = $(this).offset();

                // Detect if is in same column, row
                sameColumn    = (self.hoverOffset.left == offset.left);
                sameRow       = (self.hoverOffset.top == offset.top);
                direction     = '';

                // Get our new direction
                if(sameRow){
                    direction+= '';
                }
                else if(self.evt.pageY >= offset.top){
                    direction+= 'down';
                }
                else{
                    direction+= 'up';
                }

                if(sameColumn){
                    direction+= '';
                }
                else if(self.evt.pageX >= offset.left){
                    direction+= 'right';
                }
                else{
                    direction+= 'left';
                }

                // Detect if is this element
                if(self.settings.hoverImg && $(this).is(self.hoverEl)){
                    direction+= self.settings.defaultState+'hover';
                }
                // If is this element, but hover effect not wanted
                else if($(this).is(self.hoverEl)){
                    direction = self.settings.defaultState;
                }

                // Set image direction
                self.setDirection($(this), direction);
            });
        },
        // Function to update image direction
        setDirection: function(imageElement, direction){
            // This changes
            var self = this;

            // Init variables
            var ext, newSrc;

            // Set that we are working
            self.working = true;

            // New img src url
            newSrc = imageElement.data('watchme-direction-'+direction);

            if(typeof newSrc !== 'undefined'){
                imageElement.stop().fadeOut(self.settings.fadeSpeed, function(){
                    // If direction has changed
                    if(imageElement.data("direction") !== direction)
                    {
                        // Change classes
                        if(self.settings.addClasses)
                            imageElement.removeClass(function (index, css) {return (css.match (/(^|\s)watchMe-direction-\S+/g) || []).join(' ');}).addClass('watchMe-direction-'+direction)

                        // Change image src and wait img to load
                        imageElement.data("direction", direction).attr("src", newSrc).load(function(){
                            // Fade in
                            $(this).fadeIn(self.settings.fadeSpeed, function(){
                                self.working = false;
                            });
                        });
                    }
                    else
                    {
                        // Fade same img back in
                        imageElement.fadeIn(self.settings.fadeSpeed, function(){
                            self.working = false;
                        });
                    }
                 });
            }
            else{
                console.log('Couldn\'t find watchMe image src for direction: watchme-direction-'+direction);
            }
        },
        // Reset images
        reset: function () {
            // This changes
            var self = this;

            self.images.each(function(){
                self.setDirection($(this), self.settings.defaultState);
            });
        },
        // Preload images with CSS
        _preloadImages: function(){
            // This changes
            var self = this;
            var images = new Array();

            self.images.each(function(){
                img = $(this);
                $.each(self.directions, function(key, value){
                    url = img.data('watchme-direction-'+value);
                    if(typeof url !== 'undefined'){
                        $('<img/>')[0].src = url;
                    }
                });
            });
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ watchMe ] = function ( options ) {
        this.each(function() {
            if ( !$.data( this, "plugin_" + watchMe ) ) {
                $.data( this, "plugin_" + watchMe, new Plugin( this, options ) );
            }
        });

        // chain jQuery functions
        return this;
    };

})( jQuery, window, document );
