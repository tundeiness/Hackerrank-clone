/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-adownload-cookies-cors-cssscrollbar-imgcrossorigin-localstorage-webp !*/
!function(e,n,t){function o(e,n){return typeof e===n}function i(){var e,n,t,i,a,s,r;for(var A in d)if(d.hasOwnProperty(A)){if(e=[],n=d[A],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)s=e[a],r=s.split("."),1===r.length?Modernizr[r[0]]=i:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=i),f.push((i?"":"no-")+r.join("-"))}}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):g?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(e){var n=h.className,t=Modernizr._config.classPrefix||"";if(g&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),g?h.className.baseVal=n:h.className=n)}function r(e,n){if("object"==typeof e)for(var t in e)p(e,t)&&r(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),i=Modernizr[o[0]];if(2==o.length&&(i=i[o[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),s([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function A(){var e=n.body;return e||(e=a(g?"svg":"body"),e.fake=!0),e}function l(e,t,o,i){var s,r,l,d,c="modernizr",f=a("div"),u=A();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=i?i[o]:c+(o+1),f.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+c,(u.fake?u:f).appendChild(s),u.appendChild(f),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),f.id=c,u.fake&&(u.style.background="",u.style.overflow="hidden",d=h.style.overflow,h.style.overflow="hidden",h.appendChild(u)),r=t(f,e),u.fake?(u.parentNode.removeChild(u),h.style.overflow=d,h.offsetHeight):f.parentNode.removeChild(f),!!r}var d=[],c={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{n.cookie="cookietest=1";var e=-1!=n.cookie.indexOf("cookietest=");return n.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}}),Modernizr.addTest("cors","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest);var f=[];Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(n){return!1}});var u=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];c._prefixes=u;var p;!function(){var e={}.hasOwnProperty;p=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}();var h=n.documentElement,g="svg"===h.nodeName.toLowerCase();Modernizr.addTest("adownload",!e.externalHost&&"download"in a("a")),Modernizr.addTest("imgcrossorigin","crossOrigin"in a("img")),c._l={},c.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},c._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){c.addTest=r}),Modernizr.addAsyncTest(function(){function e(e,n,t){function o(n){var o=n&&"load"===n.type?1==i.width:!1,a="webp"===e;r(e,a&&o?new Boolean(o):o),t&&t(n)}var i=new Image;i.onerror=o,i.onload=o,i.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})});var m=c.testStyles=l;m("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+u.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}),i(),delete c.addTest,delete c.addAsyncTest;for(var w=0;w<Modernizr._q.length;w++)Modernizr._q[w]();e.Modernizr=Modernizr}(window,document);

/** 
 * orderAlphabeticallyByText
 * 
 * @see     http://stackoverflow.com/a/1134983/115025
 * @access  public
 * @return  void
 */
HTMLUListElement.prototype.orderAlphabeticallyByText = function() {
    var $list = $(this),
        $listItems = $list.children('li').get();
    $listItems.sort(function(a, b) {
        return $(a).text().trim().toUpperCase().localeCompare(
            $(b).text().trim().toUpperCase()
        );
    })
    jQuery.each($listItems, function(index, element) {
        $list.append(element);
    });
};

/**
 * centsToDollars
 * 
 * Converts a number of cents to a string, formatted as USD currency.
 * 
 * @access  public
 * @param   undefined|Boolean clean Whether or not the result should be "cleaned"
 *          of any trailing zeros. eg. $10.00 becomes $10
 * @return  String
 */
String.prototype.centsToDollars = Number.prototype.centsToDollars = function(clean) {
    var dollars = (this.toInt() / 100).toString();
    if (dollars.indexOf('.') === -1) {
        dollars += '.00';
    } else if (dollars.match(/\.[0-9]{1}$/) !== null) {
        dollars += '0';
    }
    if (clean === true) {
        return dollars.replace(/\.00$/, '');
    }
    return dollars;
};

/**
 * commas
 * 
 * Formats a number so that it has commas at the appropriate places (eg. 1,000,
 * 10,000, 1,000,000).
 * 
 * @access  public
 * @return  String
 */
String.prototype.commas = Number.prototype.commas = function() {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * (closure)
 * 
 * Sets up conversion extensions for strings.
 */
(function() {

    /**
     * link
     * 
     * Converts a string to a link, accepting possible options for it.
     * 
     * @access  private
     * @param   String str
     * @param   Object options
     * @return  String
     */
    var link = function(str, options) {
        var $element = $('<a>', {
            text: str,
            target: options.target || '_blank',
            href: options.href || '#',
            class: options.classes && options.classes.join(' ')
        });
        return $element.outer();
    };

    /**
     * String.prototype.convert
     * 
     * @access  public
     * @param   String type
     * @param   Object options
     * @return  String
     */
    String.prototype.convert = function(type, options) {
        switch (type) {
            case 'link':
                return link(this, options);
        }
    };
})();

/**
 * (closure)
 * 
 * Sets up encoding extensions for strings.
 */
(function() {

    /**
     * hashtag
     * 
     * Converts any hashtags to links, with the appropriate href and classes and
     * the tag as the anchor text.
     * 
     * @access  private
     * @param   String str
     * @param   Object options
     * @return  String
     */
    var hashtag = function(str, options) {
        return str.replace(/[#]+[A-Za-z0-9-_]+/g, function(tag) {
            var href = options.href.replace('$hashtag', tag.replace('#', ''));
            return tag.convert('link', {
                href: href,
                classes: ['hashtag']
            });
        });
    };

    /**
     * newlines
     * 
     * Replaces any newlines with <br /> tags.
     * 
     * @access  private
     * @param   String str
     * @return  String
     */
    var newlines = function(str) {
        return str.replace(/\n/g, function(tag) {
            return '<br>';
        });
    };

    /**
     * url
     * 
     * Converts and URL strings to links, with the URL as the anchor text.
     * 
     * @access  private
     * @param   String str
     * @return  String
     */
    var url = function(str) {
        return str.replace(
            /[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g,
            function(url) {
                return url.convert('link', {
                    href: url,
                    classes: ['url']
                });
            }
        );
    };

    /**
     * username
     * 
     * Converts any @ usernames to links, with the appropriate href and classes
     * and the username as the anchor text.
     * 
     * @access  private
     * @param   String str
     * @param   Object options
     * @return  String
     */
    var username = function(str, options) {
        return str.replace(/[@]+[A-Za-z0-9-_]+/g, function(username) {
            var href = options.href.replace(
                '$username',
                username.replace('@', '')
            );
            return username.convert('link', {
                href: href,
                classes: ['username']
            });
        });
    };

    /**
     * String.prototype.encode
     * 
     * @access  public
     * @param   String type
     * @param   Object options
     * @return  String
     */
    String.prototype.encode = function(type, options) {
        switch (type) {
            case 'url':
                return url(this);
            case 'username':
                return username(this, options);
            case 'hashtag':
                return hashtag(this, options);
            case 'newlines':
                return newlines(this);
        }
    };
})();

/**
 * plural
 * 
 * @access  public
 * @return  String
 */
String.prototype.plural = function() {
    var last = this.slice(-1).toLowerCase();
    if (last === 'y') {
        return this.replace(/y$/, 'ies');
    }
    return (this) + 's';
};

/**
 * singular
 * 
 * @access  public
 * @return  String
 */
String.prototype.singular = function() {
    var tail = this.slice(-3).toLowerCase();
    if (tail === 'ies') {
        return this.replace(/ies$/, 'y');
    }
    return this.replace(/s$/, '');
};

/**
 * toFloat
 * 
 * @access  public
 * @return  Number
 */
String.prototype.toFloat = Number.prototype.toFloat = function() {
    var modified = parseFloat(this);
    return modified;
};

/**
 * trimToLength
 * 
 * @see     http://stackoverflow.com/questions/4637942/how-can-i-truncate-a-string-in-jquery
 * @access  public
 * @return  Number
 */
String.prototype.trimToLength = function(m) {
  return (this.length > m) 
    ? jQuery.trim(this).substring(0, m).split(' ').slice(0, -1).join(' ') + '...'
    : this;
};

/**
 * toInt
 * 
 * @access  public
 * @return  Number
 */
String.prototype.toInt = Number.prototype.toInt = function() {
    var modified = parseInt(this, 10);
    return modified;
};

/**
 * round
 * 
 * Rounds a String/Number to 4 decimal points if no precision parameter is
 * passed in. Here are some samples of calling this:
 * - 10.123456.round(0) = 10
 * - 10.123456.round(1) = 10.1
 * - 10.123456.round(2) = 10.12
 * - 10.123456.round(3) = 10.123
 * - 10.123456.round(4) = 10.1235
 * - 10.123456.round(5) = 10.12346
 * 
 * @access  public
 * @param   Number precision
 * @return  Number
 */
String.prototype.round = Number.prototype.round = function(precision) {
    var power = Math.pow(10, precision),
        rounded = Math.round(this.toFloat() * power) / power;
    return rounded;
};

/**
 * roundToLower
 * 
 * @access  public
 * @param   Number interval
 * @return  Number
 */
Number.prototype.roundToLower = function(interval) {
    var rounded = Math.floor(this.toInt() / interval) * interval;
    return rounded;
};

/**
 * ceil
 * 
 * Rounds a Float/Number/String to the cloest decimal.
 * 
 * @access  public
 * @return  Number
 */
String.prototype.ceil = Number.prototype.ceil = function() {
    var rounded = Math.ceil(this.toFloat());
    return rounded;
};

/**
 * ucfirst
 * 
 * Uppercase's the first letter of the string.
 * 
 * @access  public
 * @return  String
 */
String.prototype.ucfirst = function() {
    var modified = this.charAt(0).toUpperCase() + this.slice(1);
    return modified;
};

/**
 * fabric.Canvas.prototype.getDiagonalLength
 * 
 * @access  public
 * @return  void
 */
fabric.Canvas.prototype.getDiagonalLength = function() {
    var diagonalLength = Math.ceil(
        Math.sqrt(
            Math.pow(this.getWidth(), 2) +
            Math.pow(this.getHeight(), 2)
        )
    );
    return diagonalLength;
};


/**
 * fabric.Canvas.prototype.resizeTo
 * 
 * @access  public
 * @param   Number width
 * @param   Number height
 * @return  void
 */
fabric.Canvas.prototype.resizeTo = function(width, height) {
    this.setDimensions({
        width: width.toInt(),
        height: height.toInt()
    });
    this.trigger('resized');
};


/**
 * fabric.Image.prototype.makeSlidable
 * 
 * @note    Need to take scale factors into consideration because when a Pixabay
 *          image is applied to the canvas, it is initially scaled up/down to
 *          match the canvas before it's associated-asset is ready (which will
 *          then provide a remote image src that is requested to exactly fit).
 * @see     https://groups.google.com/forum/#!topic/fabricjs/D2O0RAw1kDw
 * @access  public
 * @return  void
 */
fabric.Image.prototype.makeSlidable = function() {
    this.on('moving', function() {

        /** 
         * The ratios of the canvas and image are used to determine if the image
         * can be slide vertically or horizontally. It's a way around using the 
         * Frame reference here, since the canvas will be the same ratio.
         */
        var canvas = {
                width: this.canvas.width,
                height: this.canvas.height
            },
            image = {
                width: this.width * this.scaleX,
                height: this.height * this.scaleY
            },
            bound;
        canvas.ratio = canvas.width / canvas.height;
        image.ratio = image.width / image.height;

        /**
         * Too small to warrant any dragging
         * 
         * I discovered a bug when the the image that was set as the background
         * image had a ratio that was very close to that of the selected frame.
         * When that happened, it was possible to move the background image a
         * little, but when downloaded (or shared), there would be whitespace
         * on one of the sides (top, right, bottom or left). This was because
         * there would be enough "space" to slide that background image in the
         * preview, resulting in either the top or left values being updated.
         * But the values they were updated to were quite minor. The result is
         * that when a Ghost canvas retrieved the background image url from
         * Cloudinary, the resulting image did not have the fidelity to ensure
         * the same output, simply because Cloudinary does not support
         * decimal-based pixel outputs (nor can it). So although the Ghost
         * canvas was doing everything properly, the whitebars could show up
         * because the background image it was using was not specific-enough
         * from a pixel-perspective.
         * 
         * So, in cases where the ratio between the image and the canvas differs
         * by at most 2 percent, I simply lock the image down.
         */
        var comparison = image.ratio / canvas.ratio;
        if (comparison > 0.9800 && comparison < 1.0200) {
        // if (comparison > 0.99 && comparison < 1.01) {
        // if (comparison > 0.995 && comparison < 1.005) {
            this.set('left', canvas.width / 2);
            this.set('top', canvas.height / 2);
        } else {

            /**
             * Moving up/down
             * 
             * If the width of the image is the same as the canvas, then the image
             * can be moved up and down. This means that parts of the image below
             * and above the canvas viewport are hiding, and can be brought into
             * view by dragging.
             */
            if (image.ratio < canvas.ratio) {
                this.set('left', canvas.width / 2);
                bound = (canvas.height / 2) - (image.height - canvas.height) / 2;
                if (this.top < bound) {
                    this.set('top', bound);
                } else {
                    bound = (canvas.height / 2) + (image.height - canvas.height) / 2;
                    if (this.top > bound) {
                        this.set('top', bound);
                    }
                }
            }
            /**
             * Moving left/right
             * 
             * Otherwise, the width of the image is not the same as that canvas,
             * which means that the height of the image is set as the height of the
             * canvas. In that case, the image can be moved horizontally (left and
             * right), so that parts of the image to the left and right of the
             * canvas can be brought into the canvas' viewport.
             */
            else {
                this.set('top', canvas.height / 2);
                bound = (canvas.width / 2) - (image.width - canvas.width) / 2;
                if (this.left < bound) {
                    this.set('left', bound);
                } else {
                    bound = (canvas.width / 2) + (image.width - canvas.width) / 2;
                    if (this.left > bound) {
                        this.set('left', bound);
                    }
                }
            }
        }

        /**
         * Event should always be called, since it's likely the user will always
         * hit either a vertical or horizontal bound (since it's hard to move
         * your mouse perfectly straight in one direction).
         */
        this.trigger('snap/position');
    });

    // Proxy for moving event
    this.on('lock', function() {
        this.trigger('moving');
    });
};


/**
 * fabric.Object.prototype.boxIn
 * 
 * Boxes an object into the canvas (to prevent it from being dragged outside of
 * it), limited to the threshold. Threshold is a ratio of the width or height.
 * So for example, a threshold value of 0.5 would allow half the image to be
 * dragged outside the canvas.
 * 
 * @access  public
 * @param   Number threshold
 * @return  void
 */
fabric.Object.prototype.boxIn = function(threshold) {

    /**
     * limit
     * 
     * @this   fabric.Object
     * @access  private
     * @return  void
     */
    var limit = function() {

        // Offsets
        var width = this.canvas.getWidth(),
            height = this.canvas.getHeight();

        // Horizontal
        var check = this.getWidth() * threshold - this.getWidth() / 2;
        if (this.left < check) {
            this.set('left', check);
            this.trigger('boxedIn');
        } else {
            check = width - (this.getWidth() * threshold - this.getWidth() / 2);
            if (this.left >= check) {
                this.set('left', check);
                this.trigger('boxedIn');
            }
        }

        // Vertical
        check = this.getHeight() * threshold - this.getHeight() / 2;
        if (this.top < check) {
            this.set('top', check);
            this.trigger('boxedIn');
        } else {
            check = height - (this.getHeight() * threshold - this.getHeight() / 2);
            if (this.top >= check) {
                this.set('top', check);
                this.trigger('boxedIn');
            }
        }
    };

    // Events and unbinding
    this.on('moving', limit);
    this.on('removed', function() {
        this.off('moving', limit);
    });

    // Proxy for moving event
    // var proxy = function() {
    //     this.trigger('moving');
    // };
    // this.on('lock', proxy);
    // this.on('removed', function() {
    //     this.off('lock', proxy);
    // });
};


/**
 * fabric.Object.prototype.getDrawing
 * 
 * @access  public
 * @return  Drawing|false
 */
fabric.Object.prototype.getDrawing = function() {
    var drawings = this.canvas.magnets.drawings,
        index;
    for (index in drawings) {
        if (drawings[index].getCotton() === this) {
            return drawings[index];
        }
    }
    return false;
};


/**
 * fabric.Object.prototype.getRatio
 * 
 * @access  public
 * @return  Number
 */
fabric.Object.prototype.getRatio = function() {
    return this.get('width') / this.get('height');
};


/**
 * fabric.Object.prototype.getRelativeHeight
 * 
 * @access  public
 * @return  Number
 */
fabric.Object.prototype.getRelativeHeight = function() {
    return this.getHeight() / this.canvas.getHeight();
};


/**
 * fabric.Object.prototype.getRelativeLeft
 * 
 * @access  public
 * @return  Number
 */
fabric.Object.prototype.getRelativeLeft = function() {
    return this.getLeft() / this.canvas.getWidth();
};


/**
 * fabric.Object.prototype.getRelativeTop
 * 
 * @access  public
 * @return  Number
 */
fabric.Object.prototype.getRelativeTop = function() {
    return this.getTop() / this.canvas.getHeight();
};


/**
 * fabric.Object.prototype.getRelativeWidth
 * 
 * @access  public
 * @return  Number
 */
fabric.Object.prototype.getRelativeWidth = function() {
    return this.getWidth() / this.canvas.getWidth();
};


/**
 * fabric.PathGroup.prototype.setFillColor
 * 
 * Helper method for PathGroup's to ensure that transparent paths don't have
 * their color set as the fillColor. Otherwise, you get things like this:
 * https://i.imgur.com/qSDmyAI.png
 * 
 * Versus this:
 * https://i.imgur.com/6ms5Lhm.png
 * 
 * @note    fill and stroke checks below are meant to accommodate cases where a
 *          vector is using stroke instead of fill to define the color. eg:
 *          https://i.imgur.com/HFiYMC4.png
 * @see     http://stackoverflow.com/questions/15675856/fabric-js-change-color-fill-stroke-of-imported-svg
 * @todo    Circle icon doesn't have opacity applied properly:
 *          https://i.imgur.com/8PxWyUk.png
 * @note    The string check against the prop argument is to prevent bugs like
 *          this: https://i.imgur.com/wlz4kbA.jpg
 *          This seems to happen with some vector types which have a path.fill
 *          or path.stroke value which isn't a string, but rather another vector
 *          shape. So in those cases, we want to fallback to assume it's *not*
 *          white, which will produce something like this:
 *          https://i.imgur.com/3AaiTmC.png
 *          Obviously this is ideal, but the bug seems to only be coming up with
 *          vectors that are being misidentified as black and white, when
 *          they're actually colored.
 * @access  public
 * @param   String fillColor
 * @return  void
 */
fabric.PathGroup.prototype.setFillColor = function(fillColor) {
    var white = function(prop) {
        if (typeof prop !== 'string') {
            return false;
        }
        prop = prop.toLowerCase();
        prop = prop.trim();
        prop = prop.replace(/ /g, '');
        prop = prop.replace('#', '');
        prop = prop.replace('rgb(', '');
        prop = prop.replace('rgba(', '');
        prop = prop.replace(')', '');
        return prop === 'fff' || prop === 'ffffff' || prop === '255,255,255';
    };
    for (var i = 0, l = this.paths.length, path; i < l; i++) {
        path = this.paths[i];
        if (white(path.fill) === false && path.fill !== '') {
            path.setFill(fillColor);
        }
        if (
            path.stroke !== null
            && white(path.stroke) === false
            && path.stroke !== ''
        ) {
            path.setStroke(fillColor);
        }
    }
};

/**
 * fabric.Text.prototype.addBackdrop
 * 
 * @access  public
 * @param   String color
 * @param   String stretch
 * @return  void
 */
fabric.Text.prototype.addBackdrop = function(color, stretch) {

    // Create
    var backdrop = this.get('backdrop');
    if (backdrop === undefined) {

        // Create drawing
        backdrop = new fabric.Rect({
            originX: 'center',
            originY: 'center',
            selectable: false,
            hasControls: false,
            hasBorders: false
        });
        this.set('backdrop', backdrop);
        this.canvas.add(backdrop);

        // Position events
        this.on({
            'changed': this.positionBackdrop,
            'moving': this.positionBackdrop,
            'rotating': this.positionBackdrop,
            'scaling': this.positionBackdrop
        });
        if (this.getDrawing() !== false) {
            this.getDrawing().getLayer().on({
                'refresh/dimensions': this.positionBackdrop.proxy(this)
            });
        }

        // Unbinding
        this.on('removed', function() {
            this.clearBackdrop();
        });
    }

    // Apply color and stretch
    backdrop.setColor(color);
    backdrop.set('stretch', stretch);
    this.positionBackdrop();
};


/**
 * fabric.Text.prototype.clearBackdrop
 * 
 * @note    I need to check that the drawing exists before removing the
 *          refresh/dimensions event, because if the drawing is deleted from the
 *          canvas, the below call would fail.
 * @access  public
 * @return  void
 */
fabric.Text.prototype.clearBackdrop = function() {
    var backdrop = this.get('backdrop');
    if (backdrop !== undefined) {
        this.set({
            padding: this.originalPadding
        });
        this.setCoords();
        this.off({
            'changed': this.positionBackdrop,
            'moving': this.positionBackdrop,
            'rotating': this.positionBackdrop,
            'scaling': this.positionBackdrop
        });
        if (this.getDrawing() !== false) {
            this.getDrawing().getLayer().unbind(
                'refresh/dimensions',
                this.positionBackdrop
            );
        }
        backdrop.remove();
        this.set('backdrop', undefined);
    }
};


/**
 * fabric.Text.prototype.positionBackdrop
 * 
 * @note    When using getBoundingRect height for the backdrop, problems like
 *          this turned up when the layer was angled:
 *          https://i.imgur.com/5rWgfyd.png
 *          This was introduced in this commit:
 *          https://github.com/onassar/Stencil/commit/bbb108b4453cd05cc23d38e082eb2eb815f3bf69
 * @access  public
 * @return  void
 */
fabric.Text.prototype.positionBackdrop = function() {
    var backdrop = this.get('backdrop'),
        options = {
            angle: this.getAngle()
        },
        originalPadding = this.originalPadding,
        backdropPaddingFactor = this.get('backdropPaddingFactor');
    if (backdrop.get('stretch') === 'full') {
        var additional = (this.getHeight() * backdropPaddingFactor);
        options.height = this.getHeight() + additional * 2;
        options.width = this.canvas.getDiagonalLength() * 2;
        this.set({
            padding: originalPadding + additional
        });
        this.setCoords();
    } else if (backdrop.get('stretch') === 'slim') {
        var additional = Math.max(
            this.getHeight() * backdropPaddingFactor,
            this.getWidth() * backdropPaddingFactor
        ).round(4);
        this.set({
            padding: originalPadding + additional
        });
        options.height = this.getHeight() + additional * 2;
        options.width = this.getWidth() + additional * 2;
        this.setCoords();
    }
    backdrop.set(options);
    backdrop.setPositionByOrigin(
        this.getCenterPoint(),
        'center',
        'center'
    );
    this.canvas.renderAll();
    this.trigger('resize/outline');
};

/**
 * fabric.Object.prototype.snapToDrawingsOnMove
 * 
 * @todo    Look into how important it is for the reference objects to be sorted
 *          in an order that results in the smartest snapping (for example, the
 *          RectangleDrawing object being last, since if there's something close
 *          to the middle of the canvas, the user likely wants to snap to that
 *          and not the middle of the rectangle).
 * @access  public
 * @return  void
 */
fabric.Object.prototype.snapToDrawingsOnMove = function() {

    /**
     * snap
     * 
     * @this   fabric.Object
     * @access  private
     * @return  void
     */
    var snap = function() {

        /**
         * 
         * 
         */
        this.setCoords();
        var center = this.getCenterPoint(),
            bounding = this.getBoundingRect(),
            index,
            ref = {},
            horizontalDrawingMatches = [],
            verticalDrawingMatches = [],
            drawings = this.canvas.magnets.drawings;

        /**
         * Vertical-alignment
         * 
         */
        for (index in drawings) {
            ref = {
                drawing: drawings[index],
                obj: drawings[index].getCotton(),
                threshold: drawings[index].magnets.thresholds.moving.pixels.horizontal,
                center: drawings[index].getCotton().getCenterPoint(),
                bounding: drawings[index].getCotton().getBoundingRect()
            };

            // Exclude any self-referencing drawings
            if (ref.obj === this) {
                continue;
            }

            // Ensure bounding box coordinates are in sync
            ref.obj.setCoords();

            /**
             * Center point vertical-alignment
             * 
             */

            // Object center point is in vertical-alignment with ref center point
            if (
                center.x > (ref.center.x - ref.threshold.centerToCenter)
                && center.x < (ref.center.x + ref.threshold.centerToCenter)
            ) {
                horizontalDrawingMatches.push({
                    centerMatch: true,
                    drawing: ref.drawing,
                    // matchDescription: '[v]center-to-center',
                    left: ref.center.x,
                    rule: ref.center.x
                });
            }

            // // Object center point is in vertical-alignment with ref left point
            // if (
            //     center.x > (ref.bounding.left - ref.threshold.centerToLeft)
            //     && center.x < (ref.bounding.left + ref.threshold.centerToLeft)
            // ) {
            //     left = ref.bounding.left;
            //     rule = ref.bounding.left;
            //     break;
            // }

            // // Object center point is in vertical-alignment with ref right point
            // if (
            //     center.x > (ref.bounding.left + ref.bounding.width - ref.threshold.centerToRight)
            //     && center.x < (ref.bounding.left + ref.bounding.width + ref.threshold.centerToRight)
            // ) {
            //     left = ref.bounding.left + ref.bounding.width;
            //     rule = ref.bounding.left + ref.bounding.width;
            //     break;
            // }

            /**
             * Left point vertical-alignment
             * 
             */

            // // Object left point is in vertical-alignment with ref center point
            if (
                bounding.left > (ref.center.x - ref.threshold.leftToCenter)
                && bounding.left < (ref.center.x + ref.threshold.leftToCenter)
            ) {
                if (ref.drawing.toString() === 'BackgroundRectangleDrawing') {
                    horizontalDrawingMatches.push({
                        // centerMatch: false,
                        centerMatch: true,
                        drawing: ref.drawing,
                        // matchDescription: '[v]left-to-center',
                        left: ref.center.x + bounding.width / 2,
                        rule: ref.drawing.toString() === 'BackgroundRectangleDrawing' ? ref.obj.getWidth() / 2 : ref.center.x
                    });
                }
            }

            // Object left point is in vertical-alignment with ref left point
            else if (
                bounding.left > (ref.bounding.left - ref.threshold.leftToLeft)
                && bounding.left < (ref.bounding.left + ref.threshold.leftToLeft)
            ) {
                horizontalDrawingMatches.push({
                    centerMatch: false,
                    drawing: ref.drawing,
                    // matchDescription: '[v]left-to-left',
                    left: ref.bounding.left + (bounding.width / 2),
                    rule: ref.drawing.toString() === 'BackgroundRectangleDrawing' ? 1 : ref.bounding.left
                });
            }

            // Object left point is in vertical-alignment with ref right point
            else if (
                bounding.left > ((ref.bounding.left + ref.bounding.width) - ref.threshold.leftToRight)
                && bounding.left < ((ref.bounding.left + ref.bounding.width) + ref.threshold.leftToRight)
            ) {
                horizontalDrawingMatches.push({
                    centerMatch: false,
                    drawing: ref.drawing,
                    // matchDescription: '[v]left-to-right',
                    left: ref.bounding.left + ref.bounding.width + (bounding.width / 2),
                    rule: ref.bounding.left + ref.bounding.width
                });
            }

            /**
             * Right point vertical-alignment
             * 
             */

            // // Object right point is in vertical-alignment with ref center point
            if (
                (bounding.left + bounding.width) > (ref.center.x - ref.threshold.rightToCenter)
                && (bounding.left + bounding.width) < (ref.center.x + ref.threshold.rightToCenter)
            ) {
                if (ref.drawing.toString() === 'BackgroundRectangleDrawing') {
                    horizontalDrawingMatches.push({
                        // centerMatch: false,
                        centerMatch: true,
                        drawing: ref.drawing,
                        // matchDescription: '[v]right-to-center',
                        left: ref.center.x - bounding.width / 2,
                        rule: ref.drawing.toString() === 'BackgroundRectangleDrawing' ? ref.obj.getWidth() / 2 : ref.center.x
                    });
                }
            }

            // Object right point is in vertical-alignment with ref left point
            else if (
                (bounding.left + bounding.width) > (ref.bounding.left - ref.threshold.rightToLeft)
                && (bounding.left + bounding.width) < (ref.bounding.left + ref.threshold.rightToLeft)
            ) {
                horizontalDrawingMatches.push({
                    centerMatch: false,
                    drawing: ref.drawing,
                    // matchDescription: '[v]right-to-left',
                    left: ref.bounding.left - (bounding.width / 2),
                    rule: ref.bounding.left
                });
            }

            // Object right point is in vertical-alignment with ref right point
            else if (
                (bounding.left + bounding.width) > ((ref.bounding.left + ref.bounding.width) - ref.threshold.rightToRight)
                && (bounding.left + bounding.width) < ((ref.bounding.left + ref.bounding.width) + ref.threshold.rightToRight)
            ) {
                horizontalDrawingMatches.push({
                    centerMatch: false,
                    drawing: ref.drawing,
                    // matchDescription: '[v]right-to-right',
                    left: ref.bounding.left + ref.bounding.width - (bounding.width / 2),
                    rule: ref.drawing.toString() === 'BackgroundRectangleDrawing' ? ref.obj.getWidth() : (ref.bounding.left + ref.bounding.width)
                });
            }
        }
        var fabricGuides = Canvases.Preview.getFabricGuides(),
            start,
            end;
        if (horizontalDrawingMatches.length > 0) {
            var snappedLeft = horizontalDrawingMatches[0].left;
            this.set('left', snappedLeft);
            this.trigger('snap/position');
            if (Account.highlightAllDrawingsOnSnap() === true) {
                jQuery.each(horizontalDrawingMatches, function(index, match) {

                    /**
                     * Without this check, we'd get "soft" highlighting. Namely,
                     * because a match is determined by checking position
                     * details within a certain threshold of pixels, we only
                     * want to actually highlight other drawings this drawing is
                     * directly snapped to. Here's what it looks like when this
                     * check is not made: https://screencast.com/t/1qgKN1ur
                     */
                    if (match.left === snappedLeft) {
                        match.drawing.highlight({
                            showHorizontalLineCenters: match.centerMatch === true,
                            showVerticalLineCenters: false
                        });
                    }
                });
            } else {
                horizontalDrawingMatches[0].drawing.highlight({
                    showHorizontalLineCenters: horizontalDrawingMatches[0].centerMatch === true,
                    showVerticalLineCenters: false
                });
            }

            // Position rule
            start = {
                x: Math.ceil(horizontalDrawingMatches[0].rule) - 1,
                y: 0
            };
            end = {
                x: Math.ceil(horizontalDrawingMatches[0].rule) - 1,
                y: this.canvas.getHeight()
            };
            fabricGuides.vertical[0].set({
                'x1': start.x,
                'y1': start.y,
                'x2': end.x,
                'y2': end.y
            });
            fabricGuides.vertical[0].backdrop.set({
                'x1': start.x,
                'y1': start.y,
                'x2': end.x,
                'y2': end.y
            });

            // Show fabric guides
            fabricGuides.vertical[0].set('visible', true);
            fabricGuides.vertical[0].backdrop.set('visible', true);
            fabricGuides.vertical[0].backdrop.bringToFront();
            fabricGuides.vertical[0].bringToFront();
        }

        /**
         * Horizontal-alignment
         * 
         */
        for (index in drawings) {
            ref = {
                drawing: drawings[index],
                obj: drawings[index].getCotton(),
                threshold: drawings[index].magnets.thresholds.moving.pixels.vertical,
                center: drawings[index].getCotton().getCenterPoint(),
                bounding: drawings[index].getCotton().getBoundingRect()
            };

            // Exclude any self-referencing drawings
            if (ref.obj === this) {
                continue;
            }

            /**
             * Center point horizontal-alignment
             * 
             */

            // Object center point is in horizontal-alignment with ref center point
            if (
                center.y > (ref.center.y - ref.threshold.centerToCenter)
                && center.y < (ref.center.y + ref.threshold.centerToCenter)
            ) {
                verticalDrawingMatches.push({
                    centerMatch: true,
                    drawing: ref.drawing,
                    // matchDescription: '[h]center-to-center',
                    top: ref.center.y,
                    rule: ref.center.y
                });
            }

            // // Object center point is in horizontal-alignment with ref top point
            // if (
            //     center.y > (ref.bounding.top - ref.threshold.centerToTop)
            //     && center.y < (ref.bounding.top + ref.threshold.centerToTop)
            // ) {
            //     top = ref.bounding.top;
            //     rule = ref.bounding.top;
            //     break;
            // }

            // // Object center point is in horizontal-alignment with ref bottom point
            // if (
            //     center.y > (ref.bounding.top + ref.bounding.height - ref.threshold.centerToBottom)
            //     && center.y < (ref.bounding.top + ref.bounding.height + ref.threshold.centerToBottom)
            // ) {
            //     top = ref.bounding.top + ref.bounding.height;
            //     rule = ref.bounding.top + ref.bounding.height;
            //     break;
            // }

            /**
             * Left point horizontal-alignment
             * 
             */

            // Object top point is in horizontal-alignment with ref center point
            if (
                bounding.top > (ref.center.y - ref.threshold.topToCenter)
                && bounding.top < (ref.center.y + ref.threshold.topToCenter)
            ) {
                if (ref.drawing.toString() === 'BackgroundRectangleDrawing') {
                    verticalDrawingMatches.push({
                        // centerMatch: false,
                        centerMatch: true,
                        drawing: ref.drawing,
                        // matchDescription: '[v]top-to-center',
                        top: ref.center.y + bounding.height / 2,
                        rule: ref.drawing.toString() === 'BackgroundRectangleDrawing' ? ref.obj.getHeight() / 2 : ref.center.y
                    });
                }
            }

            // Object top point is in horizontal-alignment with ref top point
            else if (
                bounding.top > (ref.bounding.top - ref.threshold.topToTop)
                && bounding.top < (ref.bounding.top + ref.threshold.topToTop)
            ) {
                verticalDrawingMatches.push({
                    centerMatch: false,
                    drawing: ref.drawing,
                    // matchDescription: '[h]top-to-top',
                    top: ref.bounding.top + (bounding.height / 2),
                    rule: ref.drawing.toString() === 'BackgroundRectangleDrawing' ? 1 : ref.bounding.top
                });
            }

            // Object top point is in horizontal-alignment with ref bottom point
            else if (
                bounding.top > ((ref.bounding.top + ref.bounding.height) - ref.threshold.topToBottom)
                && bounding.top < ((ref.bounding.top + ref.bounding.height) + ref.threshold.topToBottom)
            ) {
                verticalDrawingMatches.push({
                    centerMatch: false,
                    drawing: ref.drawing,
                    // matchDescription: '[h]top-to-bottom',
                    top: ref.bounding.top + ref.bounding.height + (bounding.height / 2),
                    rule: ref.bounding.top + ref.bounding.height
                });
            }

            /**
             * Right point horizontal-alignment
             * 
             */

            // Object bottom point is in horizontal-alignment with ref center point
            if (
                (bounding.top + bounding.height) > (ref.center.y - ref.threshold.bottomToCenter)
                && (bounding.top + bounding.height) < (ref.center.y + ref.threshold.bottomToCenter)
            ) {
                if (ref.drawing.toString() === 'BackgroundRectangleDrawing') {
                    verticalDrawingMatches.push({
                        // centerMatch: false,
                        centerMatch: true,
                        drawing: ref.drawing,
                        // matchDescription: '[v]bottom-to-center',
                        top: ref.center.y - bounding.height / 2,
                        rule: ref.drawing.toString() === 'BackgroundRectangleDrawing' ? ref.obj.getHeight() / 2 : ref.center.y
                    });
                }
            }

            // Object bottom point is in horizontal-alignment with ref top point
            else if (
                (bounding.top + bounding.height) > (ref.bounding.top - ref.threshold.bottomToTop)
                && (bounding.top + bounding.height) < (ref.bounding.top + ref.threshold.bottomToTop)
            ) {
                verticalDrawingMatches.push({
                    centerMatch: false,
                    drawing: ref.drawing,
                    // matchDescription: '[h]bottom-to-top',
                    top: ref.bounding.top - (bounding.height / 2),
                    rule: ref.bounding.top
                });
            }

            // Object bottom point is in horizontal-alignment with ref bottom point
            else if (
                (bounding.top + bounding.height) > ((ref.bounding.top + ref.bounding.height) - ref.threshold.bottomToBottom)
                && (bounding.top + bounding.height) < ((ref.bounding.top + ref.bounding.height) + ref.threshold.bottomToBottom)
            ) {
                verticalDrawingMatches.push({
                    centerMatch: false,
                    drawing: ref.drawing,
                    // matchDescription: '[h]bottom-to-bottom',
                    top: ref.bounding.top + ref.bounding.height - (bounding.height / 2),
                    rule: ref.drawing.toString() === 'BackgroundRectangleDrawing' ? ref.obj.getHeight() : (ref.bounding.top + ref.bounding.height)
                });
            }
        }
        if (verticalDrawingMatches.length > 0) {
            var snappedTop = verticalDrawingMatches[0].top;
            this.set('top', snappedTop);
            this.trigger('snap/position');
            if (Account.highlightAllDrawingsOnSnap() === true) {
                jQuery.each(verticalDrawingMatches, function(index, match) {
                    if (match.top === snappedTop) {
                        match.drawing.highlight({
                            showHorizontalLineCenters: false,
                            showVerticalLineCenters: match.centerMatch === true
                        });
                    }
                });
            } else {
                verticalDrawingMatches[0].drawing.highlight({
                    showHorizontalLineCenters: false,
                    showVerticalLineCenters: verticalDrawingMatches[0].centerMatch === true
                });
            }

            // Position rule
            start = {
                x: 0,
                y: Math.ceil(verticalDrawingMatches[0].rule) - 1
            };
            end = {
                x: this.canvas.getWidth(),
                y: Math.ceil(verticalDrawingMatches[0].rule) - 1
            };
            fabricGuides.horizontal[0].set({
                'x1': start.x,
                'y1': start.y,
                'x2': end.x,
                'y2': end.y
            });
            fabricGuides.horizontal[0].backdrop.set({
                'x1': start.x,
                'y1': start.y,
                'x2': end.x,
                'y2': end.y
            });

            // Show fabric guides
            fabricGuides.horizontal[0].set('visible', true);
            fabricGuides.horizontal[0].backdrop.set('visible', true);
            fabricGuides.horizontal[0].backdrop.bringToFront();
            fabricGuides.horizontal[0].bringToFront();
        }
    };

    // Events and unbinding
    this.on('moving', snap);
    this.on('removed', function() {
        this.off('moving', snap);
    });
};

/**
 * fabric.Object.prototype.snapToAngleOnRotate
 * 
 * @access  public
 * @param   Number multiple
 * @param   Number threshold
 * @return  void
 */
fabric.Object.prototype.snapToAngleOnRotate = function(multiple, threshold) {

    /**
     * snap
     * 
     * @this   fabric.Object
     * @access  private
     * @return  void
     */
    var snap = function() {
        var angles = 360 / multiple,
            angle = this.getAngle(),
            lower, upper;
        for (var x = 0, l = angles; x < l; ++x) {
            lower = (multiple * x) - threshold;
            upper = (multiple * x) + threshold;
            if (lower < 0) {
                lower = 360 + lower;
                if (angle > lower || angle < upper) {
                    this.setAngle(multiple * x);
                    this.trigger('snap/angle');
                }
            } else {
                if (angle > lower && angle < upper) {
                    this.setAngle(multiple * x);
                    this.trigger('snap/angle');
                }
            }
        }
    };

    // Events and unbinding
    this.on('rotating', snap);
    this.on('removed', function() {
        this.off('rotating', snap);
    });
};

/**
 * fabric.Object.prototype.snapToDrawingsOnScale
 * 
 * @todo    Look into how important it is for the reference objects to be sorted
 *          in an order that results in the smartest snapping (for example, the
 *          RectangleDrawing object being last, since if there's something close
 *          to the middle of the canvas, the user likely wants to snap to that
 *          and not the middle of the rectangle).
 * @access  public
 * @return  void
 */
fabric.Object.prototype.snapToDrawingsOnScale = function() {

    /**
     * snap
     * 
     * @this   fabric.Object
     * @access  private
     * @param   Object obj
     * @return  void
     */
    var snap = function(obj) {

        // Corners that are exempt from snapping
        var exemptCorners = ['tl', 'tr', 'br', 'bl'],
            corner = obj.e.transform.corner;
        if (ArrayUtils.contains(corner, exemptCorners) === false) {

            /**
             * Setup
             * 
             */
            this.setCoords();
            var bounding = this.getBoundingRect(),
                index,
                ref = {},
                drawings = this.canvas.magnets.drawings;

            /**
             * Vertical-alignment
             * 
             */

            // Get left and right x values for non-this drawings
            var objectValues = {
                    left: bounding.left,
                    right: bounding.left + bounding.width
                },
                match = {
                    drawings: [],
                    left: false,
                    right: false
                },
                drawingXValues = [];
            for (index in drawings) {

                // Helper object for easier lookup
                ref = {
                    bounding: drawings[index].getCotton().getBoundingRect(),
                    drawing: drawings[index],
                    obj: drawings[index].getCotton(),
                    threshold: drawings[index].magnets.thresholds.scaling.pixels
                };

                // Exclude any self-referencing drawings
                if (ref.obj === this) {
                    continue;
                }

                // Ensure bounding box coordinates are in sync
                ref.obj.setCoords();

                // Get the left and right x values for the drawing
                drawingXValues.push({
                    drawing: ref.drawing,
                    threshold: ref.threshold,
                    x: ref.bounding.left
                });
                drawingXValues.push({
                    drawing: ref.drawing,
                    threshold: ref.threshold,
                    x: ref.bounding.left + ref.bounding.width
                });
            }

            // Check if the object left and right values are within the threshold
            for (index in drawingXValues) {
                threshold = drawingXValues[index].threshold;
                if (
                    // match.left === false
                    // &&
                    objectValues.left > (drawingXValues[index].x - threshold)
                    && objectValues.left < (drawingXValues[index].x + threshold)
                ) {
                    match.left = drawingXValues[index].x;
                    match.drawings.push(drawingXValues[index].drawing);
                }
                if (
                    // match.right === false
                    // &&
                    objectValues.right > (drawingXValues[index].x - threshold)
                    && objectValues.right < (drawingXValues[index].x + threshold)
                ) {
                    match.right = drawingXValues[index].x;
                    match.drawings.push(drawingXValues[index].drawing);
                }
            }

            // Should be redrawn
            if (
                match.left !== false
                || match.right !== false
            ) {
                // Set the guides
                var uniqueGuides = [];
                if (match.left !== false) {
                    if (match.left === 0) {
                        uniqueGuides.push(1);
                    } else {
                        uniqueGuides.push(match.left);
                    }
                }
                if (match.right !== false) {
                    uniqueGuides.push(match.right);
                }

                // Default desired left and right values
                if (match.left === false) {
                    match.left = bounding.left;
                }
                if (match.right === false) {
                    match.right = bounding.left + bounding.width;
                }

                // Redraw
                var redrawnWidth = (match.right - match.left),
                    left = match.left + redrawnWidth / 2,
                    scaleX = this.get('scaleX') * (redrawnWidth / bounding.width);

                // Set in object
                if (this.constructor === fabric.Textbox) {
                    this.set({
                        'left': left,
                        'width': this.get('width') * scaleX
                    });
                } else {
                    this.set({
                        'left': left,
                        'scaleX': scaleX
                    });
                }

                // Highlight the drawings
                jQuery.each(match.drawings, function(index, drawing) {
                    drawing.highlight({
                        showHorizontalLineCenters: false,
                        showVerticalLineCenters: false
                    });
                });

                // Trigger the event so the Drawing can receive it
                this.trigger('snap/scale');

                // Position guide(s)
                var fabricGuides = Canvases.Preview.getFabricGuides(),
                    start,
                    end;
                for (index in uniqueGuides) {
                    start = {
                        x: Math.ceil(uniqueGuides[index]) - 1,
                        y: 0
                    };
                    end = {
                        x: Math.ceil(uniqueGuides[index]) - 1,
                        y: this.canvas.getHeight()
                    };
                    fabricGuides.vertical[index].set({
                        'x1': start.x,
                        'y1': start.y,
                        'x2': end.x,
                        'y2': end.y
                    });
                    fabricGuides.vertical[index].backdrop.set({
                        'x1': start.x,
                        'y1': start.y,
                        'x2': end.x,
                        'y2': end.y
                    });

                    // Show fabric guides
                    fabricGuides.vertical[index].set('visible', true);
                    fabricGuides.vertical[index].backdrop.set('visible', true);
                    fabricGuides.vertical[index].backdrop.bringToFront();
                    fabricGuides.vertical[index].bringToFront();
                }
            }

            /**
             * Horizontal-alignment
             * 
             */

            // Get top and bottom y values for non-this drawings
            objectValues = {
                top: bounding.top,
                bottom: bounding.top + bounding.height
            };
            match = {
                drawings: [],
                top: false,
                bottom: false
            };
            drawingYValues = [];
            for (index in drawings) {

                // Helper object for easier lookup
                ref = {
                    bounding: drawings[index].getCotton().getBoundingRect(),
                    drawing: drawings[index],
                    obj: drawings[index].getCotton(),
                    threshold: drawings[index].magnets.thresholds.scaling.pixels
                };

                // Exclude any self-referencing drawings
                if (ref.obj === this) {
                    continue;
                }

                // Ensure bounding box coordinates are in sync
                ref.obj.setCoords();

                // Get the top and bottom y values for the drawing
                drawingYValues.push({
                    drawing: ref.drawing,
                    threshold: ref.threshold,
                    y: ref.bounding.top
                });
                drawingYValues.push({
                    drawing: ref.drawing,
                    threshold: ref.threshold,
                    y: ref.bounding.top + ref.bounding.height
                });
            }

            // Check if the object top and bottom values are within the threshold
            for (index in drawingYValues) {
                threshold = drawingYValues[index].threshold;
                if (
                    // match.top === false
                    // &&
                    objectValues.top > (drawingYValues[index].y - threshold)
                    && objectValues.top < (drawingYValues[index].y + threshold)
                ) {
                    match.top = drawingYValues[index].y;
                    match.drawings.push(drawingYValues[index].drawing);
                }
                if (
                    // match.bottom === false
                    // &&
                    objectValues.bottom > (drawingYValues[index].y - threshold)
                    && objectValues.bottom < (drawingYValues[index].y + threshold)
                ) {
                    match.bottom = drawingYValues[index].y;
                    match.drawings.push(drawingYValues[index].drawing);
                }
            }

            // Should be redrawn
            if (
                match.top !== false
                || match.bottom !== false
            ) {
                // Set the guides
                var uniqueGuides = [];
                if (match.top !== false) {
                    if (match.top === 0) {
                        uniqueGuides.push(1);
                    } else {
                        uniqueGuides.push(match.top);
                    }
                }
                if (match.bottom !== false) {
                    uniqueGuides.push(match.bottom);
                }

                // Default desired top and bottom values
                if (match.top === false) {
                    match.top = bounding.top;
                }
                if (match.bottom === false) {
                    match.bottom = bounding.top + bounding.height;
                }

                // Redraw
                var redrawnHeight = (match.bottom - match.top),
                    top = match.top + redrawnHeight / 2,
                    scaleY = this.get('scaleY') * (redrawnHeight / bounding.height);

                // Set in object
                if (this.constructor === fabric.Textbox) {
                    // this.set({
                    //     'top': top,
                    //     'height': this.get('height') * scaleY
                    // });
                } else {
                    this.set({
                        'top': top,
                        'scaleY': scaleY
                    });
                }

                // Highlight the drawings
                jQuery.each(match.drawings, function(index, drawing) {
                    drawing.highlight({
                        showHorizontalLineCenters: false,
                        showVerticalLineCenters: false
                    });
                });

                // Trigger the event so the Drawing can receive it
                this.trigger('snap/scale');

                // Position guide(s)
                var fabricGuides = Canvases.Preview.getFabricGuides(),
                    start,
                    end;
                for (index in uniqueGuides) {
                    start = {
                        x: 0,
                        y: Math.ceil(uniqueGuides[index]) - 1
                    };
                    end = {
                        x: this.canvas.getWidth(),
                        y: Math.ceil(uniqueGuides[index]) - 1
                    };
                    fabricGuides.horizontal[index].set({
                        'x1': start.x,
                        'y1': start.y,
                        'x2': end.x,
                        'y2': end.y
                    });
                    fabricGuides.horizontal[index].backdrop.set({
                        'x1': start.x,
                        'y1': start.y,
                        'x2': end.x,
                        'y2': end.y
                    });

                    // Show fabric guides
                    fabricGuides.horizontal[index].set('visible', true);
                    fabricGuides.horizontal[index].backdrop.set('visible', true);
                    fabricGuides.horizontal[index].backdrop.bringToFront();
                    fabricGuides.horizontal[index].bringToFront();
                }
            }
        }
    };

    // Events and unbinding
    this.on('scaling', snap);
    this.on('removed', function() {
        this.off('scaling', snap);
    });
};
(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Caman filter class
   * @class fabric.Image.filters.Caman
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Caman('vintage', {
   *   brightness: 200
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Caman = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Caman.prototype */ {

    /**
     * Caman filter name
     * @param {String} name
     * @default
     */
    name: null,

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Caman',

    // 
    initialize: function(name, options) {
      this.name = name;
      this.options = options || {};
    },
    applyTo: function(canvasEl, scaleX, scaleY, callback) {
      var name = this.name,
        options = this.options;
      canvasEl.setAttribute('data-caman-hidpi-disabled', 1);
      Caman(canvasEl, function () {
          this[name].apply(this, options.args || [])
          this.render(callback);
      });
    },
    toObject: function() {
      return {
        type: this.type,
        name: this.name,
        options: this.options
      };
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return  {fabric.Image.filters.Caman} Instance of fabric.Image.filters.Caman
   */
  fabric.Image.filters.Caman.fromObject = function(object) {
    return new fabric.Image.filters.Caman(object);
  };

})(typeof exports !== 'undefined' ? exports : this);
(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Fade filter class
   * @class fabric.Image.filters.Fade
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Fade#initialize} for constructor definition
   * @example <caption>Fade filter with opacity</caption>
   * var filter = new fabric.Image.filters.Fade({
   *   opacity: 0.5
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Fade = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Fade.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Fade',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Fade.prototype
     * @param {Object} [options] Options object
     * @param {Number} [options.opacity] Opacity value that controls the tint effect's transparency (0..1)
     */
    initialize: function(options) {
      options = options || { };
      this.opacity = options.opacity.toFloat();
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i;

      for (i = 0; i < iLen; i+=4) {
        data[i + 3] = data[i + 3] * this.opacity;
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return  {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        opacity: this.opacity
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return  {fabric.Image.filters.Fade} Instance of fabric.Image.filters.Fade
   */
  fabric.Image.filters.Fade.fromObject = function(object) {
    return new fabric.Image.filters.Fade(object);
  };

})(typeof exports !== 'undefined' ? exports : this);
/**
 * Extend existing filters to use a callback
 * 
 */
(function() {
    var filter,
        filters = [
            'Brightness',
            'Convolute',
            'Fade',
            'GradientTransparency',
            'Grayscale',
            'Invert',
            'Mask',
            'Noise',
            'Pixelate',
            'RemoveWhite',
            'Sepia',
            'Sepia2',
            'Tint',
            'Multiply',
            'Blend',
            'Resize'
        ],
        index,
        tmp;
    for (index in filters) {
        filter = filters[index];
        tmp = fabric.Image.filters[filter].prototype.applyTo;
        (function(filter, tmp) {
            fabric.Image.filters[filter].prototype.applyTo = function() {
                var args = Array.prototype.slice.call(arguments),
                    callback = false;
                if (typeof args[args.length - 1] === 'function') {
                    callback = args.pop();
                }
                tmp.apply(this, args);
                callback && callback();
            };
            fabric.Image.filters[filter].prototype.get = function(key) {
              return this._dataStore[key];
            };
            fabric.Image.filters[filter].prototype.set = function(key, value) {
              this._dataStore = this._dataStore || {};
              this._dataStore[key] = value;
            };
        })(filter, tmp);
    }
})();

/**
 * Helpers
 * 
 */
fabric.Image.filters.Caman.prototype.get = function(key) {
  return this._dataStore[key];
};
fabric.Image.filters.Caman.prototype.set = function(key, value) {
  this._dataStore = this._dataStore || {};
  this._dataStore[key] = value;
};


/**
 * @see     http://demo.tutorialzine.com/2013/02/instagram-filter-app/
 * @see     https://gist.github.com/pierrickouw/2ab679159beee9d80ca6
 * @see     http://www.studyjs.com/fabricjs/fabricjs.html
 * @see     http://fabricjs.com/image-filters
 * @see     http://fabricjs.com/docs/fabric.Image.filters.Tint.html
 */
fabric.Image.prototype.applyFilters = function(callbackInitial, filters, imgElement, forResizing) {

    filters = filters || this.filters;
    imgElement = imgElement || this._originalElement;

    if (!imgElement) {
      return;
    }

    var imgEl = imgElement,
        canvasEl = fabric.util.createCanvasElement(),
        replacement = fabric.util.createImage(),
        _this = this;

    canvasEl.width = imgEl.width;
    canvasEl.height = imgEl.height;
    canvasEl.getContext('2d').drawImage(imgEl, 0, 0, imgEl.width, imgEl.height);

    if (filters.length === 0) {
      this._element = imgElement;
      callbackInitial && callbackInitial();
      this.trigger('applyFilters/complete');
      return canvasEl;
    }
    this.trigger('applyFilters/start');
    var callback = function() {
      replacement.width = canvasEl.width;
      replacement.height = canvasEl.height;
      replacement.onload = function() {
        _this._element = replacement;
        !forResizing && (_this._filteredEl = replacement);
        // LogUtils.log.simple('firing applyFilters/complete', true);
        callbackInitial && callbackInitial();
        _this.trigger('applyFilters/complete');
        replacement.onload = canvasEl = imgEl = null;
      };
      replacement.src = canvasEl.toDataURL('image/png');
      // return canvasEl;
    };
    var applyFiltersRecursively = function(filters, index, callback) {
      if (filters[index] === undefined) {
        callback();
      } else {
        var filter = filters[index];
        filter.applyTo(
          canvasEl,
          filter.scaleX || _this.scaleX,
          filter.scaleY || _this.scaleY,
          function() {
            if (!forResizing && filter && filter.type === 'Resize') {
              _this.width *= filter.scaleX;
              _this.height *= filter.scaleY;
            }
            applyFiltersRecursively(filters, index + 1, callback);
          }
        );
      }
    };
    applyFiltersRecursively(filters, 0, callback);
    return canvasEl;
};

/**
 * 
 * fabric.Object.drawBorders
 * 
 * Extended to allow contrasting colors to be defined for the border controls,
 * as well as the rotating-control-connector line.
 * 
 * @access  private
 * @return  void
 */
fabric.util.object.extend(fabric.Object.prototype, {

  /**
   * Draws borders of an object's bounding box.
   * Requires public properties: width, height
   * Requires public options: padding, borderColor
   * @param {CanvasRenderingContext2D} ctx Context to draw on
   * @return  {fabric.Object} thisArg
   * @chainable
   */
  drawBorders: function(ctx) {
    if (!this.hasBorders) {
      return this;
    }

    ctx.save();

    ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
    ctx.strokeStyle = this.stencilBorderColor1;

    ctx.lineWidth = 1 / this.borderScaleFactor;

    var wh = this._calculateCurrentDimensions(),
        width = wh.x,
        height = wh.y;
    if (this.group) {
      width = width * this.group.scaleX;
      height = height * this.group.scaleY;
    }

    ctx.strokeRect(
      ~~(-(width / 2)) - 0.5, // offset needed to make lines look sharper
      ~~(-(height / 2)) - 0.5,
      ~~(width) + 1, // double offset needed to make lines look sharper
      ~~(height) + 1
    );

    ctx.strokeStyle = this.stencilBorderColor2;
    // ctx.setLineDash([1,3]);
    ctx.setLineDash([3,3]);

    ctx.strokeRect(
      ~~(-(width / 2)) - 0.5, // offset needed to make lines look sharper
      ~~(-(height / 2)) - 0.5,
      ~~(width) + 1, // double offset needed to make lines look sharper
      ~~(height) + 1
    );


    if (this.hasRotatingPoint && this.isControlVisible('mtr') && !this.get('lockRotation') && this.hasControls) {

      var rotateHeight = -height / 2;

      ctx.lineWidth = 1;

      ctx.strokeStyle = this.stencilRotatingPointColor1;
      ctx.setLineDash([1]);
      ctx.beginPath();
      ctx.moveTo(0, rotateHeight);
      ctx.lineTo(0, rotateHeight - this.rotatingPointOffset);
      ctx.closePath();
      ctx.stroke();

      
      ctx.strokeStyle = this.stencilRotatingPointColor2;
      // ctx.setLineDash([1,2]);
      ctx.setLineDash([1,3]);
      ctx.beginPath();
      ctx.moveTo(0, rotateHeight);
      ctx.lineTo(0, rotateHeight - this.rotatingPointOffset);
      ctx.closePath();
      ctx.stroke();
    }

    ctx.restore();
    return this;
  }
});


/**
 * 
 * fabric.Object._drawControl
 * 
 * Extended to allow for a fill style and stroke to be set on controls, and
 * those controls to be circles instead of rectangles.
 * 
 * @todo!   See note below. This may cause issues down the line
 * @see     https://stackoverflow.com/questions/39452176/fabric-js-custom-rotate-icon-not-showing-on-initial-load
 * @see     http://jsfiddle.net/2XZHp/195/
 * @note    I removed the clearRect function. This was likely very important, but
 *          I couldn't figure out how to use it with arcs.
 * @note    Defined within a closure to ensure definition of <isVML> cannot
 *          conflict with any native fabric logic / variable scope.
 * @note    Check whether the rotate icon is undefined incase there's an issue
 *          loading it (eg. slow connection). In that case, just don't draw the
 *          image.
 * @access  private
 * @return  void
 */
(function() {
  var isVML = function() { return typeof G_vmlCanvasManager !== 'undefined'; };
  fabric.util.object.extend(fabric.Object.prototype, {

    /**
     * @private
     */
    _drawControl: function(control, ctx, methodName, left, top) {
      if (!this.isControlVisible(control)) {
        return;
      }
      var size = this.cornerSize,
        radius = size / 2;
      ctx.fillStyle = this.stencilCornerFillColor;
      ctx.strokeStyle = this.stencilCornerStrokeColor;
      ctx.lineJoin = 'round';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(left + radius, top + radius, radius, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      if (control === 'mtr') {
        var image = Stencil.get('rotateIconImageReference');
        if (image !== undefined) {
          ctx.drawImage(image, left, top, size, size);
        }
      }
    }
  });
})();


/**
 * 
 * fabric.Textbox.prototype._renderText
 * 
 * Extended to reverse order of stroke and filling, to allow for more pleasing
 * stroke.
 * 
 * @see     http://stackoverflow.com/questions/26639132/canvas-fabricjs-separate-stroke-from-text-edge
 * @access  private
 * @return  void
 */
fabric.Text.prototype._renderText = function(ctx) {
  this._translateForTextAlign(ctx);
  // this._renderTextFill(ctx);
  this._renderTextFill(ctx);
  this._renderTextStroke(ctx);
  this._renderTextFill(ctx);
  this._translateForTextAlign(ctx, true);
};


/**
 * 
 * fabric.Textbox.prototype._setShadow
 * 
 * I overwrote this method because during export, the shadow wasn't being set
 * properly. So I had to hardcode some pretty ugly logic below that checks the
 * window for an export that's going on, if it is, multiplies the properties
 * by a multiplier to get the desired effect.
 * 
 * @access  private
 * @return  void
 */
fabric.Text.prototype._setShadow = function(ctx) {
    if (!this.shadow) {
      return;
    }

    // 
    var offsetX = this.shadow.offsetX,
      offsetY = this.shadow.offsetY,
      blur = this.shadow.blur;
    if (window.exportingMultiplier !== undefined) {
      offsetX *= window.exportingMultiplier;
      offsetY *= window.exportingMultiplier;
      blur *= window.exportingMultiplier;
    }


    var multX = (this.canvas && this.canvas.viewportTransform[0]) || 1,
        multY = (this.canvas && this.canvas.viewportTransform[3]) || 1;

    ctx.shadowColor = this.shadow.color;
    ctx.shadowBlur = blur * (multX + multY) * (this.scaleX + this.scaleY) / 4;
    ctx.shadowOffsetX = offsetX * multX * this.scaleX;
    ctx.shadowOffsetY = offsetY * multY * this.scaleY;
};


/**
 * fabric.Rect.fromElement
 * 
 * Extended to deal with bug fix. I had to insert the fabric.util.object.extend
 * line since in the library, the reference is to a local function <extend>
 * which I don't have access to here.
 * 
 * @see     http://stackoverflow.com/questions/35119357/cant-load-a-vector-into-fabricjs?noredirect=1#comment58150548_35119357
 * @see     https://jsfiddle.net/fhgj39rs/1/
 * @see     https://github.com/kangax/fabric.js/pull/2771
 * @access  public
 * @return  fabric.Rect
 */
fabric.Rect.fromElement = function(element, options) {
  if (!element) {
    return null;
  }
  options = options || { };

  var parsedAttributes = fabric.parseAttributes(element, fabric.Rect.ATTRIBUTE_NAMES);

  parsedAttributes.left = parsedAttributes.left || 0;
  parsedAttributes.top  = parsedAttributes.top  || 0;
  // var rect = new fabric.Rect(extend((options ? fabric.util.object.clone(options) : { }), parsedAttributes));
  var rect = new fabric.Rect(fabric.util.object.extend((options ? fabric.util.object.clone(options) : { }), parsedAttributes));

  // rect.visible = rect.width > 0 && rect.height > 0;
  rect.visible = rect.visible && rect.width > 0 && rect.height > 0;
  return rect;
};


/**
 * Change strokeWidth to 0 across the board; was causing issues with width
 * calculations.
 * 
 * @see     https://github.com/kangax/fabric.js/issues/2570
 * @see     https://github.com/kangax/fabric.js/issues/2535
 * @see     https://github.com/kangax/fabric.js/issues/2619
 */
fabric.Object.prototype.strokeWidth = 0;


/**
 * Overwriting this method to ensure that on tablets, the textarea is positioned
 * in the visible area, taking into account the keyboard height.
 * 
 * @see     https://github.com/kangax/fabric.js/blob/newtext/src/mixins/itext_key_behavior.mixin.js
 * @see     https://github.com/kangax/fabric.js/issues/3798
 */
fabric.IText.prototype.initHiddenTextarea = function() {
    var y = this.getCenterPoint().y,
        height = $(this.canvas.lowerCanvasEl).css('height').toInt(),
        bottom = (
            $(window).height() - $(this.canvas.lowerCanvasEl).offset().top - height
        ) + (height - y);

    // 
    this.hiddenTextarea = fabric.document.createElement('textarea');
    this.hiddenTextarea.setAttribute('autocapitalize', 'off');
    this.hiddenTextarea.setAttribute('autocorrect', 'off');
    this.hiddenTextarea.setAttribute('autocomplete', 'off');
    this.hiddenTextarea.setAttribute('spellcheck', 'false');

    // 
    // this.hiddenTextarea.style.cssText = 'position: fixed; bottom: 20px; left: 0px; opacity: 0;'
    //                                     + ' width: 0px; height: 0px; z-index: -999;';
    // this.hiddenTextarea.style.cssText = 'position: fixed; bottom: ' + (bottom) + 'px; left: 0px; opacity: 0;'
    //                                     + ' width: 0px; height: 0px; z-index: -999; padding: 0; margin: 0;';
    this.hiddenTextarea.style.cssText = 'white-space: nowrap; position: fixed; bottom: ' + (bottom) + 'px; left: 0px; opacity: 0;'
                                        + ' width: 0px; height: 0px; z-index: -999; padding: 0; margin: 0;';
    fabric.document.body.appendChild(this.hiddenTextarea);

    fabric.util.addListener(this.hiddenTextarea, 'keydown', this.onKeyDown.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'keyup', this.onKeyUp.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'input', this.onInput.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'copy', this.copy.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'cut', this.cut.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'paste', this.paste.bind(this));

    if (!this._clickHandlerInitialized && this.canvas) {
      fabric.util.addListener(this.canvas.upperCanvasEl, 'click', this.onClick.bind(this));
      this._clickHandlerInitialized = true;
    }
};



/**
 * 
 * Initial largestWordWidth is set because if the text has only one word on the
 * line, then the loop will not be entered into, which would result in no
 * largestWordWidth value, and bugging out since the dynamicMinWidth would be
 * unset / zero.
 */
fabric.Textbox.prototype._wrapLine = function(ctx, text, lineIndex) {
    var words = text.split(' '),
      lines = [],
      currentLine = words[0],
      // largestWordWidth = 0;
      largestWordWidth = this._measureText(ctx, words[0], 0);

    for (var i = 1, word, width; i < words.length; i++) {
        word = words[i];
        ww = this._measureText(ctx, word, lineIndex);
        width = this._measureText(ctx, currentLine + ' ' + word, lineIndex);
        if (width < this.width) {
            currentLine += ' ' + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
        if (ww > largestWordWidth) {
          largestWordWidth = ww;
        }
    }
    lines.push(currentLine);
    if (words.length === 1) {
      this.dynamicMinWidth = this._measureText(ctx, currentLine, lineIndex);
    } else {
      if (largestWordWidth > this.dynamicMinWidth) {
        this.dynamicMinWidth = largestWordWidth;
      }
    }
    return lines;
};


/**
 * renderCursor
 * 
 * Overwrites the fabric native method to add a second rectangle directly to the
 * right of the cursor that is white, to ensure it's always visible.
 */
fabric.Textbox.prototype.renderCursor = function(boundaries, ctx) {
  var cursorLocation = this.get2DCursorLocation(),
    lineIndex = cursorLocation.lineIndex,
    charIndex = cursorLocation.charIndex,
    charHeight = this.getCurrentCharFontSize(lineIndex, charIndex),
    leftOffset = (lineIndex === 0 && charIndex === 0)
      ? this._getLineLeftOffset(this._getLineWidth(ctx, lineIndex))
      : boundaries.leftOffset;
  ctx.fillStyle = this.getCurrentCharColor(lineIndex, charIndex);
  ctx.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity;
  ctx.fillRect(
    boundaries.left + leftOffset,
    boundaries.top + boundaries.topOffset,
    this.cursorWidth / this.scaleX,
    charHeight
  );
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity;
  ctx.fillRect(
    boundaries.left + leftOffset + 1,
    boundaries.top + boundaries.topOffset,
    this.cursorWidth / this.scaleX,
    charHeight
  );
};

fabric.StaticCanvas.prototype._initRetinaScaling = function() {
    if (fabric.devicePixelRatio === 1 || !this.enableRetinaScaling) {
      return;
    }

    this.lowerCanvasEl.setAttribute('width', (this.width * fabric.devicePixelRatio).round(0));
    this.lowerCanvasEl.setAttribute('height', (this.height * fabric.devicePixelRatio).round(0));

    this.contextContainer.scale(fabric.devicePixelRatio, fabric.devicePixelRatio);
};


/**
 * _performTransformAction
 * 
 * Overwriting this method so that I can pass in the transform object, which
 * contains the all-important property <corner>, which tells me which corner
 * initiated a scale-event.
 * 
 * Not currently being used, but was intented for use by the
 * <snapToDrawingsOnScale> method.
 * 
 * @access  private
 * @param   MouseEvent e
 * @param   Object transform
 * @param   Object pointer
 * @return  void
 */
fabric.Canvas.prototype._performTransformAction = function(e, transform, pointer) {
    var x = pointer.x,
        y = pointer.y,
        target = transform.target,
        action = transform.action;

    e.transform = transform;
    if (action === 'rotate') {
      this._rotateObject(x, y);
      this._fire('rotating', target, e);
    }
    else if (action === 'scale') {
      this._onScale(e, transform, x, y);
      this._fire('scaling', target, e);
    }
    else if (action === 'scaleX') {
      this._scaleObject(x, y, 'x');
      this._fire('scaling', target, e);
    }
    else if (action === 'scaleY') {
      this._scaleObject(x, y, 'y');
      this._fire('scaling', target, e);
    }
    else if (action === 'skewX') {
      this._skewObject(x, y, 'x');
      this._fire('skewing', target, e);
    }
    else if (action === 'skewY') {
      this._skewObject(x, y, 'y');
      this._fire('skewing', target, e);
    }
    else {
      this._translateObject(x, y);
      this._fire('moving', target, e);
      this.setCursor(this.moveCursor);
    }
};

/**
 * (parseStyleString)
 * 
 * This method overwrites the local one in the fabric closure. The issue was
 * that an Icons8 vector had a style attribute that was malformed (closing curly
 * brace without an opening one), which was causing the parser to choke. So I
 * had to overwrite the local/private method here to exlude that "value".
 * 
 * @see     https://i.imgur.com/PUlmThn.jpg
 * @see     https://i.imgur.com/SRaJKSt.png
 * @access  local/private
 * @param   mixed style
 * @param   mixed oStyle
 * @return  void
 */
fabric.overwritePrivateMethod(
  'parseStyleString',
  function parseStyleString(style, oStyle) {
    var attr, value;
    style.replace(/;\s*$/, '').split(';').forEach(function (chunk) {
      var pair = chunk.split(':');
      if (pair.length > 1) {
        attr = normalizeAttr(pair[0].trim().toLowerCase());
        value = normalizeValue(attr, pair[1].trim());
        oStyle[attr] = value;
      }
    });
  }
);

/**
 * Fixes cut bug with fabric
 * 
 * @see     https://github.com/kangax/fabric.js/issues/2773
 * @see     https://github.com/kangax/fabric.js/pull/2868
 * @see     https://github.com/kangax/fabric.js/pull/2868/files
 */

fabric.IText.prototype._ctrlKeysMapUp = {
  65: 'selectAll',
  67: 'copy',
  88: 'cut'
};

fabric.IText.prototype._ctrlKeysMapDown = {
  65: 'selectAll'
};

fabric.IText.prototype.onKeyDown = function(e) {
  if (!this.isEditing) {
    return;
  }
  if (e.keyCode in this._keysMap) {
    this[this._keysMap[e.keyCode]](e);
  }
  else if ((e.keyCode in this._ctrlKeysMapDown) && (e.ctrlKey || e.metaKey)) {
    this[this._ctrlKeysMapDown[e.keyCode]](e);
  }
  else {
    return;
  }
  e.stopImmediatePropagation();
  e.preventDefault();
  this.canvas && this.canvas.renderAll();
};

fabric.IText.prototype.onKeyUp = function(e) {
  if (!this.isEditing || this._copyDone) {
    this._copyDone = false;
    return;
  }
  if ((e.keyCode in this._ctrlKeysMapUp) && (e.ctrlKey || e.metaKey)) {
    this[this._ctrlKeysMapUp[e.keyCode]](e);
  }
  else {
    return;
  }
  e.stopImmediatePropagation();
  e.preventDefault();
  this.canvas && this.canvas.renderAll();
};

fabric.IText.prototype.onInput = function(e) {
  if (!this.isEditing) {
    return;
  }
  var offset = this.selectionStart || 0,
      offsetEnd = this.selectionEnd || 0,
      textLength = this.text.length,
      newTextLength = this.hiddenTextarea.value.length,
      diff, charsToInsert;
  if (newTextLength > textLength) {
    diff = newTextLength - textLength;
    charsToInsert = this.hiddenTextarea.value.slice(offsetEnd, offsetEnd + diff);
  }
  else {
    diff = newTextLength - textLength + offsetEnd - offset;
    charsToInsert = this.hiddenTextarea.value.slice(offset, offset + diff);
  }
  this.insertChars(charsToInsert);
  e.stopPropagation();
};

fabric.IText.prototype.copy = function(e) {
  if (this.selectionStart === this.selectionEnd) {
    return;
  }
  var selectedText = this.getSelectedText(),
      clipboardData = this._getClipboardData(e);

  // Check for backward compatibility with old browsers
  if (clipboardData) {
    clipboardData.setData('text', selectedText);
  }

  fabric.copiedText = selectedText;
  fabric.copiedTextStyle = this.getSelectionStyles(
                        this.selectionStart,
                        this.selectionEnd);
  e.stopImmediatePropagation();
  e.preventDefault();
  this._copyDone = true;
};


  /**
   * Cuts text
   * @param {Event} e Event object
   */
fabric.IText.prototype.cut = function(e) {
  if (this.selectionStart === this.selectionEnd) {
    return;
  }

  this.copy(e);
  this.removeChars(e);
};

fabric.IText.prototype._getClipboardData = function(e) {
    return (e && e.clipboardData) || fabric.window.clipboardData;
};

/**
 * Function.prototype.delay
 * 
 * Delays the execution of a function by a number of milliseconds, accepting
 * optional <context> and <args> arguments. Note that the <milliseconds> is also
 * optional. If it's not provided, 0 will be used (which pushes the call to the
 * end of the JS execution stack).
 * 
 * The main reason this is centralized here is to be able to track delays, and
 * if required, kill them (eg. when the app is frozen via UserAgentUtils.kill()).
 * 
 * @access  public
 * @param   undefined|Number milliseconds (default: 0)
 * @param   undefined|Object context (default: window)
 * @param   undefined|Array args (default: [])
 * @return  Number
 */
Function.prototype.delay = function(milliseconds, context, args) {
    milliseconds = DataUtils.getDefaultValue(milliseconds, 0);
    milliseconds = milliseconds.toInt();
    context = DataUtils.getDefaultValue(context, window);
    args = DataUtils.getDefaultValue(args, []);
    var reference = setTimeout(
        (function() {
            TimeoutPool.remove(reference);
            this.apply(context, args);
        }).proxy(this),
        milliseconds
    );
    TimeoutPool.add(reference);
    return reference;
};

/**
 * Function.prototype.interval
 * 
 * Centralized interval handling, so that callbacks are tracked, and can
 * be easily managed.
 * 
 * @see     https://news.ycombinator.com/item?id=13471543
 * @see     http://blog.strml.net/2017/01/chrome-56-now-aggressively-throttles.html
 * @access  public
 * @param   Number milliseconds
 * @param   undefined|Object context (default: window)
 * @param   undefined|Array args (default: [])
 * @return  Number
 */
Function.prototype.interval = function(milliseconds, context, args) {
    milliseconds = milliseconds.toInt();
    context = DataUtils.getDefaultValue(context, window);
    args = DataUtils.getDefaultValue(args, []);
    var reference = setInterval(
        (function() {
            this.apply(context, args);
        }).proxy(this),
        milliseconds
    );
    IntervalPool.add(reference);
    return reference;
};

/**
 * Function.prototype.minDelay
 * 
 * Ensures that a function is called only if a minimum number of milliseconds
 * have passed. This is determined by checking the current timestamp against a
 * Date object that's passed in, which should be used as the benchmark in the
 * application logic. Do a quick search to see how this is being used.
 * 
 * @access  public
 * @param   Date start
 * @param   Number milliseconds
 * @param   undefined|Object context (default: window)
 * @param   undefined|Array args (default: [])
 * @return  void
 */
Function.prototype.minDelay = function(start, milliseconds, context, args) {
    milliseconds = milliseconds.toInt();
    context = DataUtils.getDefaultValue(context, window);
    args = DataUtils.getDefaultValue(args, []);
    var now = new Date().getTime();
    if (now > (start.getTime() + milliseconds)) {
        this.apply(context, args);
    } else {
        this.minDelay.delay(
            25,
            this,
            [
                start,
                milliseconds,
                context,
                args
            ]
        );
    }
};

/**
 * Function.prototype.proxy
 * 
 * Provides a native method for functions to proxy calls through jQuery's proxy
 * method. I do this because it's slightly cleaner/more flexible than calling it
 * directly.
 * 
 * @note    Was using DataUtils for a while for the argument validation, however
 *          this method is now being used by DependencyLoader, which does not
 *          have access/scope to DataUtils by the time it runs. So simplified it
 *          for the time being.
 * @access  public
 * @param   Object context
 * @param   undefined|Array args (default: [])
 * @return  Function
 */
Function.prototype.proxy = function(context, args) {
    if (args === undefined) {
        args = [];
    }
    // args = DataUtils.getDefaultValue(args, []);
    args.unshift(context);
    args.unshift(this);
    var callback = jQuery.proxy.apply(jQuery, args);
    return callback;
};

/**
 * Function.prototype.waitForMethod
 * 
 * @access  public
 * @param   String methodName
 * @return  void
 */
Function.prototype.waitForMethod = function(methodName) {
    if (StringUtils.validMethod(methodName) === true) {
        this();
    } else {
        var interval = (function(methodName) {
            if (StringUtils.validMethod(methodName) === true) {
                IntervalPool.clear(interval);
                this();
            }
        }).interval(100, this, [methodName]);
    }
};

/**
 * jQuery.fn.attributes
 * 
 * @see     https://stackoverflow.com/questions/14645806/get-all-attributes-of-an-element-using-jquery
 * @access  public
 * @return  Object
 */
jQuery.fn.attributes = function() {
    var obj = {};
    $(this).each(function() {
        $.each(this.attributes, function() {
            if (this.specified) {
                obj[this.name] = this.value;
            }
        });
    });
    return obj;
};

/**
 * jQuery.fn.disable
 * 
 * @access  public
 * @return  jQuery
 */
jQuery.fn.disable = function() {
    this.attr('disabled', 'disabled');
    return this;
};

/**
 * jQuery.fn.enable
 * 
 * @access  public
 * @return  jQuery
 */
jQuery.fn.enable = function() {
    this.removeAttr('disabled');
    return this;
};

/**
 * jQuery.fn.focusable
 * 
 * Returns the first focusable element in the jQuery object
 * 
 * @access  public
 * @return  jQuery
 */
jQuery.fn.focusable = function() {
    var selector = [
        'input[type="checkbox"]:visible',
        'input[type="email"]:visible',
        'input[type="number"]:visible',
        'input[type="password"]:visible',
        'input[type="radio"]:visible',
        'input[type="tel"]:visible',
        'input[type="text"]:visible',
        'select:visible',
        'textarea:visible'
    ].join(',');
    return this.find(selector).first();
};

/**
 * jQuery.fn.getRangeElements
 * 
 * @access  public
 * @param   HTMLElement|jQuery element
 * @return  Array
 */
jQuery.fn.getRangeElements = function(element) {
    var $element = jQuery(element);
    if (ArrayUtils.contains(element[0], this.siblings()) === false) {
        return [];
    }
    var $prevAll = this.prevAll();
    if (ArrayUtils.contains(element[0], $prevAll) === true) {
        var $prevUntil = this.prevUntil($element),
            set = [];
        $prevUntil.each(function(index, element) {
            set.push($(element));
        });
        set.unshift(this);
        set.push($element);
        return $(set);
    }
    var $nextUntil = this.nextUntil($element),
        set = [];
    $nextUntil.each(function(index, element) {
        set.push($(element));
    });
    set.unshift(this);
    set.push($element);
    return $(set);
};

/**
 * jQuery.fn.hourglass
 * 
 * @access  public
 * @return  void
 */
jQuery.fn.hourglass = function() {
    var hourglass = App.getHourglass(),
        $hourglass = hourglass.getElement(),
        offset = this.offset();
    $hourglass.toggleClass('hidden');
    $hourglass.css({
        width: this.css('width'),
        height: this.css('height'),
        top: offset.top,
        left: offset.left,
    });
};

/**
 * jQuery.fn.outer
 * 
 * Returns the outer HTML of a jQuery element.
 * 
 * There was a problem with IE11, whereby retrieving the outer html (by cloning
 * a wrapper-tag) caused elements that had checked="checked" to have the
 * attribute stripped. This was a known bug with jQuery. To get around this, I
 * reverted to the more-standard outerHTML property on the first element of the
 * jQuery selector.
 * 
 * @see     https://bugs.jquery.com/ticket/10550
 * @see     http://stackoverflow.com/questions/2419749/get-selected-elements-outer-html
 * @see     http://caniuse.com/#feat=xml-serializer
 * @access  public
 * @return  String
 */
jQuery.fn.outer = function() {
    var outerHTML = this.get(0).outerHTML;
    return outerHTML;
    // return $('<p>').append(this.eq(0).clone()).html();
};

/**
 * jQuery.fn.percentageVisible
 * 
 * @note    Checks whether the $relativeToElement is a jsPane instance, and if so
 *          uses the plugin to determine scroll top position.
 * @access  public
 * @param   jQuery $relativeToElement
 * @return  Number
 */
jQuery.fn.percentageVisible = function($relativeToElement) {
    var relativeHeight = $relativeToElement.outerHeight(true),
        relativeScrollTop = $relativeToElement.scrollTop();
    if ($relativeToElement.data('jsp') !== undefined) {
        relativeScrollTop = $relativeToElement.data('jsp').getContentPositionY();
    }
    if ((this[0].offsetTop + this.outerHeight()) < relativeScrollTop) {
        return 0;
    }
    if (this[0].offsetTop > (relativeScrollTop + relativeHeight)) {
        return 0;
    }
    if (this[0].offsetTop < relativeScrollTop) {
        var topOffset = relativeScrollTop,
            bottomOffset = this[0].offsetTop + this.outerHeight();
        return (((bottomOffset - topOffset) / this.outerHeight()) * 100).round(1);
    }
    if (
        (this[0].offsetTop + this.outerHeight()) > (relativeScrollTop + relativeHeight)
    ) {
        var topOffset = this[0].offsetTop,
            bottomOffset = relativeScrollTop + relativeHeight;
        return (((bottomOffset - topOffset) / this.outerHeight()) * 100).round(1);
    }
    return 100;
};

/**
 * jQuery.fn.reverse
 * 
 * @see     https://stackoverflow.com/a/5386150
 * @access  public
 * @return  Array
 */
jQuery.fn.reverse = [].reverse;

/**
 * jQuery.fn.scrollTo
 * 
 * @note    Does not currently work with jsPane since it's not actually being
 *          used against any elements that have a jsPane set up within them.
 * @see     https://stackoverflow.com/a/18927969/115025
 * @param   HTMLElement|jQuery to
 * @param   undefined|Number duration (default: 1000)
 * @param   undefined|Function callback (default: function() {})
 * @access  public
 * @return  Object
 */
jQuery.fn.scrollTo = function(to, duration, callback) {
    duration = DataUtils.getDefaultValue(duration, 1000);
    callback = DataUtils.getDefaultValue(callback, function() {});
    $(this).animate(
        {
            scrollTop: $(this).scrollTop() - $(this).offset().top + $(to).offset().top
        },
        {
            complete: callback,
            duration: duration
        }
    );
    return this;
};

/**
 * jQuery.fn.serializeObject
 * 
 * @see     http://stackoverflow.com/questions/1184624/convert-form-data-to-js-object-with-jquery
 * @access  public
 * @return  Object
 */
jQuery.fn.serializeObject = function() {
    var obj = {},
        arr = this.serializeArray();
    jQuery.each(
        arr,
        function() {
            if (obj[this.name] !== undefined) {
                if (!obj[this.name].push) {
                    obj[this.name] = [obj[this.name]];
                }
                obj[this.name].push(this.value || '');
            } else {
                obj[this.name] = this.value || '';
            }
        }
    );
    return obj;
};

/**
 * jQuery.fn.tag
 * 
 * Returns a lowercased version of the element's tag name.
 * 
 * @access  public
 * @return  jQuery
 */
jQuery.fn.tag = function() {
    var tag = this.prop('tagName').toLowerCase();
    return tag;
};

/**
 * jQuery.fn.tooltips
 * 
 * @access  public
 * @param   Boolean enabled
 * @return  jQuery
 */
jQuery.fn.tooltips = function(enabled) {
    if (enabled === true) {
        this.attr('tooltip', 'tooltip');
    } else {
        this.removeAttr('tooltip');
    }
    return this;
};

/**
 * DependencyLoader
 * 
 * @abstract
 */
window.DependencyLoader = (function() {

    /**
     * __attemptClosures
     * 
     * @access  private
     * @var     Array (default: [])
     */
    var __attemptClosures = [];

    /**
     * __attempts
     * 
     * @access  private
     * @var     Number (default: 0)
     */
    var __attempts = 0;

    /**
     * __attempt
     * 
     * @access  private
     * @param   Array dependencies
     * @param   Function callback
     * @return  Boolean
     */
    var __attempt = function(dependencies, callback) {
        ++__attempts;
        __checkForFailure(dependencies);
        if (__dependenciesAvailable(dependencies) === true) {
            callback.apply(DependencyLoader);
            return true;
        }
        return false;
    };

    /**
     * __checkForFailure
     * 
     * @access  private
     * @param   Array dependencies
     * @return  void
     */
    var __checkForFailure = function(dependencies) {
        if (__attempts > 10000) {
            var msg = 'Could not complete an attempt: [';
            msg += dependencies.join(', ') + ']';
            throw new Error(msg);
        }
    };

    /**
     * __dependenciesAvailable
     * 
     * @access  private
     * @param   Array dependencies
     * @return  Boolean
     */
    var __dependenciesAvailable = function(dependencies) {
        var x = 0,
            l = dependencies.length;
        for (x; x < l; ++x) {
            if (window[dependencies[x]] === undefined) {
                return false;
            }
        }
        return true;
    };

    // Public
    return {

        /**
         * load
         * 
         * @access  public
         * @return  void
         */
        load: function() {
            var index = 0,
                attempt;
            while (__attemptClosures.length > 0) {
                attempt = __attemptClosures.shift();
                if (attempt.apply(DependencyLoader) === false) {
                    __attemptClosures.push(attempt);
                }
            }
        },

        /**
         * push
         * 
         * @access  public
         * @param   Array dependencies
         * @param   Function callback
         * @return  Boolean
         */
        push: function(dependencies, callback) {
            var args = [dependencies, callback],
                attempt = __attempt.proxy(DependencyLoader, args);
            __attemptClosures.push(attempt);
        }
    };
})();

/**
 * IntervalPool
 * 
 * @abstract
 */
window.IntervalPool = (function() {

    /**
     * Properties
     * 
     */

    /**
     * __references
     * 
     * @access  private
     * @var     Array (default: [])
     */
    var __references = [];

    // Public
    return {

        /**
         * add
         * 
         * @access  public
         * @param   Number reference
         * @return  void
         */
        add: function(reference) {
            __references.push(reference);
        },

        /**
         * all
         * 
         * @access  public
         * @return  Array
         */
        all: function() {
            var references = __references;
            return references;
        },

        /**
         * clear
         * 
         * @access  public
         * @param   Number reference
         * @return  void
         */
        clear: function(reference) {
            clearInterval(reference);
            IntervalPool.remove(reference);
        },

        /**
         * clearAll
         * 
         * @note    Checking and storing references in separate array to prevent
         *          issue with removing references while looping over them.
         * @access  public
         * @return  void
         */
        clearAll: function() {
            var intervals = [];
            for (var index in __references) {
                if (isFinite(index) === true) {
                    intervals.push(__references[index]);
                }
            }
            for (index in intervals) {
                IntervalPool.clear(intervals[index]);
            }
        },

        /**
         * remove
         * 
         * @note    At the moment is (and likely should) only be used internally
         * @access  public
         * @param   Number reference
         * @return  void
         */
        remove: function(reference) {
            for (var index in __references) {
                if (__references[index] === reference) {
                    __references.splice(index, 1);
                    break;
                }
            }
        }
    };
})();

/**
 * TimeoutPool
 * 
 * @abstract
 */
window.TimeoutPool = (function() {

    /**
     * Properties
     * 
     */

    /**
     * __references
     * 
     * @access  private
     * @var     Array (default: [])
     */
    var __references = [];

    // Public
    return {

        /**
         * add
         * 
         * @access  public
         * @param   Number reference
         * @return  void
         */
        add: function(reference) {
            __references.push(reference);
        },

        /**
         * all
         * 
         * @access  public
         * @return  Array
         */
        all: function() {
            var references = __references;
            return references;
        },

        /**
         * clear
         * 
         * @access  public
         * @param   Number reference
         * @return  void
         */
        clear: function(reference) {
            clearTimeout(reference);
            TimeoutPool.remove(reference);
        },

        /**
         * clearAll
         * 
         * @note    Checking and storing references in separate array to prevent
         *          issue with removing references while looping over them.
         * @access  public
         * @return  void
         */
        clearAll: function() {
            var timeouts = [];
            for (var index in __references) {
                if (isFinite(index) === true) {
                    timeouts.push(__references[index]);
                }
            }
            for (index in timeouts) {
                TimeoutPool.clear(timeouts[index]);
            }
        },

        /**
         * remove
         * 
         * @note    At the moment is (and likely should) only be used internally
         * @access  public
         * @param   Number reference
         * @return  void
         */
        remove: function(reference) {
            for (var index in __references) {
                if (__references[index] === reference) {
                    __references.splice(index, 1);
                    break;
                }
            }
        }
    };
})();

/**
 * XHRPool
 * 
 * @see     http://stackoverflow.com/questions/1802936/stop-all-active-ajax-requests-in-jquery
 * @abstract
 */
window.XHRPool = (function() {

    /**
     * Properties
     * 
     */

    /**
     * __references
     * 
     * @access  private
     * @var     Array (default: [])
     */
    var __references = [];

    // Public
    return {

        /**
         * abortAll
         * 
         * Retrieves all the outbound requests from the array (since the array
         * is going to be modified as requests are aborted), and then loops over
         * each of them to perform the abortion. Doing so will trigger the
         * ajaxComplete event against the document, which will remove the
         * request from the pool.
         * 
         * @access  public
         * @return  void
         */
        abortAll: function() {
            var requests = [];
            for (var index in __references) {
                if (isFinite(index) === true) {
                    requests.push(__references[index]);
                }
            }
            for (index in requests) {
                requests[index].abort();
            }
        },

        /**
         * add
         * 
         * @access  public
         * @param   jQuery jqXHR
         * @return  void
         */
        add: function(jqXHR) {
            __references.push(jqXHR);
        },

        /**
         * all
         * 
         * @access  public
         * @return  Array
         */
        all: function() {
            var references = __references;
            return references;
        },

        /**
         * init
         * 
         * Below events are attached to the document rather than defined the
         * ajaxSetup to prevent possibly being overridden elsewhere (presumably
         * by accident).
         * 
         * @access  public
         * @return  void
         */
        init: function() {
            $(document).ajaxSend(function(event, jqXHR, options) {
                XHRPool.add(jqXHR);
            });
            $(document).ajaxComplete(function(event, jqXHR, options) {
                XHRPool.remove(jqXHR);
            });
        },

        /**
         * length
         * 
         * @access  public
         * @return  Number
         */
        length: function() {
            var length = __references.length;
            return length;
        },

        /**
         * remove
         * 
         * Loops over the requests, removes it once (and if) found, and then
         * breaks out of the loop (since nothing else to do).
         * 
         * @access  public
         * @param   jQuery jqXHR
         * @return  void
         */
        remove: function(jqXHR) {
            for (var index in __references) {
                if (__references[index] === jqXHR) {
                    __references.splice(index, 1);
                    break;
                }
            }
        }
    };
})();

// Let's do this!
XHRPool.init();
