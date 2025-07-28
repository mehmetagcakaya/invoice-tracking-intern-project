/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

// Bu kÄ±sÄ±mda module.exports = global.document ? yapÄ±yorum.
// Bu kÄ±sÄ±mda module.exports = global.document ? yapÄ±yorum.
// Bu kÄ±sÄ±mda module.exports = global.document ? yapÄ±yorum.
// Bu kÄ±sÄ±mda module.exports = global.document ? yapÄ±yorum.
// Bu kÄ±sÄ±mda module.exports = global.document ? yapÄ±yorum.
// Bu kÄ±sÄ±mda module.exports = global.document ? yapÄ±yorum.
// Bu kÄ±sÄ±mda module.exports = global.document ? yapÄ±yorum.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Bu kÄ±sÄ±mda } )( typeof window !== "undefined" ? window : this, function... yapÄ±yorum.
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Bu kÄ±sÄ±mda "use strict"; yapÄ±yorum.
// Bu kÄ±sÄ±mda "use strict"; yapÄ±yorum.
// Bu kÄ±sÄ±mda "use strict"; yapÄ±yorum.
// Bu kÄ±sÄ±mda "use strict"; yapÄ±yorum.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

// Bu kÄ±sÄ±mda return typeof obj === "function" && typeof obj.nodeType !== ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return typeof obj === "function" && typeof obj.nodeType !== ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return typeof obj === "function" && typeof obj.nodeType !== ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return typeof obj === "function" && typeof obj.nodeType !== ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return typeof obj === "function" && typeof obj.nodeType !== ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return typeof obj === "function" && typeof obj.nodeType !== ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return typeof obj === "function" && typeof obj.nodeType !== ... yapÄ±yorum.
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

// Bu kÄ±sÄ±mda val = node[ i ] || node.getAttribute && node.getAttribute( i... yapÄ±yorum.
// Bu kÄ±sÄ±mda val = node[ i ] || node.getAttribute && node.getAttribute( i... yapÄ±yorum.
// Bu kÄ±sÄ±mda val = node[ i ] || node.getAttribute && node.getAttribute( i... yapÄ±yorum.
// Bu kÄ±sÄ±mda val = node[ i ] || node.getAttribute && node.getAttribute( i... yapÄ±yorum.
// Bu kÄ±sÄ±mda val = node[ i ] || node.getAttribute && node.getAttribute( i... yapÄ±yorum.
// Bu kÄ±sÄ±mda val = node[ i ] || node.getAttribute && node.getAttribute( i... yapÄ±yorum.
// Bu kÄ±sÄ±mda val = node[ i ] || node.getAttribute && node.getAttribute( i... yapÄ±yorum.
// Bu kÄ±sÄ±mda val = node[ i ] || node.getAttribute && node.getAttribute( i... yapÄ±yorum.
// Bu kÄ±sÄ±mda val = node[ i ] || node.getAttribute && node.getAttribute( i... yapÄ±yorum.
// Bu kÄ±sÄ±mda val = node[ i ] || node.getAttribute && node.getAttribute( i... yapÄ±yorum.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

// Bu kÄ±sÄ±mda return typeof obj === "object" || typeof obj === "function" ... yapÄ±yorum.
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Bu kÄ±sÄ±mda var yapÄ±yorum.
// Bu kÄ±sÄ±mda var yapÄ±yorum.



var
	version = "3.6.0",

// Bu kÄ±sÄ±mda jQuery = function( selector, context ) { yapÄ±yorum.
	jQuery = function( selector, context ) {

// Bu kÄ±sÄ±mda return new jQuery.fn.init( selector, context ); yapÄ±yorum.
// Bu kÄ±sÄ±mda return new jQuery.fn.init( selector, context ); yapÄ±yorum.
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

// Bu kÄ±sÄ±mda jquery: version, yapÄ±yorum.
	jquery: version,

	constructor: jQuery,

// Bu kÄ±sÄ±mda length: 0, yapÄ±yorum.
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

// Bu kÄ±sÄ±mda get: function( num ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda get: function( num ) { yapÄ±yorum.
	get: function( num ) {

// Bu kÄ±sÄ±mda if ( num == null ) { yapÄ±yorum.
		if ( num == null ) {
			return slice.call( this );
		}

// Bu kÄ±sÄ±mda return num < 0 ? this[ num + this.length ] : this[ num ]; yapÄ±yorum.
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

// Bu kÄ±sÄ±mda pushStack: function( elems ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda pushStack: function( elems ) { yapÄ±yorum.
	pushStack: function( elems ) {

// Bu kÄ±sÄ±mda var ret = jQuery.merge( this.constructor(), elems ); yapÄ±yorum.
		var ret = jQuery.merge( this.constructor(), elems );

// Bu kÄ±sÄ±mda ret.prevObject = this; yapÄ±yorum.
		ret.prevObject = this;

// Bu kÄ±sÄ±mda return ret; yapÄ±yorum.
		return ret;
	},

// Bu kÄ±sÄ±mda each: function( callback ) { yapÄ±yorum.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

// Bu kÄ±sÄ±mda push: push, yapÄ±yorum.
// Bu kÄ±sÄ±mda push: push, yapÄ±yorum.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

// Bu kÄ±sÄ±mda if ( typeof target === "boolean" ) { yapÄ±yorum.
	if ( typeof target === "boolean" ) {
		deep = target;

// Bu kÄ±sÄ±mda target = arguments[ i ] || {}; yapÄ±yorum.
		target = arguments[ i ] || {};
		i++;
	}

// Bu kÄ±sÄ±mda if ( typeof target !== "object" && !isFunction( target ) ) { yapÄ±yorum.
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

// Bu kÄ±sÄ±mda if ( i === length ) { yapÄ±yorum.
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

// Bu kÄ±sÄ±mda if ( ( options = arguments[ i ] ) != null ) { yapÄ±yorum.
		if ( ( options = arguments[ i ] ) != null ) {

// Bu kÄ±sÄ±mda for ( name in options ) { yapÄ±yorum.
			for ( name in options ) {
				copy = options[ name ];

// Bu kÄ±sÄ±mda if ( name === "__proto__" || target === copy ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( name === "__proto__" || target === copy ) { yapÄ±yorum.
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

// Bu kÄ±sÄ±mda if ( deep && copy && ( jQuery.isPlainObject( copy ) || yapÄ±yorum.
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

// Bu kÄ±sÄ±mda if ( copyIsArray && !Array.isArray( src ) ) { yapÄ±yorum.
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

// Bu kÄ±sÄ±mda target[ name ] = jQuery.extend( deep, clone, copy ); yapÄ±yorum.
					target[ name ] = jQuery.extend( deep, clone, copy );

// Bu kÄ±sÄ±mda } else if ( copy !== undefined ) { yapÄ±yorum.
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

// Bu kÄ±sÄ±mda return target; yapÄ±yorum.
	return target;
};

jQuery.extend( {

// Bu kÄ±sÄ±mda expando: "jQuery" + ( version + Math.random() ).replace( /\D... yapÄ±yorum.
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

// Bu kÄ±sÄ±mda isReady: true, yapÄ±yorum.
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

// Bu kÄ±sÄ±mda if ( !obj || toString.call( obj ) !== "[object Object]" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !obj || toString.call( obj ) !== "[object Object]" ) { yapÄ±yorum.
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

// Bu kÄ±sÄ±mda if ( !proto ) { yapÄ±yorum.
		if ( !proto ) {
			return true;
		}

// Bu kÄ±sÄ±mda Ctor = hasOwn.call( proto, "constructor" ) && proto.construc... yapÄ±yorum.
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

// Bu kÄ±sÄ±mda globalEval: function( code, options, doc ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda globalEval: function( code, options, doc ) { yapÄ±yorum.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

// Bu kÄ±sÄ±mda makeArray: function( arr, results ) { yapÄ±yorum.
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

// Bu kÄ±sÄ±mda merge: function( first, second ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda merge: function( first, second ) { yapÄ±yorum.
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

// Bu kÄ±sÄ±mda for ( ; i < length; i++ ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda for ( ; i < length; i++ ) { yapÄ±yorum.
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

// Bu kÄ±sÄ±mda map: function( elems, callback, arg ) { yapÄ±yorum.
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

// Bu kÄ±sÄ±mda if ( isArrayLike( elems ) ) { yapÄ±yorum.
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

// Bu kÄ±sÄ±mda return flat( ret ); yapÄ±yorum.
		return flat( ret );
	},

// Bu kÄ±sÄ±mda guid: 1, yapÄ±yorum.
	guid: 1,

// Bu kÄ±sÄ±mda support: support yapÄ±yorum.
// Bu kÄ±sÄ±mda support: support yapÄ±yorum.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Bu kÄ±sÄ±mda jQuery.each( "Boolean Number String Function Array Date RegE... yapÄ±yorum.
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

// Bu kÄ±sÄ±mda var length = !!obj && "length" in obj && obj.length, yapÄ±yorum.
// Bu kÄ±sÄ±mda var length = !!obj && "length" in obj && obj.length, yapÄ±yorum.
// Bu kÄ±sÄ±mda var length = !!obj && "length" in obj && obj.length, yapÄ±yorum.
// Bu kÄ±sÄ±mda var length = !!obj && "length" in obj && obj.length, yapÄ±yorum.
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

// Bu kÄ±sÄ±mda setDocument, yapÄ±yorum.
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

// Bu kÄ±sÄ±mda expando = "sizzle" + 1 * new Date(), yapÄ±yorum.
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

// Bu kÄ±sÄ±mda hasOwn = ( {} ).hasOwnProperty, yapÄ±yorum.
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

// Bu kÄ±sÄ±mda indexOf = function( list, elem ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda indexOf = function( list, elem ) { yapÄ±yorum.
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

// Bu kÄ±sÄ±mda whitespace = "[\\x20\\t\\r\\n\\f]", yapÄ±yorum.

// Bu kÄ±sÄ±mda whitespace = "[\\x20\\t\\r\\n\\f]", yapÄ±yorum.
	whitespace = "[\\x20\\t\\r\\n\\f]",

// Bu kÄ±sÄ±mda identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + yapÄ±yorum.
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

// Bu kÄ±sÄ±mda attributes = "\\[" + whitespace + "*(" + identifier + ")(?:"... yapÄ±yorum.
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

// Bu kÄ±sÄ±mda "*([*^$|!~]?=)" + whitespace + yapÄ±yorum.
		"*([*^$|!~]?=)" + whitespace +

// Bu kÄ±sÄ±mda "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +... yapÄ±yorum.
// Bu kÄ±sÄ±mda "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +... yapÄ±yorum.
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

// Bu kÄ±sÄ±mda "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + yapÄ±yorum.
// Bu kÄ±sÄ±mda "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + yapÄ±yorum.
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

// Bu kÄ±sÄ±mda "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + yapÄ±yorum.
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

// Bu kÄ±sÄ±mda ".*" + yapÄ±yorum.
		".*" +
		")\\)|)",

// Bu kÄ±sÄ±mda rwhitespace = new RegExp( whitespace + "+", "g" ), yapÄ±yorum.
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

// Bu kÄ±sÄ±mda "needsContext": new RegExp( "^" + whitespace + yapÄ±yorum.
// Bu kÄ±sÄ±mda "needsContext": new RegExp( "^" + whitespace + yapÄ±yorum.
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

// Bu kÄ±sÄ±mda rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yapÄ±yorum.
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

// Bu kÄ±sÄ±mda runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace ... yapÄ±yorum.
// Bu kÄ±sÄ±mda runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace ... yapÄ±yorum.
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

// Bu kÄ±sÄ±mda nonHex : yapÄ±yorum.
			nonHex :

// Bu kÄ±sÄ±mda high < 0 ? yapÄ±yorum.
// Bu kÄ±sÄ±mda high < 0 ? yapÄ±yorum.
// Bu kÄ±sÄ±mda high < 0 ? yapÄ±yorum.
// Bu kÄ±sÄ±mda high < 0 ? yapÄ±yorum.
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

// Bu kÄ±sÄ±mda rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF... yapÄ±yorum.
// Bu kÄ±sÄ±mda rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF... yapÄ±yorum.
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

// Bu kÄ±sÄ±mda if ( ch === "\0" ) { yapÄ±yorum.
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

// Bu kÄ±sÄ±mda return ch.slice( 0, -1 ) + "\\" + yapÄ±yorum.
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

// Bu kÄ±sÄ±mda return "\\" + ch; yapÄ±yorum.
		return "\\" + ch;
	},

// Bu kÄ±sÄ±mda unloadHandler = function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda unloadHandler = function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda unloadHandler = function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda unloadHandler = function() { yapÄ±yorum.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Bu kÄ±sÄ±mda try { yapÄ±yorum.
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

// Bu kÄ±sÄ±mda arr[ preferredDoc.childNodes.length ].nodeType; yapÄ±yorum.
// Bu kÄ±sÄ±mda arr[ preferredDoc.childNodes.length ].nodeType; yapÄ±yorum.
// Bu kÄ±sÄ±mda arr[ preferredDoc.childNodes.length ].nodeType; yapÄ±yorum.
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

// Bu kÄ±sÄ±mda function( target, els ) { yapÄ±yorum.
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

// Bu kÄ±sÄ±mda function( target, els ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function( target, els ) { yapÄ±yorum.
		function( target, els ) {
			var j = target.length,
				i = 0;

// Bu kÄ±sÄ±mda while ( ( target[ j++ ] = els[ i++ ] ) ) {} yapÄ±yorum.
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

// Bu kÄ±sÄ±mda nodeType = context ? context.nodeType : 9; yapÄ±yorum.
		nodeType = context ? context.nodeType : 9;

	results = results || [];

// Bu kÄ±sÄ±mda if ( typeof selector !== "string" || !selector || yapÄ±yorum.
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

// Bu kÄ±sÄ±mda if ( !seed ) { yapÄ±yorum.
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

// Bu kÄ±sÄ±mda if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ... yapÄ±yorum.
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

// Bu kÄ±sÄ±mda if ( ( m = match[ 1 ] ) ) { yapÄ±yorum.
				if ( ( m = match[ 1 ] ) ) {

// Bu kÄ±sÄ±mda if ( nodeType === 9 ) { yapÄ±yorum.
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

// Bu kÄ±sÄ±mda if ( elem.id === m ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem.id === m ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem.id === m ) { yapÄ±yorum.
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
					} else {

// Bu kÄ±sÄ±mda if ( newContext && ( elem = newContext.getElementById( m ) )... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( newContext && ( elem = newContext.getElementById( m ) )... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( newContext && ( elem = newContext.getElementById( m ) )... yapÄ±yorum.
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

// Bu kÄ±sÄ±mda } else if ( match[ 2 ] ) { yapÄ±yorum.
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

// Bu kÄ±sÄ±mda } else if ( ( m = match[ 3 ] ) && support.getElementsByClass... yapÄ±yorum.
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

// Bu kÄ±sÄ±mda if ( support.qsa && yapÄ±yorum.
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

// Bu kÄ±sÄ±mda ( nodeType !== 1 || context.nodeName.toLowerCase() !== "obje... yapÄ±yorum.
// Bu kÄ±sÄ±mda ( nodeType !== 1 || context.nodeName.toLowerCase() !== "obje... yapÄ±yorum.
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

// Bu kÄ±sÄ±mda if ( nodeType === 1 && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( nodeType === 1 && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( nodeType === 1 && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( nodeType === 1 && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( nodeType === 1 && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( nodeType === 1 && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( nodeType === 1 && yapÄ±yorum.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

// Bu kÄ±sÄ±mda newContext = rsibling.test( selector ) && testContext( conte... yapÄ±yorum.
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

// Bu kÄ±sÄ±mda if ( newContext !== context || !support.scope ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( newContext !== context || !support.scope ) { yapÄ±yorum.
					if ( newContext !== context || !support.scope ) {

// Bu kÄ±sÄ±mda if ( ( nid = context.getAttribute( "id" ) ) ) { yapÄ±yorum.
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

// Bu kÄ±sÄ±mda groups = tokenize( selector ); yapÄ±yorum.
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

// Bu kÄ±sÄ±mda return select( selector.replace( rtrim, "$1" ), context, res... yapÄ±yorum.
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

// Bu kÄ±sÄ±mda if ( keys.push( key + " " ) > Expr.cacheLength ) { yapÄ±yorum.
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

// Bu kÄ±sÄ±mda delete cache[ keys.shift() ]; yapÄ±yorum.
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

// Bu kÄ±sÄ±mda if ( el.parentNode ) { yapÄ±yorum.
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

// Bu kÄ±sÄ±mda el = null; yapÄ±yorum.
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

// Bu kÄ±sÄ±mda if ( diff ) { yapÄ±yorum.
	if ( diff ) {
		return diff;
	}

// Bu kÄ±sÄ±mda if ( cur ) { yapÄ±yorum.
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

// Bu kÄ±sÄ±mda return function( elem ) { yapÄ±yorum.
	return function( elem ) {

// Bu kÄ±sÄ±mda if ( "form" in elem ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( "form" in elem ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( "form" in elem ) { yapÄ±yorum.
		if ( "form" in elem ) {

// Bu kÄ±sÄ±mda if ( elem.parentNode && elem.disabled === false ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem.parentNode && elem.disabled === false ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem.parentNode && elem.disabled === false ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem.parentNode && elem.disabled === false ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem.parentNode && elem.disabled === false ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem.parentNode && elem.disabled === false ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem.parentNode && elem.disabled === false ) { yapÄ±yorum.
			if ( elem.parentNode && elem.disabled === false ) {

// Bu kÄ±sÄ±mda if ( "label" in elem ) { yapÄ±yorum.
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

// Bu kÄ±sÄ±mda return elem.isDisabled === disabled || yapÄ±yorum.
// Bu kÄ±sÄ±mda return elem.isDisabled === disabled || yapÄ±yorum.
				return elem.isDisabled === disabled ||

// Bu kÄ±sÄ±mda /* jshint -W018 */ yapÄ±yorum.
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

// Bu kÄ±sÄ±mda } else if ( "label" in elem ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda } else if ( "label" in elem ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda } else if ( "label" in elem ) { yapÄ±yorum.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

// Bu kÄ±sÄ±mda return false; yapÄ±yorum.
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

// Bu kÄ±sÄ±mda while ( i-- ) { yapÄ±yorum.
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Bu kÄ±sÄ±mda support = Sizzle.support = {}; yapÄ±yorum.
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

// Bu kÄ±sÄ±mda return !rhtml.test( namespace || docElem && docElem.nodeName... yapÄ±yorum.
// Bu kÄ±sÄ±mda return !rhtml.test( namespace || docElem && docElem.nodeName... yapÄ±yorum.
// Bu kÄ±sÄ±mda return !rhtml.test( namespace || docElem && docElem.nodeName... yapÄ±yorum.
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

// Bu kÄ±sÄ±mda if ( doc == document || doc.nodeType !== 9 || !doc.documentE... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( doc == document || doc.nodeType !== 9 || !doc.documentE... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( doc == document || doc.nodeType !== 9 || !doc.documentE... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( doc == document || doc.nodeType !== 9 || !doc.documentE... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( doc == document || doc.nodeType !== 9 || !doc.documentE... yapÄ±yorum.
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

// Bu kÄ±sÄ±mda document = doc; yapÄ±yorum.
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

// Bu kÄ±sÄ±mda if ( preferredDoc != document && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( preferredDoc != document && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( preferredDoc != document && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( preferredDoc != document && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( preferredDoc != document && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( preferredDoc != document && yapÄ±yorum.
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

// Bu kÄ±sÄ±mda if ( subWindow.addEventListener ) { yapÄ±yorum.
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

// Bu kÄ±sÄ±mda } else if ( subWindow.attachEvent ) { yapÄ±yorum.
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

// Bu kÄ±sÄ±mda support.scope = assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.scope = assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.scope = assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.scope = assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.scope = assert( function( el ) { yapÄ±yorum.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

// Bu kÄ±sÄ±mda support.attributes = assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.attributes = assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.attributes = assert( function( el ) { yapÄ±yorum.
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

// Bu kÄ±sÄ±mda support.getElementsByTagName = assert( function( el ) { yapÄ±yorum.
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

// Bu kÄ±sÄ±mda support.getElementsByClassName = rnative.test( document.getE... yapÄ±yorum.
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

// Bu kÄ±sÄ±mda support.getById = assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.getById = assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.getById = assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.getById = assert( function( el ) { yapÄ±yorum.
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

// Bu kÄ±sÄ±mda if ( support.getById ) { yapÄ±yorum.
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

// Bu kÄ±sÄ±mda Expr.find[ "ID" ] = function( id, context ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda Expr.find[ "ID" ] = function( id, context ) { yapÄ±yorum.
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

// Bu kÄ±sÄ±mda node = elem.getAttributeNode( "id" ); yapÄ±yorum.
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

// Bu kÄ±sÄ±mda elems = context.getElementsByName( id ); yapÄ±yorum.
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

// Bu kÄ±sÄ±mda Expr.find[ "TAG" ] = support.getElementsByTagName ? yapÄ±yorum.
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

// Bu kÄ±sÄ±mda } else if ( support.qsa ) { yapÄ±yorum.
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

// Bu kÄ±sÄ±mda results = context.getElementsByTagName( tag ); yapÄ±yorum.
				results = context.getElementsByTagName( tag );

// Bu kÄ±sÄ±mda if ( tag === "*" ) { yapÄ±yorum.
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

// Bu kÄ±sÄ±mda Expr.find[ "CLASS" ] = support.getElementsByClassName && fun... yapÄ±yorum.
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

// Bu kÄ±sÄ±mda rbuggyMatches = []; yapÄ±yorum.

// Bu kÄ±sÄ±mda rbuggyMatches = []; yapÄ±yorum.
	rbuggyMatches = [];

// Bu kÄ±sÄ±mda rbuggyQSA = []; yapÄ±yorum.
// Bu kÄ±sÄ±mda rbuggyQSA = []; yapÄ±yorum.
// Bu kÄ±sÄ±mda rbuggyQSA = []; yapÄ±yorum.
// Bu kÄ±sÄ±mda rbuggyQSA = []; yapÄ±yorum.
// Bu kÄ±sÄ±mda rbuggyQSA = []; yapÄ±yorum.
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

// Bu kÄ±sÄ±mda assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda assert( function( el ) { yapÄ±yorum.
		assert( function( el ) {

			var input;

// Bu kÄ±sÄ±mda docElem.appendChild( el ).innerHTML = "<a id='" + expando + ... yapÄ±yorum.
// Bu kÄ±sÄ±mda docElem.appendChild( el ).innerHTML = "<a id='" + expando + ... yapÄ±yorum.
// Bu kÄ±sÄ±mda docElem.appendChild( el ).innerHTML = "<a id='" + expando + ... yapÄ±yorum.
// Bu kÄ±sÄ±mda docElem.appendChild( el ).innerHTML = "<a id='" + expando + ... yapÄ±yorum.
// Bu kÄ±sÄ±mda docElem.appendChild( el ).innerHTML = "<a id='" + expando + ... yapÄ±yorum.
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

// Bu kÄ±sÄ±mda if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) ... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) ... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) ... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) ... yapÄ±yorum.
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

// Bu kÄ±sÄ±mda if ( !el.querySelectorAll( "[selected]" ).length ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !el.querySelectorAll( "[selected]" ).length ) { yapÄ±yorum.
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

// Bu kÄ±sÄ±mda if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length... yapÄ±yorum.
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

// Bu kÄ±sÄ±mda input = document.createElement( "input" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda input = document.createElement( "input" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda input = document.createElement( "input" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda input = document.createElement( "input" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda input = document.createElement( "input" ); yapÄ±yorum.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

// Bu kÄ±sÄ±mda if ( !el.querySelectorAll( ":checked" ).length ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !el.querySelectorAll( ":checked" ).length ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !el.querySelectorAll( ":checked" ).length ) { yapÄ±yorum.
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

// Bu kÄ±sÄ±mda if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) ... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) ... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) ... yapÄ±yorum.
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

// Bu kÄ±sÄ±mda el.querySelectorAll( "\\\f" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda el.querySelectorAll( "\\\f" ); yapÄ±yorum.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

// Bu kÄ±sÄ±mda var input = document.createElement( "input" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda var input = document.createElement( "input" ); yapÄ±yorum.
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

// Bu kÄ±sÄ±mda if ( el.querySelectorAll( "[name=d]" ).length ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( el.querySelectorAll( "[name=d]" ).length ) { yapÄ±yorum.
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

// Bu kÄ±sÄ±mda if ( el.querySelectorAll( ":enabled" ).length !== 2 ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( el.querySelectorAll( ":enabled" ).length !== 2 ) { yapÄ±yorum.
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

// Bu kÄ±sÄ±mda docElem.appendChild( el ).disabled = true; yapÄ±yorum.
// Bu kÄ±sÄ±mda docElem.appendChild( el ).disabled = true; yapÄ±yorum.
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

// Bu kÄ±sÄ±mda el.querySelectorAll( "*,:x" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda el.querySelectorAll( "*,:x" ); yapÄ±yorum.
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

// Bu kÄ±sÄ±mda support.disconnectedMatch = matches.call( el, "*" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda support.disconnectedMatch = matches.call( el, "*" ); yapÄ±yorum.
			support.disconnectedMatch = matches.call( el, "*" );

// Bu kÄ±sÄ±mda matches.call( el, "[s!='']:x" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda matches.call( el, "[s!='']:x" ); yapÄ±yorum.
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

// Bu kÄ±sÄ±mda contains = hasCompare || rnative.test( docElem.contains ) ? yapÄ±yorum.
// Bu kÄ±sÄ±mda contains = hasCompare || rnative.test( docElem.contains ) ? yapÄ±yorum.
// Bu kÄ±sÄ±mda contains = hasCompare || rnative.test( docElem.contains ) ? yapÄ±yorum.
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

// Bu kÄ±sÄ±mda sortOrder = hasCompare ? yapÄ±yorum.
	sortOrder = hasCompare ?
	function( a, b ) {

// Bu kÄ±sÄ±mda if ( a === b ) { yapÄ±yorum.
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

// Bu kÄ±sÄ±mda var compare = !a.compareDocumentPosition - !b.compareDocumen... yapÄ±yorum.
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

// Bu kÄ±sÄ±mda compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b... yapÄ±yorum.
// Bu kÄ±sÄ±mda compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b... yapÄ±yorum.
// Bu kÄ±sÄ±mda compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b... yapÄ±yorum.
// Bu kÄ±sÄ±mda compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b... yapÄ±yorum.
// Bu kÄ±sÄ±mda compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b... yapÄ±yorum.
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

// Bu kÄ±sÄ±mda 1; yapÄ±yorum.
			1;

// Bu kÄ±sÄ±mda if ( compare & 1 || yapÄ±yorum.
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

// Bu kÄ±sÄ±mda if ( a == document || a.ownerDocument == preferredDoc && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( a == document || a.ownerDocument == preferredDoc && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( a == document || a.ownerDocument == preferredDoc && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( a == document || a.ownerDocument == preferredDoc && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( a == document || a.ownerDocument == preferredDoc && yapÄ±yorum.
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

// Bu kÄ±sÄ±mda if ( b == document || b.ownerDocument == preferredDoc && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( b == document || b.ownerDocument == preferredDoc && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( b == document || b.ownerDocument == preferredDoc && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( b == document || b.ownerDocument == preferredDoc && yapÄ±yorum.
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

// Bu kÄ±sÄ±mda return sortInput ? yapÄ±yorum.
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

// Bu kÄ±sÄ±mda if ( a === b ) { yapÄ±yorum.
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

// Bu kÄ±sÄ±mda if ( !aup || !bup ) { yapÄ±yorum.
		if ( !aup || !bup ) {

// Bu kÄ±sÄ±mda /* eslint-disable eqeqeq */ yapÄ±yorum.
// Bu kÄ±sÄ±mda /* eslint-disable eqeqeq */ yapÄ±yorum.
// Bu kÄ±sÄ±mda /* eslint-disable eqeqeq */ yapÄ±yorum.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

// Bu kÄ±sÄ±mda } else if ( aup === bup ) { yapÄ±yorum.
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

// Bu kÄ±sÄ±mda cur = a; yapÄ±yorum.
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

// Bu kÄ±sÄ±mda while ( ap[ i ] === bp[ i ] ) { yapÄ±yorum.
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

// Bu kÄ±sÄ±mda siblingCheck( ap[ i ], bp[ i ] ) : yapÄ±yorum.
			siblingCheck( ap[ i ], bp[ i ] ) :

// Bu kÄ±sÄ±mda /* eslint-disable eqeqeq */ yapÄ±yorum.
// Bu kÄ±sÄ±mda /* eslint-disable eqeqeq */ yapÄ±yorum.
// Bu kÄ±sÄ±mda /* eslint-disable eqeqeq */ yapÄ±yorum.
// Bu kÄ±sÄ±mda /* eslint-disable eqeqeq */ yapÄ±yorum.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

// Bu kÄ±sÄ±mda if ( ret || support.disconnectedMatch || yapÄ±yorum.
			if ( ret || support.disconnectedMatch ||

// Bu kÄ±sÄ±mda elem.document && elem.document.nodeType !== 11 ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda elem.document && elem.document.nodeType !== 11 ) { yapÄ±yorum.
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

// Bu kÄ±sÄ±mda if ( ( context.ownerDocument || context ) != document ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ( context.ownerDocument || context ) != document ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ( context.ownerDocument || context ) != document ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ( context.ownerDocument || context ) != document ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ( context.ownerDocument || context ) != document ) { yapÄ±yorum.
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

// Bu kÄ±sÄ±mda if ( ( elem.ownerDocument || elem ) != document ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ( elem.ownerDocument || elem ) != document ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ( elem.ownerDocument || elem ) != document ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ( elem.ownerDocument || elem ) != document ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ( elem.ownerDocument || elem ) != document ) { yapÄ±yorum.
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

// Bu kÄ±sÄ±mda val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase()... yapÄ±yorum.
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

// Bu kÄ±sÄ±mda hasDuplicate = !support.detectDuplicates; yapÄ±yorum.
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

// Bu kÄ±sÄ±mda sortInput = null; yapÄ±yorum.
// Bu kÄ±sÄ±mda sortInput = null; yapÄ±yorum.
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

// Bu kÄ±sÄ±mda while ( ( node = elem[ i++ ] ) ) { yapÄ±yorum.
		while ( ( node = elem[ i++ ] ) ) {

// Bu kÄ±sÄ±mda ret += getText( node ); yapÄ±yorum.
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

// Bu kÄ±sÄ±mda if ( typeof elem.textContent === "string" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof elem.textContent === "string" ) { yapÄ±yorum.
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

// Bu kÄ±sÄ±mda for ( elem = elem.firstChild; elem; elem = elem.nextSibling ... yapÄ±yorum.
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

// Bu kÄ±sÄ±mda return ret; yapÄ±yorum.

	return ret;
};

Expr = Sizzle.selectors = {

// Bu kÄ±sÄ±mda cacheLength: 50, yapÄ±yorum.
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

// Bu kÄ±sÄ±mda match[ 3 ] = ( match[ 3 ] || match[ 4 ] || yapÄ±yorum.
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

// Bu kÄ±sÄ±mda if ( !match[ 3 ] ) { yapÄ±yorum.
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

// Bu kÄ±sÄ±mda match[ 4 ] = +( match[ 4 ] ? yapÄ±yorum.
// Bu kÄ±sÄ±mda match[ 4 ] = +( match[ 4 ] ? yapÄ±yorum.
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

// Bu kÄ±sÄ±mda } else if ( match[ 3 ] ) { yapÄ±yorum.
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

// Bu kÄ±sÄ±mda if ( match[ 3 ] ) { yapÄ±yorum.
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

// Bu kÄ±sÄ±mda } else if ( unquoted && rpseudo.test( unquoted ) && yapÄ±yorum.
			} else if ( unquoted && rpseudo.test( unquoted ) &&

// Bu kÄ±sÄ±mda ( excess = tokenize( unquoted, true ) ) && yapÄ±yorum.
				( excess = tokenize( unquoted, true ) ) &&

// Bu kÄ±sÄ±mda ( excess = unquoted.indexOf( ")", unquoted.length - excess )... yapÄ±yorum.
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

// Bu kÄ±sÄ±mda match[ 0 ] = match[ 0 ].slice( 0, excess ); yapÄ±yorum.
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

// Bu kÄ±sÄ±mda return match.slice( 0, 3 ); yapÄ±yorum.
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

// Bu kÄ±sÄ±mda function( elem ) { yapÄ±yorum.
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

// Bu kÄ±sÄ±mda if ( simple ) { yapÄ±yorum.
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

// Bu kÄ±sÄ±mda start = dir = type === "only" && !start && "nextSibling"; yapÄ±yorum.
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

// Bu kÄ±sÄ±mda if ( forward && useCache ) { yapÄ±yorum.
						if ( forward && useCache ) {

// Bu kÄ±sÄ±mda node = parent; yapÄ±yorum.

// Bu kÄ±sÄ±mda node = parent; yapÄ±yorum.
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

// Bu kÄ±sÄ±mda uniqueCache = outerCache[ node.uniqueID ] || yapÄ±yorum.
// Bu kÄ±sÄ±mda uniqueCache = outerCache[ node.uniqueID ] || yapÄ±yorum.
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

// Bu kÄ±sÄ±mda ( diff = nodeIndex = 0 ) || start.pop() ) ) { yapÄ±yorum.
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

// Bu kÄ±sÄ±mda if ( node.nodeType === 1 && ++diff && node === elem ) { yapÄ±yorum.
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

// Bu kÄ±sÄ±mda if ( useCache ) { yapÄ±yorum.
							if ( useCache ) {

// Bu kÄ±sÄ±mda node = elem; yapÄ±yorum.
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

// Bu kÄ±sÄ±mda uniqueCache = outerCache[ node.uniqueID ] || yapÄ±yorum.
// Bu kÄ±sÄ±mda uniqueCache = outerCache[ node.uniqueID ] || yapÄ±yorum.
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

// Bu kÄ±sÄ±mda if ( diff === false ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( diff === false ) { yapÄ±yorum.
							if ( diff === false ) {

// Bu kÄ±sÄ±mda while ( ( node = ++nodeIndex && node && node[ dir ] || yapÄ±yorum.
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

// Bu kÄ±sÄ±mda if ( useCache ) { yapÄ±yorum.
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

// Bu kÄ±sÄ±mda uniqueCache = outerCache[ node.uniqueID ] || yapÄ±yorum.
// Bu kÄ±sÄ±mda uniqueCache = outerCache[ node.uniqueID ] || yapÄ±yorum.
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

// Bu kÄ±sÄ±mda diff -= last; yapÄ±yorum.
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

// Bu kÄ±sÄ±mda var args, yapÄ±yorum.
// Bu kÄ±sÄ±mda var args, yapÄ±yorum.
// Bu kÄ±sÄ±mda var args, yapÄ±yorum.
// Bu kÄ±sÄ±mda var args, yapÄ±yorum.
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

// Bu kÄ±sÄ±mda if ( fn[ expando ] ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( fn[ expando ] ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( fn[ expando ] ) { yapÄ±yorum.
			if ( fn[ expando ] ) {
				return fn( argument );
			}

// Bu kÄ±sÄ±mda if ( fn.length > 1 ) { yapÄ±yorum.
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

// Bu kÄ±sÄ±mda "not": markFunction( function( selector ) { yapÄ±yorum.
		"not": markFunction( function( selector ) {

// Bu kÄ±sÄ±mda var input = [], yapÄ±yorum.
// Bu kÄ±sÄ±mda var input = [], yapÄ±yorum.
// Bu kÄ±sÄ±mda var input = [], yapÄ±yorum.
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

// Bu kÄ±sÄ±mda while ( i-- ) { yapÄ±yorum.
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

// Bu kÄ±sÄ±mda input[ 0 ] = null; yapÄ±yorum.
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

// Bu kÄ±sÄ±mda "lang": markFunction( function( lang ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda "lang": markFunction( function( lang ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda "lang": markFunction( function( lang ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda "lang": markFunction( function( lang ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda "lang": markFunction( function( lang ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda "lang": markFunction( function( lang ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda "lang": markFunction( function( lang ) { yapÄ±yorum.
		"lang": markFunction( function( lang ) {

// Bu kÄ±sÄ±mda if ( !ridentifier.test( lang || "" ) ) { yapÄ±yorum.
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

// Bu kÄ±sÄ±mda "target": function( elem ) { yapÄ±yorum.
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

// Bu kÄ±sÄ±mda "enabled": createDisabledPseudo( false ), yapÄ±yorum.
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

// Bu kÄ±sÄ±mda var nodeName = elem.nodeName.toLowerCase(); yapÄ±yorum.
// Bu kÄ±sÄ±mda var nodeName = elem.nodeName.toLowerCase(); yapÄ±yorum.
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

// Bu kÄ±sÄ±mda if ( elem.parentNode ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem.parentNode ) { yapÄ±yorum.
			if ( elem.parentNode ) {
// Bu kÄ±sÄ±mda elem.parentNode.selectedIndex; yapÄ±yorum.
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

// Bu kÄ±sÄ±mda "empty": function( elem ) { yapÄ±yorum.
		"empty": function( elem ) {

// Bu kÄ±sÄ±mda for ( elem = elem.firstChild; elem; elem = elem.nextSibling ... yapÄ±yorum.
// Bu kÄ±sÄ±mda for ( elem = elem.firstChild; elem; elem = elem.nextSibling ... yapÄ±yorum.
// Bu kÄ±sÄ±mda for ( elem = elem.firstChild; elem; elem = elem.nextSibling ... yapÄ±yorum.
// Bu kÄ±sÄ±mda for ( elem = elem.firstChild; elem; elem = elem.nextSibling ... yapÄ±yorum.
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

// Bu kÄ±sÄ±mda "header": function( elem ) { yapÄ±yorum.
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

// Bu kÄ±sÄ±mda ( ( attr = elem.getAttribute( "type" ) ) == null || yapÄ±yorum.
// Bu kÄ±sÄ±mda ( ( attr = elem.getAttribute( "type" ) ) == null || yapÄ±yorum.
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

// Bu kÄ±sÄ±mda "first": createPositionalPseudo( function() { yapÄ±yorum.
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Bu kÄ±sÄ±mda for ( i in { radio: true, checkbox: true, file: true, passwo... yapÄ±yorum.
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Bu kÄ±sÄ±mda function setFilters() {} yapÄ±yorum.
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

// Bu kÄ±sÄ±mda if ( !matched || ( match = rcomma.exec( soFar ) ) ) { yapÄ±yorum.
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

// Bu kÄ±sÄ±mda soFar = soFar.slice( match[ 0 ].length ) || soFar; yapÄ±yorum.
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

// Bu kÄ±sÄ±mda if ( ( match = rcombinators.exec( soFar ) ) ) { yapÄ±yorum.
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

// Bu kÄ±sÄ±mda type: match[ 0 ].replace( rtrim, " " ) yapÄ±yorum.
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

// Bu kÄ±sÄ±mda for ( type in Expr.filter ) { yapÄ±yorum.
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

// Bu kÄ±sÄ±mda return parseOnly ? yapÄ±yorum.
// Bu kÄ±sÄ±mda return parseOnly ? yapÄ±yorum.
// Bu kÄ±sÄ±mda return parseOnly ? yapÄ±yorum.
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

// Bu kÄ±sÄ±mda tokenCache( selector, groups ).slice( 0 ); yapÄ±yorum.
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

// Bu kÄ±sÄ±mda function( elem, context, xml ) { yapÄ±yorum.
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

// Bu kÄ±sÄ±mda function( elem, context, xml ) { yapÄ±yorum.
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

// Bu kÄ±sÄ±mda if ( xml ) { yapÄ±yorum.
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

// Bu kÄ±sÄ±mda uniqueCache = outerCache[ elem.uniqueID ] || yapÄ±yorum.
// Bu kÄ±sÄ±mda uniqueCache = outerCache[ elem.uniqueID ] || yapÄ±yorum.
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

// Bu kÄ±sÄ±mda return ( newCache[ 2 ] = oldCache[ 2 ] ); yapÄ±yorum.
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

// Bu kÄ±sÄ±mda uniqueCache[ key ] = newCache; yapÄ±yorum.
							uniqueCache[ key ] = newCache;

// Bu kÄ±sÄ±mda if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) { yapÄ±yorum.
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

// Bu kÄ±sÄ±mda elems = seed || multipleContexts( yapÄ±yorum.
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

// Bu kÄ±sÄ±mda matcherIn = preFilter && ( seed || !selector ) ? yapÄ±yorum.
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

// Bu kÄ±sÄ±mda postFinder || ( seed ? preFilter : preexisting || postFilter... yapÄ±yorum.
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

// Bu kÄ±sÄ±mda [] : yapÄ±yorum.
					[] :

// Bu kÄ±sÄ±mda results : yapÄ±yorum.
					results :
				matcherIn;

// Bu kÄ±sÄ±mda if ( matcher ) { yapÄ±yorum.
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

// Bu kÄ±sÄ±mda if ( postFilter ) { yapÄ±yorum.
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

// Bu kÄ±sÄ±mda i = temp.length; yapÄ±yorum.
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

// Bu kÄ±sÄ±mda temp = []; yapÄ±yorum.
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

// Bu kÄ±sÄ±mda temp.push( ( matcherIn[ i ] = elem ) ); yapÄ±yorum.
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

// Bu kÄ±sÄ±mda i = matcherOut.length; yapÄ±yorum.
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

// Bu kÄ±sÄ±mda matchContext = addCombinator( function( elem ) { yapÄ±yorum.
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

// Bu kÄ±sÄ±mda checkContext = null; yapÄ±yorum.
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

// Bu kÄ±sÄ±mda if ( matcher[ expando ] ) { yapÄ±yorum.
			if ( matcher[ expando ] ) {

// Bu kÄ±sÄ±mda j = ++i; yapÄ±yorum.
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

// Bu kÄ±sÄ±mda tokens yapÄ±yorum.
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

// Bu kÄ±sÄ±mda elems = seed || byElement && Expr.find[ "TAG" ]( "*", outerm... yapÄ±yorum.
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

// Bu kÄ±sÄ±mda dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Mat... yapÄ±yorum.
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

// Bu kÄ±sÄ±mda outermostContext = context == document || context || outermo... yapÄ±yorum.
// Bu kÄ±sÄ±mda outermostContext = context == document || context || outermo... yapÄ±yorum.
// Bu kÄ±sÄ±mda outermostContext = context == document || context || outermo... yapÄ±yorum.
// Bu kÄ±sÄ±mda outermostContext = context == document || context || outermo... yapÄ±yorum.
				outermostContext = context == document || context || outermost;
			}

// Bu kÄ±sÄ±mda for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) { yapÄ±yorum.
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

// Bu kÄ±sÄ±mda if ( !context && elem.ownerDocument != document ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !context && elem.ownerDocument != document ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !context && elem.ownerDocument != document ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !context && elem.ownerDocument != document ) { yapÄ±yorum.
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

// Bu kÄ±sÄ±mda if ( bySet ) { yapÄ±yorum.
				if ( bySet ) {

// Bu kÄ±sÄ±mda if ( ( elem = !matcher && elem ) ) { yapÄ±yorum.
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

// Bu kÄ±sÄ±mda if ( seed ) { yapÄ±yorum.
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

// Bu kÄ±sÄ±mda matchedCount += i; yapÄ±yorum.
// Bu kÄ±sÄ±mda matchedCount += i; yapÄ±yorum.
			matchedCount += i;

// Bu kÄ±sÄ±mda if ( bySet && i !== matchedCount ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( bySet && i !== matchedCount ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( bySet && i !== matchedCount ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( bySet && i !== matchedCount ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( bySet && i !== matchedCount ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( bySet && i !== matchedCount ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( bySet && i !== matchedCount ) { yapÄ±yorum.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

// Bu kÄ±sÄ±mda if ( matchedCount > 0 ) { yapÄ±yorum.
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

// Bu kÄ±sÄ±mda setMatched = condense( setMatched ); yapÄ±yorum.
					setMatched = condense( setMatched );
				}

// Bu kÄ±sÄ±mda push.apply( results, setMatched ); yapÄ±yorum.
				push.apply( results, setMatched );

// Bu kÄ±sÄ±mda if ( outermost && !seed && setMatched.length > 0 && yapÄ±yorum.
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

// Bu kÄ±sÄ±mda if ( outermost ) { yapÄ±yorum.
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

// Bu kÄ±sÄ±mda if ( !match ) { yapÄ±yorum.
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

// Bu kÄ±sÄ±mda cached = compilerCache( yapÄ±yorum.
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

// Bu kÄ±sÄ±mda cached.selector = selector; yapÄ±yorum.
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

// Bu kÄ±sÄ±mda if ( match.length === 1 ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( match.length === 1 ) { yapÄ±yorum.
	if ( match.length === 1 ) {

// Bu kÄ±sÄ±mda tokens = match[ 0 ] = match[ 0 ].slice( 0 ); yapÄ±yorum.
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

// Bu kÄ±sÄ±mda } else if ( compiled ) { yapÄ±yorum.
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

// Bu kÄ±sÄ±mda i = matchExpr[ "needsContext" ].test( selector ) ? 0 : token... yapÄ±yorum.
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

// Bu kÄ±sÄ±mda if ( Expr.relative[ ( type = token.type ) ] ) { yapÄ±yorum.
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

// Bu kÄ±sÄ±mda if ( ( seed = find( yapÄ±yorum.
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

// Bu kÄ±sÄ±mda tokens.splice( i, 1 ); yapÄ±yorum.
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

// Bu kÄ±sÄ±mda ( compiled || compile( selector, match ) )( yapÄ±yorum.
// Bu kÄ±sÄ±mda ( compiled || compile( selector, match ) )( yapÄ±yorum.
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// Bu kÄ±sÄ±mda support.sortStable = expando.split( "" ).sort( sortOrder ).j... yapÄ±yorum.

// Bu kÄ±sÄ±mda support.sortStable = expando.split( "" ).sort( sortOrder ).j... yapÄ±yorum.
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Bu kÄ±sÄ±mda support.detectDuplicates = !!hasDuplicate; yapÄ±yorum.
// Bu kÄ±sÄ±mda support.detectDuplicates = !!hasDuplicate; yapÄ±yorum.
support.detectDuplicates = !!hasDuplicate;

// Bu kÄ±sÄ±mda setDocument(); yapÄ±yorum.
setDocument();

// Bu kÄ±sÄ±mda support.sortDetached = assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.sortDetached = assert( function( el ) { yapÄ±yorum.
support.sortDetached = assert( function( el ) {

// Bu kÄ±sÄ±mda return el.compareDocumentPosition( document.createElement( "... yapÄ±yorum.
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Bu kÄ±sÄ±mda if ( !assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !assert( function( el ) { yapÄ±yorum.
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Bu kÄ±sÄ±mda if ( !support.attributes || !assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.attributes || !assert( function( el ) { yapÄ±yorum.
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Bu kÄ±sÄ±mda if ( !assert( function( el ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !assert( function( el ) { yapÄ±yorum.
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Bu kÄ±sÄ±mda jQuery.expr[ ":" ] = jQuery.expr.pseudos; yapÄ±yorum.
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Bu kÄ±sÄ±mda function winnow( elements, qualifier, not ) { yapÄ±yorum.
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

// Bu kÄ±sÄ±mda if ( qualifier.nodeType ) { yapÄ±yorum.
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

// Bu kÄ±sÄ±mda if ( typeof qualifier !== "string" ) { yapÄ±yorum.
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

// Bu kÄ±sÄ±mda return jQuery.filter( qualifier, elements, not ); yapÄ±yorum.
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

// Bu kÄ±sÄ±mda typeof selector === "string" && rneedsContext.test( selector... yapÄ±yorum.
// Bu kÄ±sÄ±mda typeof selector === "string" && rneedsContext.test( selector... yapÄ±yorum.
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Bu kÄ±sÄ±mda var rootjQuery, yapÄ±yorum.


// Bu kÄ±sÄ±mda var rootjQuery, yapÄ±yorum.
var rootjQuery,

// Bu kÄ±sÄ±mda rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, yapÄ±yorum.
// Bu kÄ±sÄ±mda rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, yapÄ±yorum.
// Bu kÄ±sÄ±mda rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, yapÄ±yorum.
// Bu kÄ±sÄ±mda rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, yapÄ±yorum.
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

// Bu kÄ±sÄ±mda if ( !selector ) { yapÄ±yorum.
		if ( !selector ) {
			return this;
		}

// Bu kÄ±sÄ±mda root = root || rootjQuery; yapÄ±yorum.
// Bu kÄ±sÄ±mda root = root || rootjQuery; yapÄ±yorum.
		root = root || rootjQuery;

// Bu kÄ±sÄ±mda if ( typeof selector === "string" ) { yapÄ±yorum.
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

// Bu kÄ±sÄ±mda match = [ null, selector, null ]; yapÄ±yorum.
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

// Bu kÄ±sÄ±mda if ( match && ( match[ 1 ] || !context ) ) { yapÄ±yorum.
			if ( match && ( match[ 1 ] || !context ) ) {

// Bu kÄ±sÄ±mda if ( match[ 1 ] ) { yapÄ±yorum.
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

// Bu kÄ±sÄ±mda jQuery.merge( this, jQuery.parseHTML( yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.merge( this, jQuery.parseHTML( yapÄ±yorum.
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

// Bu kÄ±sÄ±mda if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( ... yapÄ±yorum.
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

// Bu kÄ±sÄ±mda if ( isFunction( this[ match ] ) ) { yapÄ±yorum.
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

// Bu kÄ±sÄ±mda this[ 0 ] = elem; yapÄ±yorum.
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

// Bu kÄ±sÄ±mda } else if ( !context || context.jquery ) { yapÄ±yorum.
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
			} else {
				return this.constructor( context ).find( selector );
			}

// Bu kÄ±sÄ±mda } else if ( selector.nodeType ) { yapÄ±yorum.
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

// Bu kÄ±sÄ±mda } else if ( isFunction( selector ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda } else if ( isFunction( selector ) ) { yapÄ±yorum.
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

// Bu kÄ±sÄ±mda selector( jQuery ); yapÄ±yorum.
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Bu kÄ±sÄ±mda init.prototype = jQuery.fn; yapÄ±yorum.
init.prototype = jQuery.fn;

// Bu kÄ±sÄ±mda rootjQuery = jQuery( document ); yapÄ±yorum.
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

// Bu kÄ±sÄ±mda guaranteedUnique = { yapÄ±yorum.
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

// Bu kÄ±sÄ±mda if ( !rneedsContext.test( selectors ) ) { yapÄ±yorum.
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

// Bu kÄ±sÄ±mda if ( cur.nodeType < 11 && ( targets ? yapÄ±yorum.
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

// Bu kÄ±sÄ±mda cur.nodeType === 1 && yapÄ±yorum.
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

// Bu kÄ±sÄ±mda index: function( elem ) { yapÄ±yorum.
	index: function( elem ) {

// Bu kÄ±sÄ±mda if ( !elem ) { yapÄ±yorum.
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

// Bu kÄ±sÄ±mda if ( typeof elem === "string" ) { yapÄ±yorum.
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

// Bu kÄ±sÄ±mda return indexOf.call( this, yapÄ±yorum.
		return indexOf.call( this,

// Bu kÄ±sÄ±mda elem.jquery ? elem[ 0 ] : elem yapÄ±yorum.
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

// Bu kÄ±sÄ±mda getProto( elem.contentDocument ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda getProto( elem.contentDocument ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda getProto( elem.contentDocument ) ) { yapÄ±yorum.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

// Bu kÄ±sÄ±mda if ( nodeName( elem, "template" ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( nodeName( elem, "template" ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( nodeName( elem, "template" ) ) { yapÄ±yorum.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

// Bu kÄ±sÄ±mda if ( !guaranteedUnique[ name ] ) { yapÄ±yorum.
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

// Bu kÄ±sÄ±mda if ( rparentsprev.test( name ) ) { yapÄ±yorum.
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Bu kÄ±sÄ±mda function createOptions( options ) { yapÄ±yorum.
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

// Bu kÄ±sÄ±mda options = typeof options === "string" ? yapÄ±yorum.
// Bu kÄ±sÄ±mda options = typeof options === "string" ? yapÄ±yorum.
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

// Bu kÄ±sÄ±mda memory, yapÄ±yorum.
		memory,

// Bu kÄ±sÄ±mda fired, yapÄ±yorum.
		fired,

// Bu kÄ±sÄ±mda locked, yapÄ±yorum.
		locked,

// Bu kÄ±sÄ±mda list = [], yapÄ±yorum.
		list = [],

// Bu kÄ±sÄ±mda queue = [], yapÄ±yorum.
		queue = [],

// Bu kÄ±sÄ±mda firingIndex = -1, yapÄ±yorum.
		firingIndex = -1,

// Bu kÄ±sÄ±mda fire = function() { yapÄ±yorum.
		fire = function() {

// Bu kÄ±sÄ±mda locked = locked || options.once; yapÄ±yorum.
			locked = locked || options.once;

// Bu kÄ±sÄ±mda fired = firing = true; yapÄ±yorum.
// Bu kÄ±sÄ±mda fired = firing = true; yapÄ±yorum.
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

// Bu kÄ±sÄ±mda if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) =... yapÄ±yorum.
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

// Bu kÄ±sÄ±mda firingIndex = list.length; yapÄ±yorum.
						firingIndex = list.length;
						memory = false;
					}
				}
			}

// Bu kÄ±sÄ±mda if ( !options.memory ) { yapÄ±yorum.
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

// Bu kÄ±sÄ±mda if ( locked ) { yapÄ±yorum.
			if ( locked ) {

// Bu kÄ±sÄ±mda if ( memory ) { yapÄ±yorum.
				if ( memory ) {
					list = [];

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
				} else {
					list = "";
				}
			}
		},

// Bu kÄ±sÄ±mda self = { yapÄ±yorum.
		self = {

// Bu kÄ±sÄ±mda add: function() { yapÄ±yorum.
			add: function() {
				if ( list ) {

// Bu kÄ±sÄ±mda if ( memory && !firing ) { yapÄ±yorum.
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

// Bu kÄ±sÄ±mda add( arg ); yapÄ±yorum.
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

// Bu kÄ±sÄ±mda remove: function() { yapÄ±yorum.
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

// Bu kÄ±sÄ±mda if ( index <= firingIndex ) { yapÄ±yorum.
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

// Bu kÄ±sÄ±mda has: function( fn ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda has: function( fn ) { yapÄ±yorum.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

// Bu kÄ±sÄ±mda empty: function() { yapÄ±yorum.
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

// Bu kÄ±sÄ±mda disable: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda disable: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda disable: function() { yapÄ±yorum.
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

// Bu kÄ±sÄ±mda lock: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda lock: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda lock: function() { yapÄ±yorum.
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

// Bu kÄ±sÄ±mda fireWith: function( context, args ) { yapÄ±yorum.
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

// Bu kÄ±sÄ±mda fire: function() { yapÄ±yorum.
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

// Bu kÄ±sÄ±mda fired: function() { yapÄ±yorum.
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

// Bu kÄ±sÄ±mda if ( value && isFunction( ( method = value.promise ) ) ) { yapÄ±yorum.
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

// Bu kÄ±sÄ±mda } else if ( value && isFunction( ( method = value.then ) ) )... yapÄ±yorum.
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
		} else {

// Bu kÄ±sÄ±mda resolve.apply( undefined, [ value ].slice( noValue ) ); yapÄ±yorum.
// Bu kÄ±sÄ±mda resolve.apply( undefined, [ value ].slice( noValue ) ); yapÄ±yorum.
// Bu kÄ±sÄ±mda resolve.apply( undefined, [ value ].slice( noValue ) ); yapÄ±yorum.
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

// Bu kÄ±sÄ±mda } catch ( value ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda } catch ( value ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda } catch ( value ) { yapÄ±yorum.
	} catch ( value ) {

// Bu kÄ±sÄ±mda reject.apply( undefined, [ value ] ); yapÄ±yorum.
// Bu kÄ±sÄ±mda reject.apply( undefined, [ value ] ); yapÄ±yorum.
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

// Bu kÄ±sÄ±mda [ "notify", "progress", jQuery.Callbacks( "memory" ), yapÄ±yorum.
// Bu kÄ±sÄ±mda [ "notify", "progress", jQuery.Callbacks( "memory" ), yapÄ±yorum.
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

// Bu kÄ±sÄ±mda pipe: function( /* fnDone, fnFail, fnProgress */ ) { yapÄ±yorum.
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

// Bu kÄ±sÄ±mda var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ... yapÄ±yorum.
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

// Bu kÄ±sÄ±mda deferred[ tuple[ 1 ] ]( function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda deferred[ tuple[ 1 ] ]( function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda deferred[ tuple[ 1 ] ]( function() { yapÄ±yorum.
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

// Bu kÄ±sÄ±mda if ( depth < maxDepth ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( depth < maxDepth ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( depth < maxDepth ) { yapÄ±yorum.
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

// Bu kÄ±sÄ±mda if ( returned === deferred.promise() ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( returned === deferred.promise() ) { yapÄ±yorum.
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

// Bu kÄ±sÄ±mda then = returned && yapÄ±yorum.
// Bu kÄ±sÄ±mda then = returned && yapÄ±yorum.
// Bu kÄ±sÄ±mda then = returned && yapÄ±yorum.
// Bu kÄ±sÄ±mda then = returned && yapÄ±yorum.
									then = returned &&

// Bu kÄ±sÄ±mda ( typeof returned === "object" || yapÄ±yorum.
// Bu kÄ±sÄ±mda ( typeof returned === "object" || yapÄ±yorum.
// Bu kÄ±sÄ±mda ( typeof returned === "object" || yapÄ±yorum.
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

// Bu kÄ±sÄ±mda if ( isFunction( then ) ) { yapÄ±yorum.
									if ( isFunction( then ) ) {

// Bu kÄ±sÄ±mda if ( special ) { yapÄ±yorum.
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
										} else {

// Bu kÄ±sÄ±mda maxDepth++; yapÄ±yorum.
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
									} else {

// Bu kÄ±sÄ±mda if ( handler !== Identity ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( handler !== Identity ) { yapÄ±yorum.
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

// Bu kÄ±sÄ±mda ( special || deferred.resolveWith )( that, args ); yapÄ±yorum.
// Bu kÄ±sÄ±mda ( special || deferred.resolveWith )( that, args ); yapÄ±yorum.
										( special || deferred.resolveWith )( that, args );
									}
								},

// Bu kÄ±sÄ±mda process = special ? yapÄ±yorum.
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

// Bu kÄ±sÄ±mda if ( depth + 1 >= maxDepth ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( depth + 1 >= maxDepth ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( depth + 1 >= maxDepth ) { yapÄ±yorum.
											if ( depth + 1 >= maxDepth ) {

// Bu kÄ±sÄ±mda if ( handler !== Thrower ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( handler !== Thrower ) { yapÄ±yorum.
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

// Bu kÄ±sÄ±mda if ( depth ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( depth ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( depth ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( depth ) { yapÄ±yorum.
							if ( depth ) {
								process();
							} else {

// Bu kÄ±sÄ±mda if ( jQuery.Deferred.getStackHook ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( jQuery.Deferred.getStackHook ) { yapÄ±yorum.
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

// Bu kÄ±sÄ±mda tuples[ 0 ][ 3 ].add( yapÄ±yorum.
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

// Bu kÄ±sÄ±mda tuples[ 1 ][ 3 ].add( yapÄ±yorum.
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

// Bu kÄ±sÄ±mda tuples[ 2 ][ 3 ].add( yapÄ±yorum.
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

// Bu kÄ±sÄ±mda promise: function( obj ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda promise: function( obj ) { yapÄ±yorum.
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

// Bu kÄ±sÄ±mda jQuery.each( tuples, function( i, tuple ) { yapÄ±yorum.
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

// Bu kÄ±sÄ±mda promise[ tuple[ 1 ] ] = list.add; yapÄ±yorum.
// Bu kÄ±sÄ±mda promise[ tuple[ 1 ] ] = list.add; yapÄ±yorum.
// Bu kÄ±sÄ±mda promise[ tuple[ 1 ] ] = list.add; yapÄ±yorum.
			promise[ tuple[ 1 ] ] = list.add;

// Bu kÄ±sÄ±mda if ( stateString ) { yapÄ±yorum.
			if ( stateString ) {
				list.add(
					function() {

// Bu kÄ±sÄ±mda state = stateString; yapÄ±yorum.
// Bu kÄ±sÄ±mda state = stateString; yapÄ±yorum.
						state = stateString;
					},

// Bu kÄ±sÄ±mda tuples[ 3 - i ][ 2 ].disable, yapÄ±yorum.
// Bu kÄ±sÄ±mda tuples[ 3 - i ][ 2 ].disable, yapÄ±yorum.
					tuples[ 3 - i ][ 2 ].disable,

// Bu kÄ±sÄ±mda tuples[ 3 - i ][ 3 ].disable, yapÄ±yorum.
// Bu kÄ±sÄ±mda tuples[ 3 - i ][ 3 ].disable, yapÄ±yorum.
					tuples[ 3 - i ][ 3 ].disable,

// Bu kÄ±sÄ±mda tuples[ 0 ][ 2 ].lock, yapÄ±yorum.
					tuples[ 0 ][ 2 ].lock,

// Bu kÄ±sÄ±mda tuples[ 0 ][ 3 ].lock yapÄ±yorum.
					tuples[ 0 ][ 3 ].lock
				);
			}

// Bu kÄ±sÄ±mda list.add( tuple[ 3 ].fire ); yapÄ±yorum.
// Bu kÄ±sÄ±mda list.add( tuple[ 3 ].fire ); yapÄ±yorum.
// Bu kÄ±sÄ±mda list.add( tuple[ 3 ].fire ); yapÄ±yorum.
			list.add( tuple[ 3 ].fire );

// Bu kÄ±sÄ±mda deferred[ tuple[ 0 ] ] = function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda deferred[ tuple[ 0 ] ] = function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda deferred[ tuple[ 0 ] ] = function() { yapÄ±yorum.
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

// Bu kÄ±sÄ±mda deferred[ tuple[ 0 ] + "With" ] = list.fireWith; yapÄ±yorum.
// Bu kÄ±sÄ±mda deferred[ tuple[ 0 ] + "With" ] = list.fireWith; yapÄ±yorum.
// Bu kÄ±sÄ±mda deferred[ tuple[ 0 ] + "With" ] = list.fireWith; yapÄ±yorum.
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

// Bu kÄ±sÄ±mda promise.promise( deferred ); yapÄ±yorum.
		promise.promise( deferred );

// Bu kÄ±sÄ±mda if ( func ) { yapÄ±yorum.
		if ( func ) {
			func.call( deferred, deferred );
		}

// Bu kÄ±sÄ±mda return deferred; yapÄ±yorum.
		return deferred;
	},

// Bu kÄ±sÄ±mda when: function( singleValue ) { yapÄ±yorum.
	when: function( singleValue ) {
		var

// Bu kÄ±sÄ±mda remaining = arguments.length, yapÄ±yorum.
			remaining = arguments.length,

// Bu kÄ±sÄ±mda i = remaining, yapÄ±yorum.
			i = remaining,

// Bu kÄ±sÄ±mda resolveContexts = Array( i ), yapÄ±yorum.
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

// Bu kÄ±sÄ±mda primary = jQuery.Deferred(), yapÄ±yorum.
			primary = jQuery.Deferred(),

// Bu kÄ±sÄ±mda updateFunc = function( i ) { yapÄ±yorum.
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

// Bu kÄ±sÄ±mda if ( remaining <= 1 ) { yapÄ±yorum.
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

// Bu kÄ±sÄ±mda if ( primary.state() === "pending" || yapÄ±yorum.
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

// Bu kÄ±sÄ±mda while ( i-- ) { yapÄ±yorum.
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// Bu kÄ±sÄ±mda var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Ty... yapÄ±yorum.
// Bu kÄ±sÄ±mda var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Ty... yapÄ±yorum.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

// Bu kÄ±sÄ±mda if ( window.console && window.console.warn && error && rerro... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( window.console && window.console.warn && error && rerro... yapÄ±yorum.
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// Bu kÄ±sÄ±mda var readyList = jQuery.Deferred(); yapÄ±yorum.
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

// Bu kÄ±sÄ±mda .catch( function( error ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda .catch( function( error ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda .catch( function( error ) { yapÄ±yorum.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

// Bu kÄ±sÄ±mda isReady: false, yapÄ±yorum.
	isReady: false,

// Bu kÄ±sÄ±mda readyWait: 1, yapÄ±yorum.
// Bu kÄ±sÄ±mda readyWait: 1, yapÄ±yorum.
	readyWait: 1,

// Bu kÄ±sÄ±mda ready: function( wait ) { yapÄ±yorum.
	ready: function( wait ) {

// Bu kÄ±sÄ±mda if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) { yapÄ±yorum.
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

// Bu kÄ±sÄ±mda jQuery.isReady = true; yapÄ±yorum.
		jQuery.isReady = true;

// Bu kÄ±sÄ±mda if ( wait !== true && --jQuery.readyWait > 0 ) { yapÄ±yorum.
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

// Bu kÄ±sÄ±mda readyList.resolveWith( document, [ jQuery ] ); yapÄ±yorum.
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// Bu kÄ±sÄ±mda function completed() { yapÄ±yorum.
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Bu kÄ±sÄ±mda if ( document.readyState === "complete" || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( document.readyState === "complete" || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( document.readyState === "complete" || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( document.readyState === "complete" || yapÄ±yorum.
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

// Bu kÄ±sÄ±mda window.setTimeout( jQuery.ready ); yapÄ±yorum.
	window.setTimeout( jQuery.ready );

} else {

// Bu kÄ±sÄ±mda document.addEventListener( "DOMContentLoaded", completed ); yapÄ±yorum.
	document.addEventListener( "DOMContentLoaded", completed );

// Bu kÄ±sÄ±mda window.addEventListener( "load", completed ); yapÄ±yorum.
	window.addEventListener( "load", completed );
}




// Bu kÄ±sÄ±mda var access = function( elems, fn, key, value, chainable, emp... yapÄ±yorum.
// Bu kÄ±sÄ±mda var access = function( elems, fn, key, value, chainable, emp... yapÄ±yorum.
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

// Bu kÄ±sÄ±mda if ( toType( key ) === "object" ) { yapÄ±yorum.
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

// Bu kÄ±sÄ±mda } else if ( value !== undefined ) { yapÄ±yorum.
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

// Bu kÄ±sÄ±mda if ( raw ) { yapÄ±yorum.
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

// Bu kÄ±sÄ±mda if ( bulk ) { yapÄ±yorum.
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Bu kÄ±sÄ±mda var rmsPrefix = /^-ms-/, yapÄ±yorum.
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Bu kÄ±sÄ±mda function fcamelCase( _all, letter ) { yapÄ±yorum.
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Bu kÄ±sÄ±mda function camelCase( string ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function camelCase( string ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function camelCase( string ) { yapÄ±yorum.
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

// Bu kÄ±sÄ±mda return owner.nodeType === 1 || owner.nodeType === 9 || !( +o... yapÄ±yorum.
// Bu kÄ±sÄ±mda return owner.nodeType === 1 || owner.nodeType === 9 || !( +o... yapÄ±yorum.
// Bu kÄ±sÄ±mda return owner.nodeType === 1 || owner.nodeType === 9 || !( +o... yapÄ±yorum.
// Bu kÄ±sÄ±mda return owner.nodeType === 1 || owner.nodeType === 9 || !( +o... yapÄ±yorum.
// Bu kÄ±sÄ±mda return owner.nodeType === 1 || owner.nodeType === 9 || !( +o... yapÄ±yorum.
// Bu kÄ±sÄ±mda return owner.nodeType === 1 || owner.nodeType === 9 || !( +o... yapÄ±yorum.
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

// Bu kÄ±sÄ±mda var value = owner[ this.expando ]; yapÄ±yorum.
		var value = owner[ this.expando ];

// Bu kÄ±sÄ±mda if ( !value ) { yapÄ±yorum.
		if ( !value ) {
			value = {};

// Bu kÄ±sÄ±mda if ( acceptData( owner ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( acceptData( owner ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( acceptData( owner ) ) { yapÄ±yorum.
			if ( acceptData( owner ) ) {

// Bu kÄ±sÄ±mda if ( owner.nodeType ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( owner.nodeType ) { yapÄ±yorum.
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

// Bu kÄ±sÄ±mda if ( typeof data === "string" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof data === "string" ) { yapÄ±yorum.
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
		} else {

// Bu kÄ±sÄ±mda for ( prop in data ) { yapÄ±yorum.
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

// Bu kÄ±sÄ±mda owner[ this.expando ] && owner[ this.expando ][ camelCase( k... yapÄ±yorum.
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

// Bu kÄ±sÄ±mda if ( key === undefined || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( key === undefined || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( key === undefined || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( key === undefined || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( key === undefined || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( key === undefined || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( key === undefined || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( key === undefined || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( key === undefined || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( key === undefined || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( key === undefined || yapÄ±yorum.
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

// Bu kÄ±sÄ±mda this.set( owner, key, value ); yapÄ±yorum.
// Bu kÄ±sÄ±mda this.set( owner, key, value ); yapÄ±yorum.
// Bu kÄ±sÄ±mda this.set( owner, key, value ); yapÄ±yorum.
// Bu kÄ±sÄ±mda this.set( owner, key, value ); yapÄ±yorum.
// Bu kÄ±sÄ±mda this.set( owner, key, value ); yapÄ±yorum.
// Bu kÄ±sÄ±mda this.set( owner, key, value ); yapÄ±yorum.
		this.set( owner, key, value );

// Bu kÄ±sÄ±mda return value !== undefined ? value : key; yapÄ±yorum.
// Bu kÄ±sÄ±mda return value !== undefined ? value : key; yapÄ±yorum.
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

// Bu kÄ±sÄ±mda if ( Array.isArray( key ) ) { yapÄ±yorum.
			if ( Array.isArray( key ) ) {

// Bu kÄ±sÄ±mda key = key.map( camelCase ); yapÄ±yorum.
// Bu kÄ±sÄ±mda key = key.map( camelCase ); yapÄ±yorum.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

// Bu kÄ±sÄ±mda key = key in cache ? yapÄ±yorum.
// Bu kÄ±sÄ±mda key = key in cache ? yapÄ±yorum.
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

// Bu kÄ±sÄ±mda if ( key === undefined || jQuery.isEmptyObject( cache ) ) { yapÄ±yorum.
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

// Bu kÄ±sÄ±mda if ( owner.nodeType ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( owner.nodeType ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( owner.nodeType ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( owner.nodeType ) { yapÄ±yorum.
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



// Bu kÄ±sÄ±mda var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, yapÄ±yorum.
// Bu kÄ±sÄ±mda var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, yapÄ±yorum.
// Bu kÄ±sÄ±mda var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, yapÄ±yorum.
// Bu kÄ±sÄ±mda var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, yapÄ±yorum.
// Bu kÄ±sÄ±mda var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, yapÄ±yorum.
// Bu kÄ±sÄ±mda var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, yapÄ±yorum.
// Bu kÄ±sÄ±mda var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, yapÄ±yorum.
// Bu kÄ±sÄ±mda var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, yapÄ±yorum.
// Bu kÄ±sÄ±mda var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, yapÄ±yorum.

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

// Bu kÄ±sÄ±mda if ( data === +data + "" ) { yapÄ±yorum.
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

// Bu kÄ±sÄ±mda if ( data === undefined && elem.nodeType === 1 ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( data === undefined && elem.nodeType === 1 ) { yapÄ±yorum.
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

// Bu kÄ±sÄ±mda dataUser.set( elem, key, data ); yapÄ±yorum.
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

// Bu kÄ±sÄ±mda _data: function( elem, name, data ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda _data: function( elem, name, data ) { yapÄ±yorum.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

// Bu kÄ±sÄ±mda if ( key === undefined ) { yapÄ±yorum.
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

// Bu kÄ±sÄ±mda if ( attrs[ i ] ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( attrs[ i ] ) { yapÄ±yorum.
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

// Bu kÄ±sÄ±mda if ( typeof key === "object" ) { yapÄ±yorum.
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

// Bu kÄ±sÄ±mda if ( elem && value === undefined ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem && value === undefined ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem && value === undefined ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem && value === undefined ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( elem && value === undefined ) { yapÄ±yorum.
			if ( elem && value === undefined ) {

// Bu kÄ±sÄ±mda data = dataUser.get( elem, key ); yapÄ±yorum.
// Bu kÄ±sÄ±mda data = dataUser.get( elem, key ); yapÄ±yorum.
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

// Bu kÄ±sÄ±mda data = dataAttr( elem, key ); yapÄ±yorum.
// Bu kÄ±sÄ±mda data = dataAttr( elem, key ); yapÄ±yorum.
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

// Bu kÄ±sÄ±mda return; yapÄ±yorum.
				return;
			}

// Bu kÄ±sÄ±mda this.each( function() { yapÄ±yorum.
			this.each( function() {

// Bu kÄ±sÄ±mda dataUser.set( this, key, value ); yapÄ±yorum.
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

// Bu kÄ±sÄ±mda if ( data ) { yapÄ±yorum.
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

// Bu kÄ±sÄ±mda if ( fn === "inprogress" ) { yapÄ±yorum.
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

// Bu kÄ±sÄ±mda if ( type === "fx" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( type === "fx" ) { yapÄ±yorum.
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

// Bu kÄ±sÄ±mda delete hooks.stop; yapÄ±yorum.
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

// Bu kÄ±sÄ±mda _queueHooks: function( elem, type ) { yapÄ±yorum.
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

// Bu kÄ±sÄ±mda jQuery._queueHooks( this, type ); yapÄ±yorum.
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

// Bu kÄ±sÄ±mda promise: function( type, obj ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda promise: function( type, obj ) { yapÄ±yorum.
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

// Bu kÄ±sÄ±mda if ( documentElement.getRootNode ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( documentElement.getRootNode ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( documentElement.getRootNode ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( documentElement.getRootNode ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( documentElement.getRootNode ) { yapÄ±yorum.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

// Bu kÄ±sÄ±mda elem = el || elem; yapÄ±yorum.
// Bu kÄ±sÄ±mda elem = el || elem; yapÄ±yorum.
		elem = el || elem;

// Bu kÄ±sÄ±mda return elem.style.display === "none" || yapÄ±yorum.
		return elem.style.display === "none" ||
			elem.style.display === "" &&

// Bu kÄ±sÄ±mda isAttached( elem ) && yapÄ±yorum.
// Bu kÄ±sÄ±mda isAttached( elem ) && yapÄ±yorum.
// Bu kÄ±sÄ±mda isAttached( elem ) && yapÄ±yorum.
// Bu kÄ±sÄ±mda isAttached( elem ) && yapÄ±yorum.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

// Bu kÄ±sÄ±mda initialInUnit = elem.nodeType && yapÄ±yorum.
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

// Bu kÄ±sÄ±mda initial = initial / 2; yapÄ±yorum.
// Bu kÄ±sÄ±mda initial = initial / 2; yapÄ±yorum.
		initial = initial / 2;

// Bu kÄ±sÄ±mda unit = unit || initialInUnit[ 3 ]; yapÄ±yorum.
		unit = unit || initialInUnit[ 3 ];

// Bu kÄ±sÄ±mda initialInUnit = +initial || 1; yapÄ±yorum.
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

// Bu kÄ±sÄ±mda jQuery.style( elem, prop, initialInUnit + unit ); yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.style( elem, prop, initialInUnit + unit ); yapÄ±yorum.
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

// Bu kÄ±sÄ±mda valueParts = valueParts || []; yapÄ±yorum.
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

// Bu kÄ±sÄ±mda adjusted = valueParts[ 1 ] ? yapÄ±yorum.
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

// Bu kÄ±sÄ±mda for ( ; index < length; index++ ) { yapÄ±yorum.
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

// Bu kÄ±sÄ±mda if ( display === "none" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( display === "none" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( display === "none" ) { yapÄ±yorum.
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

// Bu kÄ±sÄ±mda dataPriv.set( elem, "display", display ); yapÄ±yorum.
				dataPriv.set( elem, "display", display );
			}
		}
	}

// Bu kÄ±sÄ±mda for ( index = 0; index < length; index++ ) { yapÄ±yorum.
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

// Bu kÄ±sÄ±mda input.setAttribute( "type", "radio" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda input.setAttribute( "type", "radio" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda input.setAttribute( "type", "radio" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda input.setAttribute( "type", "radio" ); yapÄ±yorum.
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

// Bu kÄ±sÄ±mda support.checkClone = div.cloneNode( true ).cloneNode( true )... yapÄ±yorum.
// Bu kÄ±sÄ±mda support.checkClone = div.cloneNode( true ).cloneNode( true )... yapÄ±yorum.
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

// Bu kÄ±sÄ±mda div.innerHTML = "<textarea>x</textarea>"; yapÄ±yorum.
// Bu kÄ±sÄ±mda div.innerHTML = "<textarea>x</textarea>"; yapÄ±yorum.
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

// Bu kÄ±sÄ±mda div.innerHTML = "<option></option>"; yapÄ±yorum.
// Bu kÄ±sÄ±mda div.innerHTML = "<option></option>"; yapÄ±yorum.
// Bu kÄ±sÄ±mda div.innerHTML = "<option></option>"; yapÄ±yorum.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// Bu kÄ±sÄ±mda var wrapMap = { yapÄ±yorum.
var wrapMap = {

// Bu kÄ±sÄ±mda thead: [ 1, "<table>", "</table>" ], yapÄ±yorum.
// Bu kÄ±sÄ±mda thead: [ 1, "<table>", "</table>" ], yapÄ±yorum.
// Bu kÄ±sÄ±mda thead: [ 1, "<table>", "</table>" ], yapÄ±yorum.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Bu kÄ±sÄ±mda if ( !support.option ) { yapÄ±yorum.
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

// Bu kÄ±sÄ±mda var ret; yapÄ±yorum.
// Bu kÄ±sÄ±mda var ret; yapÄ±yorum.
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Bu kÄ±sÄ±mda function setGlobalEval( elems, refElements ) { yapÄ±yorum.
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

// Bu kÄ±sÄ±mda if ( toType( elem ) === "object" ) { yapÄ±yorum.
			if ( toType( elem ) === "object" ) {

// Bu kÄ±sÄ±mda jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem ); yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem ); yapÄ±yorum.
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

// Bu kÄ±sÄ±mda } else if ( !rhtml.test( elem ) ) { yapÄ±yorum.
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

// Bu kÄ±sÄ±mda tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCa... yapÄ±yorum.
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

// Bu kÄ±sÄ±mda j = wrap[ 0 ]; yapÄ±yorum.
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

// Bu kÄ±sÄ±mda jQuery.merge( nodes, tmp.childNodes ); yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.merge( nodes, tmp.childNodes ); yapÄ±yorum.
				jQuery.merge( nodes, tmp.childNodes );

// Bu kÄ±sÄ±mda tmp = fragment.firstChild; yapÄ±yorum.
				tmp = fragment.firstChild;

// Bu kÄ±sÄ±mda tmp.textContent = ""; yapÄ±yorum.
				tmp.textContent = "";
			}
		}
	}

// Bu kÄ±sÄ±mda fragment.textContent = ""; yapÄ±yorum.
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

// Bu kÄ±sÄ±mda if ( selection && jQuery.inArray( elem, selection ) > -1 ) { yapÄ±yorum.
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

// Bu kÄ±sÄ±mda tmp = getAll( fragment.appendChild( elem ), "script" ); yapÄ±yorum.
		tmp = getAll( fragment.appendChild( elem ), "script" );

// Bu kÄ±sÄ±mda if ( attached ) { yapÄ±yorum.
		if ( attached ) {
			setGlobalEval( tmp );
		}

// Bu kÄ±sÄ±mda if ( scripts ) { yapÄ±yorum.
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Bu kÄ±sÄ±mda function expectSync( elem, type ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function expectSync( elem, type ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function expectSync( elem, type ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function expectSync( elem, type ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function expectSync( elem, type ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function expectSync( elem, type ) { yapÄ±yorum.
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Bu kÄ±sÄ±mda function safeActiveElement() { yapÄ±yorum.
// Bu kÄ±sÄ±mda function safeActiveElement() { yapÄ±yorum.
// Bu kÄ±sÄ±mda function safeActiveElement() { yapÄ±yorum.
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

// Bu kÄ±sÄ±mda if ( typeof types === "object" ) { yapÄ±yorum.
	if ( typeof types === "object" ) {

// Bu kÄ±sÄ±mda if ( typeof selector !== "string" ) { yapÄ±yorum.
		if ( typeof selector !== "string" ) {

// Bu kÄ±sÄ±mda data = data || selector; yapÄ±yorum.
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

// Bu kÄ±sÄ±mda fn = selector; yapÄ±yorum.
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

// Bu kÄ±sÄ±mda fn = data; yapÄ±yorum.
			fn = data;
			data = undefined;
		} else {

// Bu kÄ±sÄ±mda fn = data; yapÄ±yorum.
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

// Bu kÄ±sÄ±mda jQuery().off( event ); yapÄ±yorum.
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

// Bu kÄ±sÄ±mda fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ ); yapÄ±yorum.
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

// Bu kÄ±sÄ±mda if ( !acceptData( elem ) ) { yapÄ±yorum.
		if ( !acceptData( elem ) ) {
			return;
		}

// Bu kÄ±sÄ±mda if ( handler.handler ) { yapÄ±yorum.
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

// Bu kÄ±sÄ±mda if ( selector ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( selector ) { yapÄ±yorum.
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

// Bu kÄ±sÄ±mda if ( !handler.guid ) { yapÄ±yorum.
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

// Bu kÄ±sÄ±mda if ( !( events = elemData.events ) ) { yapÄ±yorum.
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

// Bu kÄ±sÄ±mda return typeof jQuery !== "undefined" && jQuery.event.trigger... yapÄ±yorum.
// Bu kÄ±sÄ±mda return typeof jQuery !== "undefined" && jQuery.event.trigger... yapÄ±yorum.
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

// Bu kÄ±sÄ±mda types = ( types || "" ).match( rnothtmlwhite ) || [ "" ]; yapÄ±yorum.
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

// Bu kÄ±sÄ±mda if ( !type ) { yapÄ±yorum.
			if ( !type ) {
				continue;
			}

// Bu kÄ±sÄ±mda special = jQuery.event.special[ type ] || {}; yapÄ±yorum.
			special = jQuery.event.special[ type ] || {};

// Bu kÄ±sÄ±mda type = ( selector ? special.delegateType : special.bindType ... yapÄ±yorum.
			type = ( selector ? special.delegateType : special.bindType ) || type;

// Bu kÄ±sÄ±mda special = jQuery.event.special[ type ] || {}; yapÄ±yorum.
			special = jQuery.event.special[ type ] || {};

// Bu kÄ±sÄ±mda handleObj = jQuery.extend( { yapÄ±yorum.
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

// Bu kÄ±sÄ±mda if ( !( handlers = events[ type ] ) ) { yapÄ±yorum.
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

// Bu kÄ±sÄ±mda if ( !special.setup || yapÄ±yorum.
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

// Bu kÄ±sÄ±mda if ( selector ) { yapÄ±yorum.
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

// Bu kÄ±sÄ±mda jQuery.event.global[ type ] = true; yapÄ±yorum.
			jQuery.event.global[ type ] = true;
		}

	},

// Bu kÄ±sÄ±mda remove: function( elem, types, handler, selector, mappedType... yapÄ±yorum.
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

// Bu kÄ±sÄ±mda types = ( types || "" ).match( rnothtmlwhite ) || [ "" ]; yapÄ±yorum.
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

// Bu kÄ±sÄ±mda if ( !type ) { yapÄ±yorum.
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

// Bu kÄ±sÄ±mda origCount = j = handlers.length; yapÄ±yorum.
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

// Bu kÄ±sÄ±mda if ( origCount && !handlers.length ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( origCount && !handlers.length ) { yapÄ±yorum.
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

// Bu kÄ±sÄ±mda if ( jQuery.isEmptyObject( events ) ) { yapÄ±yorum.
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

// Bu kÄ±sÄ±mda event = jQuery.event.fix( nativeEvent ), yapÄ±yorum.
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

// Bu kÄ±sÄ±mda args[ 0 ] = event; yapÄ±yorum.
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

// Bu kÄ±sÄ±mda if ( special.preDispatch && special.preDispatch.call( this, ... yapÄ±yorum.
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

// Bu kÄ±sÄ±mda handlerQueue = jQuery.event.handlers.call( this, event, hand... yapÄ±yorum.
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

// Bu kÄ±sÄ±mda i = 0; yapÄ±yorum.
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

// Bu kÄ±sÄ±mda if ( !event.rnamespace || handleObj.namespace === false || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !event.rnamespace || handleObj.namespace === false || yapÄ±yorum.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

// Bu kÄ±sÄ±mda if ( special.postDispatch ) { yapÄ±yorum.
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

// Bu kÄ±sÄ±mda if ( delegateCount && yapÄ±yorum.
		if ( delegateCount &&

// Bu kÄ±sÄ±mda cur.nodeType && yapÄ±yorum.
// Bu kÄ±sÄ±mda cur.nodeType && yapÄ±yorum.
			cur.nodeType &&

// Bu kÄ±sÄ±mda !( event.type === "click" && event.button >= 1 ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda !( event.type === "click" && event.button >= 1 ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda !( event.type === "click" && event.button >= 1 ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda !( event.type === "click" && event.button >= 1 ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda !( event.type === "click" && event.button >= 1 ) ) { yapÄ±yorum.
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

// Bu kÄ±sÄ±mda if ( cur.nodeType === 1 && !( event.type === "click" && cur.... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( cur.nodeType === 1 && !( event.type === "click" && cur.... yapÄ±yorum.
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

// Bu kÄ±sÄ±mda sel = handleObj.selector + " "; yapÄ±yorum.
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

// Bu kÄ±sÄ±mda cur = this; yapÄ±yorum.
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

// Bu kÄ±sÄ±mda noBubble: true yapÄ±yorum.
			noBubble: true
		},
		click: {

// Bu kÄ±sÄ±mda setup: function( data ) { yapÄ±yorum.
			setup: function( data ) {

// Bu kÄ±sÄ±mda var el = this || data; yapÄ±yorum.
// Bu kÄ±sÄ±mda var el = this || data; yapÄ±yorum.
				var el = this || data;

// Bu kÄ±sÄ±mda if ( rcheckableType.test( el.type ) && yapÄ±yorum.
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

// Bu kÄ±sÄ±mda leverageNative( el, "click", returnTrue ); yapÄ±yorum.
					leverageNative( el, "click", returnTrue );
				}

// Bu kÄ±sÄ±mda return false; yapÄ±yorum.
				return false;
			},
			trigger: function( data ) {

// Bu kÄ±sÄ±mda var el = this || data; yapÄ±yorum.
// Bu kÄ±sÄ±mda var el = this || data; yapÄ±yorum.
				var el = this || data;

// Bu kÄ±sÄ±mda if ( rcheckableType.test( el.type ) && yapÄ±yorum.
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

// Bu kÄ±sÄ±mda return true; yapÄ±yorum.
				return true;
			},

// Bu kÄ±sÄ±mda _default: function( event ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda _default: function( event ) { yapÄ±yorum.
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

// Bu kÄ±sÄ±mda if ( event.result !== undefined && event.originalEvent ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( event.result !== undefined && event.originalEvent ) { yapÄ±yorum.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Bu kÄ±sÄ±mda function leverageNative( el, type, expectSync ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function leverageNative( el, type, expectSync ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function leverageNative( el, type, expectSync ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function leverageNative( el, type, expectSync ) { yapÄ±yorum.
function leverageNative( el, type, expectSync ) {

// Bu kÄ±sÄ±mda if ( !expectSync ) { yapÄ±yorum.
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

// Bu kÄ±sÄ±mda dataPriv.set( el, type, false ); yapÄ±yorum.
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

// Bu kÄ±sÄ±mda if ( !saved.length ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !saved.length ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !saved.length ) { yapÄ±yorum.
				if ( !saved.length ) {

// Bu kÄ±sÄ±mda saved = slice.call( arguments ); yapÄ±yorum.
// Bu kÄ±sÄ±mda saved = slice.call( arguments ); yapÄ±yorum.
// Bu kÄ±sÄ±mda saved = slice.call( arguments ); yapÄ±yorum.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

// Bu kÄ±sÄ±mda notAsync = expectSync( this, type ); yapÄ±yorum.
// Bu kÄ±sÄ±mda notAsync = expectSync( this, type ); yapÄ±yorum.
// Bu kÄ±sÄ±mda notAsync = expectSync( this, type ); yapÄ±yorum.
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

// Bu kÄ±sÄ±mda event.stopImmediatePropagation(); yapÄ±yorum.
						event.stopImmediatePropagation();
						event.preventDefault();

// Bu kÄ±sÄ±mda return result && result.value; yapÄ±yorum.
// Bu kÄ±sÄ±mda return result && result.value; yapÄ±yorum.
// Bu kÄ±sÄ±mda return result && result.value; yapÄ±yorum.
// Bu kÄ±sÄ±mda return result && result.value; yapÄ±yorum.
// Bu kÄ±sÄ±mda return result && result.value; yapÄ±yorum.
						return result && result.value;
					}

// Bu kÄ±sÄ±mda } else if ( ( jQuery.event.special[ type ] || {} ).delegateT... yapÄ±yorum.
// Bu kÄ±sÄ±mda } else if ( ( jQuery.event.special[ type ] || {} ).delegateT... yapÄ±yorum.
// Bu kÄ±sÄ±mda } else if ( ( jQuery.event.special[ type ] || {} ).delegateT... yapÄ±yorum.
// Bu kÄ±sÄ±mda } else if ( ( jQuery.event.special[ type ] || {} ).delegateT... yapÄ±yorum.
// Bu kÄ±sÄ±mda } else if ( ( jQuery.event.special[ type ] || {} ).delegateT... yapÄ±yorum.
// Bu kÄ±sÄ±mda } else if ( ( jQuery.event.special[ type ] || {} ).delegateT... yapÄ±yorum.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

// Bu kÄ±sÄ±mda } else if ( saved.length ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda } else if ( saved.length ) { yapÄ±yorum.
			} else if ( saved.length ) {

// Bu kÄ±sÄ±mda dataPriv.set( this, type, { yapÄ±yorum.
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

// Bu kÄ±sÄ±mda jQuery.extend( saved[ 0 ], jQuery.Event.prototype ), yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.extend( saved[ 0 ], jQuery.Event.prototype ), yapÄ±yorum.
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

// Bu kÄ±sÄ±mda event.stopImmediatePropagation(); yapÄ±yorum.
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

// Bu kÄ±sÄ±mda if ( elem.removeEventListener ) { yapÄ±yorum.
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

// Bu kÄ±sÄ±mda if ( !( this instanceof jQuery.Event ) ) { yapÄ±yorum.
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

// Bu kÄ±sÄ±mda if ( src && src.type ) { yapÄ±yorum.
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

// Bu kÄ±sÄ±mda this.isDefaultPrevented = src.defaultPrevented || yapÄ±yorum.
// Bu kÄ±sÄ±mda this.isDefaultPrevented = src.defaultPrevented || yapÄ±yorum.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

// Bu kÄ±sÄ±mda src.returnValue === false ? yapÄ±yorum.
				src.returnValue === false ?
			returnTrue :
			returnFalse;

// Bu kÄ±sÄ±mda this.target = ( src.target && src.target.nodeType === 3 ) ? yapÄ±yorum.
// Bu kÄ±sÄ±mda this.target = ( src.target && src.target.nodeType === 3 ) ? yapÄ±yorum.
// Bu kÄ±sÄ±mda this.target = ( src.target && src.target.nodeType === 3 ) ? yapÄ±yorum.
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
	} else {
		this.type = src;
	}

// Bu kÄ±sÄ±mda if ( props ) { yapÄ±yorum.
	if ( props ) {
		jQuery.extend( this, props );
	}

// Bu kÄ±sÄ±mda this.timeStamp = src && src.timeStamp || Date.now(); yapÄ±yorum.
	this.timeStamp = src && src.timeStamp || Date.now();

// Bu kÄ±sÄ±mda this[ jQuery.expando ] = true; yapÄ±yorum.
	this[ jQuery.expando ] = true;
};

// Bu kÄ±sÄ±mda jQuery.Event.prototype = { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.Event.prototype = { yapÄ±yorum.
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Bu kÄ±sÄ±mda jQuery.each( { yapÄ±yorum.
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

// Bu kÄ±sÄ±mda setup: function() { yapÄ±yorum.
		setup: function() {

// Bu kÄ±sÄ±mda leverageNative( this, type, expectSync ); yapÄ±yorum.
// Bu kÄ±sÄ±mda leverageNative( this, type, expectSync ); yapÄ±yorum.
// Bu kÄ±sÄ±mda leverageNative( this, type, expectSync ); yapÄ±yorum.
			leverageNative( this, type, expectSync );

// Bu kÄ±sÄ±mda return false; yapÄ±yorum.
			return false;
		},
		trigger: function() {

// Bu kÄ±sÄ±mda leverageNative( this, type ); yapÄ±yorum.
			leverageNative( this, type );

// Bu kÄ±sÄ±mda return true; yapÄ±yorum.
			return true;
		},

// Bu kÄ±sÄ±mda _default: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda _default: function() { yapÄ±yorum.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Bu kÄ±sÄ±mda jQuery.each( { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( { yapÄ±yorum.
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

// Bu kÄ±sÄ±mda if ( !related || ( related !== target && !jQuery.contains( t... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !related || ( related !== target && !jQuery.contains( t... yapÄ±yorum.
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

// Bu kÄ±sÄ±mda handleObj = types.handleObj; yapÄ±yorum.
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

// Bu kÄ±sÄ±mda for ( type in types ) { yapÄ±yorum.
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

// Bu kÄ±sÄ±mda fn = selector; yapÄ±yorum.
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

// Bu kÄ±sÄ±mda rnoInnerhtml = /<script|<style|<link/i, yapÄ±yorum.
// Bu kÄ±sÄ±mda rnoInnerhtml = /<script|<style|<link/i, yapÄ±yorum.
// Bu kÄ±sÄ±mda rnoInnerhtml = /<script|<style|<link/i, yapÄ±yorum.
	rnoInnerhtml = /<script|<style|<link/i,

// Bu kÄ±sÄ±mda rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, yapÄ±yorum.
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Bu kÄ±sÄ±mda function manipulationTarget( elem, content ) { yapÄ±yorum.
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Bu kÄ±sÄ±mda function disableScript( elem ) { yapÄ±yorum.
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

// Bu kÄ±sÄ±mda if ( dataPriv.hasData( src ) ) { yapÄ±yorum.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

// Bu kÄ±sÄ±mda if ( dataUser.hasData( src ) ) { yapÄ±yorum.
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Bu kÄ±sÄ±mda function fixInput( src, dest ) { yapÄ±yorum.
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

// Bu kÄ±sÄ±mda if ( nodeName === "input" && rcheckableType.test( src.type )... yapÄ±yorum.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

// Bu kÄ±sÄ±mda } else if ( nodeName === "input" || nodeName === "textarea" ... yapÄ±yorum.
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

// Bu kÄ±sÄ±mda args = flat( args ); yapÄ±yorum.
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

// Bu kÄ±sÄ±mda if ( valueIsFunction || yapÄ±yorum.
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

// Bu kÄ±sÄ±mda if ( first || ignored ) { yapÄ±yorum.
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

// Bu kÄ±sÄ±mda for ( ; i < l; i++ ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda for ( ; i < l; i++ ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda for ( ; i < l; i++ ) { yapÄ±yorum.
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

// Bu kÄ±sÄ±mda if ( hasScripts ) { yapÄ±yorum.
					if ( hasScripts ) {

// Bu kÄ±sÄ±mda jQuery.merge( scripts, getAll( node, "script" ) ); yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.merge( scripts, getAll( node, "script" ) ); yapÄ±yorum.
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

// Bu kÄ±sÄ±mda jQuery.map( scripts, restoreScript ); yapÄ±yorum.
				jQuery.map( scripts, restoreScript );

// Bu kÄ±sÄ±mda for ( i = 0; i < hasScripts; i++ ) { yapÄ±yorum.
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

// Bu kÄ±sÄ±mda if ( jQuery._evalUrl && !node.noModule ) { yapÄ±yorum.
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

// Bu kÄ±sÄ±mda if ( !support.noCloneChecked && ( elem.nodeType === 1 || ele... yapÄ±yorum.
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

// Bu kÄ±sÄ±mda destElements = getAll( clone ); yapÄ±yorum.
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

// Bu kÄ±sÄ±mda if ( dataAndEvents ) { yapÄ±yorum.
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

// Bu kÄ±sÄ±mda destElements = getAll( clone, "script" ); yapÄ±yorum.
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

// Bu kÄ±sÄ±mda return clone; yapÄ±yorum.
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

// Bu kÄ±sÄ±mda elem[ dataPriv.expando ] = undefined; yapÄ±yorum.
// Bu kÄ±sÄ±mda elem[ dataPriv.expando ] = undefined; yapÄ±yorum.
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

// Bu kÄ±sÄ±mda elem[ dataUser.expando ] = undefined; yapÄ±yorum.
// Bu kÄ±sÄ±mda elem[ dataUser.expando ] = undefined; yapÄ±yorum.
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

// Bu kÄ±sÄ±mda jQuery.cleanData( getAll( elem, false ) ); yapÄ±yorum.
				jQuery.cleanData( getAll( elem, false ) );

// Bu kÄ±sÄ±mda elem.textContent = ""; yapÄ±yorum.
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

// Bu kÄ±sÄ±mda if ( typeof value === "string" && !rnoInnerhtml.test( value ... yapÄ±yorum.
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

// Bu kÄ±sÄ±mda if ( elem.nodeType === 1 ) { yapÄ±yorum.
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

// Bu kÄ±sÄ±mda } catch ( e ) {} yapÄ±yorum.
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

// Bu kÄ±sÄ±mda return domManip( this, arguments, function( elem ) { yapÄ±yorum.
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

// Bu kÄ±sÄ±mda }, ignored ); yapÄ±yorum.
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

// Bu kÄ±sÄ±mda push.apply( ret, elems.get() ); yapÄ±yorum.
// Bu kÄ±sÄ±mda push.apply( ret, elems.get() ); yapÄ±yorum.
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

// Bu kÄ±sÄ±mda var view = elem.ownerDocument.defaultView; yapÄ±yorum.
// Bu kÄ±sÄ±mda var view = elem.ownerDocument.defaultView; yapÄ±yorum.
// Bu kÄ±sÄ±mda var view = elem.ownerDocument.defaultView; yapÄ±yorum.
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

// Bu kÄ±sÄ±mda for ( name in options ) { yapÄ±yorum.
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

// Bu kÄ±sÄ±mda for ( name in options ) { yapÄ±yorum.
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

// Bu kÄ±sÄ±mda function computeStyleTests() { yapÄ±yorum.
// Bu kÄ±sÄ±mda function computeStyleTests() { yapÄ±yorum.
	function computeStyleTests() {

// Bu kÄ±sÄ±mda if ( !div ) { yapÄ±yorum.
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

// Bu kÄ±sÄ±mda reliableMarginLeftVal = roundPixelMeasures( divStyle.marginL... yapÄ±yorum.
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

// Bu kÄ±sÄ±mda div.style.right = "60%"; yapÄ±yorum.
// Bu kÄ±sÄ±mda div.style.right = "60%"; yapÄ±yorum.
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

// Bu kÄ±sÄ±mda boxSizingReliableVal = roundPixelMeasures( divStyle.width ) ... yapÄ±yorum.
// Bu kÄ±sÄ±mda boxSizingReliableVal = roundPixelMeasures( divStyle.width ) ... yapÄ±yorum.
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

// Bu kÄ±sÄ±mda div.style.position = "absolute"; yapÄ±yorum.
// Bu kÄ±sÄ±mda div.style.position = "absolute"; yapÄ±yorum.
// Bu kÄ±sÄ±mda div.style.position = "absolute"; yapÄ±yorum.
// Bu kÄ±sÄ±mda div.style.position = "absolute"; yapÄ±yorum.
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

// Bu kÄ±sÄ±mda div = null; yapÄ±yorum.
// Bu kÄ±sÄ±mda div = null; yapÄ±yorum.
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

// Bu kÄ±sÄ±mda if ( !div.style ) { yapÄ±yorum.
	if ( !div.style ) {
		return;
	}

// Bu kÄ±sÄ±mda div.style.backgroundClip = "content-box"; yapÄ±yorum.
// Bu kÄ±sÄ±mda div.style.backgroundClip = "content-box"; yapÄ±yorum.
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

// Bu kÄ±sÄ±mda reliableTrDimensions: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda reliableTrDimensions: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda reliableTrDimensions: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda reliableTrDimensions: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda reliableTrDimensions: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda reliableTrDimensions: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda reliableTrDimensions: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda reliableTrDimensions: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda reliableTrDimensions: function() { yapÄ±yorum.
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

// Bu kÄ±sÄ±mda tr.style.height = "1px"; yapÄ±yorum.
// Bu kÄ±sÄ±mda tr.style.height = "1px"; yapÄ±yorum.
// Bu kÄ±sÄ±mda tr.style.height = "1px"; yapÄ±yorum.
				tr.style.height = "1px";
				trChild.style.height = "9px";

// Bu kÄ±sÄ±mda trChild.style.display = "block"; yapÄ±yorum.
// Bu kÄ±sÄ±mda trChild.style.display = "block"; yapÄ±yorum.
// Bu kÄ±sÄ±mda trChild.style.display = "block"; yapÄ±yorum.
// Bu kÄ±sÄ±mda trChild.style.display = "block"; yapÄ±yorum.
// Bu kÄ±sÄ±mda trChild.style.display = "block"; yapÄ±yorum.
// Bu kÄ±sÄ±mda trChild.style.display = "block"; yapÄ±yorum.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

// Bu kÄ±sÄ±mda style = elem.style; yapÄ±yorum.
// Bu kÄ±sÄ±mda style = elem.style; yapÄ±yorum.
// Bu kÄ±sÄ±mda style = elem.style; yapÄ±yorum.
// Bu kÄ±sÄ±mda style = elem.style; yapÄ±yorum.
		style = elem.style;

	computed = computed || getStyles( elem );

// Bu kÄ±sÄ±mda if ( computed ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( computed ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( computed ) { yapÄ±yorum.
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

// Bu kÄ±sÄ±mda if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && r... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && r... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && r... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && r... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && r... yapÄ±yorum.
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

// Bu kÄ±sÄ±mda width = style.width; yapÄ±yorum.
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

// Bu kÄ±sÄ±mda style.minWidth = style.maxWidth = style.width = ret; yapÄ±yorum.
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

// Bu kÄ±sÄ±mda style.width = width; yapÄ±yorum.
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

// Bu kÄ±sÄ±mda ret + "" : yapÄ±yorum.
// Bu kÄ±sÄ±mda ret + "" : yapÄ±yorum.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

// Bu kÄ±sÄ±mda return { yapÄ±yorum.
	return {
		get: function() {
			if ( conditionFn() ) {

// Bu kÄ±sÄ±mda delete this.get; yapÄ±yorum.
// Bu kÄ±sÄ±mda delete this.get; yapÄ±yorum.
				delete this.get;
				return;
			}

// Bu kÄ±sÄ±mda return ( this.get = hookFn ).apply( this, arguments ); yapÄ±yorum.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Bu kÄ±sÄ±mda function vendorPropName( name ) { yapÄ±yorum.
function vendorPropName( name ) {

// Bu kÄ±sÄ±mda var capName = name[ 0 ].toUpperCase() + name.slice( 1 ), yapÄ±yorum.
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Bu kÄ±sÄ±mda function finalPropName( name ) { yapÄ±yorum.
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

// Bu kÄ±sÄ±mda rdisplayswap = /^(none|table(?!-c[ea]).+)/, yapÄ±yorum.
// Bu kÄ±sÄ±mda rdisplayswap = /^(none|table(?!-c[ea]).+)/, yapÄ±yorum.
// Bu kÄ±sÄ±mda rdisplayswap = /^(none|table(?!-c[ea]).+)/, yapÄ±yorum.
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

// Bu kÄ±sÄ±mda var matches = rcssNum.exec( value ); yapÄ±yorum.
// Bu kÄ±sÄ±mda var matches = rcssNum.exec( value ); yapÄ±yorum.
	var matches = rcssNum.exec( value );
	return matches ?

// Bu kÄ±sÄ±mda Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[... yapÄ±yorum.
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

// Bu kÄ±sÄ±mda if ( box === ( isBorderBox ? "border" : "content" ) ) { yapÄ±yorum.
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

// Bu kÄ±sÄ±mda if ( box === "margin" ) { yapÄ±yorum.
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

// Bu kÄ±sÄ±mda if ( !isBorderBox ) { yapÄ±yorum.
		if ( !isBorderBox ) {

// Bu kÄ±sÄ±mda delta += jQuery.css( elem, "padding" + cssExpand[ i ], true,... yapÄ±yorum.
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

// Bu kÄ±sÄ±mda if ( box !== "padding" ) { yapÄ±yorum.
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
		} else {

// Bu kÄ±sÄ±mda if ( box === "content" ) { yapÄ±yorum.
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

// Bu kÄ±sÄ±mda if ( box !== "margin" ) { yapÄ±yorum.
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

// Bu kÄ±sÄ±mda if ( !isBorderBox && computedVal >= 0 ) { yapÄ±yorum.
	if ( !isBorderBox && computedVal >= 0 ) {

// Bu kÄ±sÄ±mda delta += Math.max( 0, Math.ceil( yapÄ±yorum.
// Bu kÄ±sÄ±mda delta += Math.max( 0, Math.ceil( yapÄ±yorum.
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

// Bu kÄ±sÄ±mda ) ) || 0; yapÄ±yorum.
// Bu kÄ±sÄ±mda ) ) || 0; yapÄ±yorum.
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

// Bu kÄ±sÄ±mda var styles = getStyles( elem ), yapÄ±yorum.
	var styles = getStyles( elem ),

// Bu kÄ±sÄ±mda boxSizingNeeded = !support.boxSizingReliable() || extra, yapÄ±yorum.
// Bu kÄ±sÄ±mda boxSizingNeeded = !support.boxSizingReliable() || extra, yapÄ±yorum.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

// Bu kÄ±sÄ±mda if ( rnumnonpx.test( val ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( rnumnonpx.test( val ) ) { yapÄ±yorum.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


// Bu kÄ±sÄ±mda if ( ( !support.boxSizingReliable() && isBorderBox || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ( !support.boxSizingReliable() && isBorderBox || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ( !support.boxSizingReliable() && isBorderBox || yapÄ±yorum.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

// Bu kÄ±sÄ±mda !support.reliableTrDimensions() && nodeName( elem, "tr" ) || yapÄ±yorum.
// Bu kÄ±sÄ±mda !support.reliableTrDimensions() && nodeName( elem, "tr" ) || yapÄ±yorum.
// Bu kÄ±sÄ±mda !support.reliableTrDimensions() && nodeName( elem, "tr" ) || yapÄ±yorum.
// Bu kÄ±sÄ±mda !support.reliableTrDimensions() && nodeName( elem, "tr" ) || yapÄ±yorum.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

// Bu kÄ±sÄ±mda val === "auto" || yapÄ±yorum.
// Bu kÄ±sÄ±mda val === "auto" || yapÄ±yorum.
		val === "auto" ||

// Bu kÄ±sÄ±mda !parseFloat( val ) && jQuery.css( elem, "display", false, st... yapÄ±yorum.
// Bu kÄ±sÄ±mda !parseFloat( val ) && jQuery.css( elem, "display", false, st... yapÄ±yorum.
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

// Bu kÄ±sÄ±mda elem.getClientRects().length ) { yapÄ±yorum.
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

// Bu kÄ±sÄ±mda valueIsBorderBox = offsetProp in elem; yapÄ±yorum.
// Bu kÄ±sÄ±mda valueIsBorderBox = offsetProp in elem; yapÄ±yorum.
// Bu kÄ±sÄ±mda valueIsBorderBox = offsetProp in elem; yapÄ±yorum.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

// Bu kÄ±sÄ±mda val = parseFloat( val ) || 0; yapÄ±yorum.
	val = parseFloat( val ) || 0;

// Bu kÄ±sÄ±mda return ( val + yapÄ±yorum.
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

// Bu kÄ±sÄ±mda val yapÄ±yorum.
			val
		)
	) + "px";
}

jQuery.extend( {

// Bu kÄ±sÄ±mda cssHooks: { yapÄ±yorum.
// Bu kÄ±sÄ±mda cssHooks: { yapÄ±yorum.
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

// Bu kÄ±sÄ±mda var ret = curCSS( elem, "opacity" ); yapÄ±yorum.
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

// Bu kÄ±sÄ±mda cssNumber: { yapÄ±yorum.
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

// Bu kÄ±sÄ±mda cssProps: {}, yapÄ±yorum.
// Bu kÄ±sÄ±mda cssProps: {}, yapÄ±yorum.
	cssProps: {},

// Bu kÄ±sÄ±mda style: function( elem, name, value, extra ) { yapÄ±yorum.
	style: function( elem, name, value, extra ) {

// Bu kÄ±sÄ±mda if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || ... yapÄ±yorum.
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

// Bu kÄ±sÄ±mda var ret, type, hooks, yapÄ±yorum.
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

// Bu kÄ±sÄ±mda if ( !isCustomProp ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !isCustomProp ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !isCustomProp ) { yapÄ±yorum.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

// Bu kÄ±sÄ±mda hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName... yapÄ±yorum.
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

// Bu kÄ±sÄ±mda if ( value !== undefined ) { yapÄ±yorum.
		if ( value !== undefined ) {
			type = typeof value;

// Bu kÄ±sÄ±mda if ( type === "string" && ( ret = rcssNum.exec( value ) ) &&... yapÄ±yorum.
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

// Bu kÄ±sÄ±mda type = "number"; yapÄ±yorum.
				type = "number";
			}

// Bu kÄ±sÄ±mda if ( value == null || value !== value ) { yapÄ±yorum.
			if ( value == null || value !== value ) {
				return;
			}

// Bu kÄ±sÄ±mda if ( type === "number" && !isCustomProp ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( type === "number" && !isCustomProp ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( type === "number" && !isCustomProp ) { yapÄ±yorum.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

// Bu kÄ±sÄ±mda if ( !support.clearCloneStyle && value === "" && name.indexO... yapÄ±yorum.
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

// Bu kÄ±sÄ±mda if ( !hooks || !( "set" in hooks ) || yapÄ±yorum.
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

// Bu kÄ±sÄ±mda if ( hooks && "get" in hooks && yapÄ±yorum.
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

// Bu kÄ±sÄ±mda return style[ name ]; yapÄ±yorum.
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

// Bu kÄ±sÄ±mda if ( !isCustomProp ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !isCustomProp ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !isCustomProp ) { yapÄ±yorum.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

// Bu kÄ±sÄ±mda hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName... yapÄ±yorum.
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

// Bu kÄ±sÄ±mda if ( hooks && "get" in hooks ) { yapÄ±yorum.
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

// Bu kÄ±sÄ±mda if ( val === undefined ) { yapÄ±yorum.
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

// Bu kÄ±sÄ±mda if ( val === "normal" && name in cssNormalTransform ) { yapÄ±yorum.
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

// Bu kÄ±sÄ±mda if ( extra === "" || extra ) { yapÄ±yorum.
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

// Bu kÄ±sÄ±mda return rdisplayswap.test( jQuery.css( elem, "display" ) ) && yapÄ±yorum.
// Bu kÄ±sÄ±mda return rdisplayswap.test( jQuery.css( elem, "display" ) ) && yapÄ±yorum.
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

// Bu kÄ±sÄ±mda ( !elem.getClientRects().length || !elem.getBoundingClientRe... yapÄ±yorum.
// Bu kÄ±sÄ±mda ( !elem.getClientRects().length || !elem.getBoundingClientRe... yapÄ±yorum.
// Bu kÄ±sÄ±mda ( !elem.getClientRects().length || !elem.getBoundingClientRe... yapÄ±yorum.
// Bu kÄ±sÄ±mda ( !elem.getClientRects().length || !elem.getBoundingClientRe... yapÄ±yorum.
// Bu kÄ±sÄ±mda ( !elem.getClientRects().length || !elem.getBoundingClientRe... yapÄ±yorum.
// Bu kÄ±sÄ±mda ( !elem.getClientRects().length || !elem.getBoundingClientRe... yapÄ±yorum.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

// Bu kÄ±sÄ±mda scrollboxSizeBuggy = !support.scrollboxSize() && yapÄ±yorum.
// Bu kÄ±sÄ±mda scrollboxSizeBuggy = !support.scrollboxSize() && yapÄ±yorum.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

// Bu kÄ±sÄ±mda boxSizingNeeded = scrollboxSizeBuggy || extra, yapÄ±yorum.
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

// Bu kÄ±sÄ±mda if ( isBorderBox && scrollboxSizeBuggy ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( isBorderBox && scrollboxSizeBuggy ) { yapÄ±yorum.
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

// Bu kÄ±sÄ±mda if ( subtract && ( matches = rcssNum.exec( value ) ) && yapÄ±yorum.
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// Bu kÄ±sÄ±mda jQuery.each( { yapÄ±yorum.
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

// Bu kÄ±sÄ±mda parts = typeof value === "string" ? value.split( " " ) : [ v... yapÄ±yorum.
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

// Bu kÄ±sÄ±mda if ( tween.elem.nodeType !== 1 || yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( tween.elem.nodeType !== 1 || yapÄ±yorum.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

// Bu kÄ±sÄ±mda result = jQuery.css( tween.elem, tween.prop, "" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda result = jQuery.css( tween.elem, tween.prop, "" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda result = jQuery.css( tween.elem, tween.prop, "" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda result = jQuery.css( tween.elem, tween.prop, "" ); yapÄ±yorum.
			result = jQuery.css( tween.elem, tween.prop, "" );

// Bu kÄ±sÄ±mda return !result || result === "auto" ? 0 : result; yapÄ±yorum.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

// Bu kÄ±sÄ±mda if ( jQuery.fx.step[ tween.prop ] ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( jQuery.fx.step[ tween.prop ] ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( jQuery.fx.step[ tween.prop ] ) { yapÄ±yorum.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Bu kÄ±sÄ±mda Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = { yapÄ±yorum.
// Bu kÄ±sÄ±mda Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = { yapÄ±yorum.
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Bu kÄ±sÄ±mda jQuery.fx.step = {}; yapÄ±yorum.
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Bu kÄ±sÄ±mda function createFxNow() { yapÄ±yorum.
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Bu kÄ±sÄ±mda function genFx( type, includeWidth ) { yapÄ±yorum.
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

// Bu kÄ±sÄ±mda includeWidth = includeWidth ? 1 : 0; yapÄ±yorum.
// Bu kÄ±sÄ±mda includeWidth = includeWidth ? 1 : 0; yapÄ±yorum.
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

// Bu kÄ±sÄ±mda return tween; yapÄ±yorum.
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

// Bu kÄ±sÄ±mda if ( !opts.queue ) { yapÄ±yorum.
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

// Bu kÄ±sÄ±mda anim.always( function() { yapÄ±yorum.
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

// Bu kÄ±sÄ±mda for ( prop in props ) { yapÄ±yorum.
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

// Bu kÄ±sÄ±mda if ( value === "show" && dataShow && dataShow[ prop ] !== un... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( value === "show" && dataShow && dataShow[ prop ] !== un... yapÄ±yorum.
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

// Bu kÄ±sÄ±mda propTween = !jQuery.isEmptyObject( props ); yapÄ±yorum.
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

// Bu kÄ±sÄ±mda if ( isBox && elem.nodeType === 1 ) { yapÄ±yorum.
	if ( isBox && elem.nodeType === 1 ) {

// Bu kÄ±sÄ±mda opts.overflow = [ style.overflow, style.overflowX, style.ove... yapÄ±yorum.
// Bu kÄ±sÄ±mda opts.overflow = [ style.overflow, style.overflowX, style.ove... yapÄ±yorum.
// Bu kÄ±sÄ±mda opts.overflow = [ style.overflow, style.overflowX, style.ove... yapÄ±yorum.
// Bu kÄ±sÄ±mda opts.overflow = [ style.overflow, style.overflowX, style.ove... yapÄ±yorum.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

// Bu kÄ±sÄ±mda restoreDisplay = dataShow && dataShow.display; yapÄ±yorum.
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

// Bu kÄ±sÄ±mda showHide( [ elem ], true ); yapÄ±yorum.
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

// Bu kÄ±sÄ±mda if ( display === "inline" || display === "inline-block" && r... yapÄ±yorum.
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

// Bu kÄ±sÄ±mda if ( !propTween ) { yapÄ±yorum.
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

// Bu kÄ±sÄ±mda propTween = false; yapÄ±yorum.
	propTween = false;
	for ( prop in orig ) {

// Bu kÄ±sÄ±mda if ( !propTween ) { yapÄ±yorum.
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

// Bu kÄ±sÄ±mda if ( toggle ) { yapÄ±yorum.
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

// Bu kÄ±sÄ±mda if ( hidden ) { yapÄ±yorum.
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

// Bu kÄ±sÄ±mda if ( !hidden ) { yapÄ±yorum.
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

// Bu kÄ±sÄ±mda propTween = createTween( hidden ? dataShow[ prop ] : 0, prop... yapÄ±yorum.
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

// Bu kÄ±sÄ±mda for ( index in props ) { yapÄ±yorum.
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

// Bu kÄ±sÄ±mda for ( index in value ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda for ( index in value ) { yapÄ±yorum.
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

// Bu kÄ±sÄ±mda delete tick.elem; yapÄ±yorum.
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

// Bu kÄ±sÄ±mda temp = remaining / animation.duration || 0, yapÄ±yorum.
// Bu kÄ±sÄ±mda temp = remaining / animation.duration || 0, yapÄ±yorum.
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

// Bu kÄ±sÄ±mda if ( percent < 1 && length ) { yapÄ±yorum.
			if ( percent < 1 && length ) {
				return remaining;
			}

// Bu kÄ±sÄ±mda if ( !length ) { yapÄ±yorum.
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

// Bu kÄ±sÄ±mda deferred.resolveWith( elem, [ animation ] ); yapÄ±yorum.
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

// Bu kÄ±sÄ±mda length = gotoEnd ? animation.tweens.length : 0; yapÄ±yorum.
// Bu kÄ±sÄ±mda length = gotoEnd ? animation.tweens.length : 0; yapÄ±yorum.
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

// Bu kÄ±sÄ±mda if ( gotoEnd ) { yapÄ±yorum.
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

// Bu kÄ±sÄ±mda animation yapÄ±yorum.
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

// Bu kÄ±sÄ±mda if ( jQuery.fx.off ) { yapÄ±yorum.
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

// Bu kÄ±sÄ±mda if ( opt.queue == null || opt.queue === true ) { yapÄ±yorum.
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

// Bu kÄ±sÄ±mda opt.old = opt.complete; yapÄ±yorum.
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

// Bu kÄ±sÄ±mda return this.filter( isHiddenWithinTree ).css( "opacity", 0 )... yapÄ±yorum.
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

// Bu kÄ±sÄ±mda .end().animate( { opacity: to }, speed, easing, callback ); yapÄ±yorum.
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

// Bu kÄ±sÄ±mda var anim = Animation( this, jQuery.extend( {}, prop ), optal... yapÄ±yorum.
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

// Bu kÄ±sÄ±mda if ( empty || dataPriv.get( this, "finish" ) ) { yapÄ±yorum.
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

// Bu kÄ±sÄ±mda if ( dequeue || !gotoEnd ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( dequeue || !gotoEnd ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( dequeue || !gotoEnd ) { yapÄ±yorum.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

// Bu kÄ±sÄ±mda data.finish = true; yapÄ±yorum.
			data.finish = true;

// Bu kÄ±sÄ±mda jQuery.queue( this, type, [] ); yapÄ±yorum.
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

// Bu kÄ±sÄ±mda for ( index = timers.length; index--; ) { yapÄ±yorum.
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

// Bu kÄ±sÄ±mda for ( index = 0; index < length; index++ ) { yapÄ±yorum.
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

// Bu kÄ±sÄ±mda delete data.finish; yapÄ±yorum.
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Bu kÄ±sÄ±mda jQuery.each( { yapÄ±yorum.
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

// Bu kÄ±sÄ±mda if ( !timer() && timers[ i ] === timer ) { yapÄ±yorum.
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

// Bu kÄ±sÄ±mda _default: 400 yapÄ±yorum.
	_default: 400
};


// Bu kÄ±sÄ±mda jQuery.fn.delay = function( time, type ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.fn.delay = function( time, type ) { yapÄ±yorum.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

// Bu kÄ±sÄ±mda support.checkOn = input.value !== ""; yapÄ±yorum.
// Bu kÄ±sÄ±mda support.checkOn = input.value !== ""; yapÄ±yorum.
	support.checkOn = input.value !== "";

// Bu kÄ±sÄ±mda support.optSelected = opt.selected; yapÄ±yorum.
// Bu kÄ±sÄ±mda support.optSelected = opt.selected; yapÄ±yorum.
	support.optSelected = opt.selected;

// Bu kÄ±sÄ±mda input = document.createElement( "input" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda input = document.createElement( "input" ); yapÄ±yorum.
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

// Bu kÄ±sÄ±mda if ( nType === 3 || nType === 8 || nType === 2 ) { yapÄ±yorum.
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

// Bu kÄ±sÄ±mda if ( typeof elem.getAttribute === "undefined" ) { yapÄ±yorum.
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

// Bu kÄ±sÄ±mda if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) { yapÄ±yorum.
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

// Bu kÄ±sÄ±mda return ret == null ? undefined : ret; yapÄ±yorum.
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

// Bu kÄ±sÄ±mda attrNames = value && value.match( rnothtmlwhite ); yapÄ±yorum.
// Bu kÄ±sÄ±mda attrNames = value && value.match( rnothtmlwhite ); yapÄ±yorum.
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Bu kÄ±sÄ±mda boolHook = { yapÄ±yorum.
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

// Bu kÄ±sÄ±mda jQuery.removeAttr( elem, name ); yapÄ±yorum.
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

// Bu kÄ±sÄ±mda handle = attrHandle[ lowercaseName ]; yapÄ±yorum.
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

// Bu kÄ±sÄ±mda if ( nType === 3 || nType === 8 || nType === 2 ) { yapÄ±yorum.
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

// Bu kÄ±sÄ±mda name = jQuery.propFix[ name ] || name; yapÄ±yorum.
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

// Bu kÄ±sÄ±mda var tabindex = jQuery.find.attr( elem, "tabindex" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda var tabindex = jQuery.find.attr( elem, "tabindex" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda var tabindex = jQuery.find.attr( elem, "tabindex" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda var tabindex = jQuery.find.attr( elem, "tabindex" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda var tabindex = jQuery.find.attr( elem, "tabindex" ); yapÄ±yorum.
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Bu kÄ±sÄ±mda if ( !support.optSelected ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.optSelected ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.optSelected ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.optSelected ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.optSelected ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.optSelected ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.optSelected ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.optSelected ) { yapÄ±yorum.
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




// Bu kÄ±sÄ±mda function stripAndCollapse( value ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function stripAndCollapse( value ) { yapÄ±yorum.
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

// Bu kÄ±sÄ±mda finalValue = stripAndCollapse( cur ); yapÄ±yorum.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

// Bu kÄ±sÄ±mda cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curVa... yapÄ±yorum.
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

// Bu kÄ±sÄ±mda while ( cur.indexOf( " " + clazz + " " ) > -1 ) { yapÄ±yorum.
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

// Bu kÄ±sÄ±mda finalValue = stripAndCollapse( cur ); yapÄ±yorum.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

// Bu kÄ±sÄ±mda i = 0; yapÄ±yorum.
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

// Bu kÄ±sÄ±mda if ( self.hasClass( className ) ) { yapÄ±yorum.
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

// Bu kÄ±sÄ±mda } else if ( value === undefined || type === "boolean" ) { yapÄ±yorum.
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

// Bu kÄ±sÄ±mda dataPriv.set( this, "__className__", className ); yapÄ±yorum.
					dataPriv.set( this, "__className__", className );
				}

// Bu kÄ±sÄ±mda if ( this.setAttribute ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( this.setAttribute ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( this.setAttribute ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( this.setAttribute ) { yapÄ±yorum.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

// Bu kÄ±sÄ±mda if ( typeof ret === "string" ) { yapÄ±yorum.
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

// Bu kÄ±sÄ±mda return ret == null ? "" : ret; yapÄ±yorum.
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

// Bu kÄ±sÄ±mda if ( val == null ) { yapÄ±yorum.
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

// Bu kÄ±sÄ±mda if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, ... yapÄ±yorum.
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

// Bu kÄ±sÄ±mda stripAndCollapse( jQuery.text( elem ) ); yapÄ±yorum.
// Bu kÄ±sÄ±mda stripAndCollapse( jQuery.text( elem ) ); yapÄ±yorum.
// Bu kÄ±sÄ±mda stripAndCollapse( jQuery.text( elem ) ); yapÄ±yorum.
// Bu kÄ±sÄ±mda stripAndCollapse( jQuery.text( elem ) ); yapÄ±yorum.
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

// Bu kÄ±sÄ±mda for ( ; i < max; i++ ) { yapÄ±yorum.
				for ( ; i < max; i++ ) {
					option = options[ i ];

// Bu kÄ±sÄ±mda if ( ( option.selected || i === index ) && yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ( option.selected || i === index ) && yapÄ±yorum.
					if ( ( option.selected || i === index ) &&

// Bu kÄ±sÄ±mda !option.disabled && yapÄ±yorum.
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

// Bu kÄ±sÄ±mda value = jQuery( option ).val(); yapÄ±yorum.
						value = jQuery( option ).val();

// Bu kÄ±sÄ±mda if ( one ) { yapÄ±yorum.
						if ( one ) {
							return value;
						}

// Bu kÄ±sÄ±mda values.push( value ); yapÄ±yorum.
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

// Bu kÄ±sÄ±mda if ( !optionSet ) { yapÄ±yorum.
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Bu kÄ±sÄ±mda jQuery.each( [ "radio", "checkbox" ], function() { yapÄ±yorum.
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Bu kÄ±sÄ±mda support.focusin = "onfocusin" in window; yapÄ±yorum.


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

// Bu kÄ±sÄ±mda if ( elem.nodeType === 3 || elem.nodeType === 8 ) { yapÄ±yorum.
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

// Bu kÄ±sÄ±mda if ( rfocusMorph.test( type + jQuery.event.triggered ) ) { yapÄ±yorum.
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

// Bu kÄ±sÄ±mda namespaces = type.split( "." ); yapÄ±yorum.
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

// Bu kÄ±sÄ±mda event = event[ jQuery.expando ] ? yapÄ±yorum.
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

// Bu kÄ±sÄ±mda event.isTrigger = onlyHandlers ? 2 : 3; yapÄ±yorum.
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

// Bu kÄ±sÄ±mda event.result = undefined; yapÄ±yorum.
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

// Bu kÄ±sÄ±mda data = data == null ? yapÄ±yorum.
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

// Bu kÄ±sÄ±mda special = jQuery.event.special[ type ] || {}; yapÄ±yorum.
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

// Bu kÄ±sÄ±mda if ( !onlyHandlers && !special.noBubble && !isWindow( elem )... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !onlyHandlers && !special.noBubble && !isWindow( elem )... yapÄ±yorum.
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

// Bu kÄ±sÄ±mda if ( tmp === ( elem.ownerDocument || document ) ) { yapÄ±yorum.
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

// Bu kÄ±sÄ±mda i = 0; yapÄ±yorum.
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

// Bu kÄ±sÄ±mda handle = ( dataPriv.get( cur, "events" ) || Object.create( n... yapÄ±yorum.
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

// Bu kÄ±sÄ±mda handle = ontype && cur[ ontype ]; yapÄ±yorum.
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

// Bu kÄ±sÄ±mda if ( !onlyHandlers && !event.isDefaultPrevented() ) { yapÄ±yorum.
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

// Bu kÄ±sÄ±mda if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem... yapÄ±yorum.
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

// Bu kÄ±sÄ±mda tmp = elem[ ontype ]; yapÄ±yorum.
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

// Bu kÄ±sÄ±mda jQuery.event.triggered = type; yapÄ±yorum.
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

// Bu kÄ±sÄ±mda simulate: function( type, elem, event ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda simulate: function( type, elem, event ) { yapÄ±yorum.
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Bu kÄ±sÄ±mda if ( !support.focusin ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.focusin ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.focusin ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.focusin ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.focusin ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.focusin ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.focusin ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !support.focusin ) { yapÄ±yorum.
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

// Bu kÄ±sÄ±mda var handler = function( event ) { yapÄ±yorum.
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

// Bu kÄ±sÄ±mda var doc = this.ownerDocument || this.document || this, yapÄ±yorum.
// Bu kÄ±sÄ±mda var doc = this.ownerDocument || this.document || this, yapÄ±yorum.
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Bu kÄ±sÄ±mda jQuery.parseXML = function( data ) { yapÄ±yorum.
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

// Bu kÄ±sÄ±mda try { yapÄ±yorum.
// Bu kÄ±sÄ±mda try { yapÄ±yorum.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

// Bu kÄ±sÄ±mda jQuery.each( obj, function( i, v ) { yapÄ±yorum.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

// Bu kÄ±sÄ±mda add( prefix, v ); yapÄ±yorum.
				add( prefix, v );

			} else {

// Bu kÄ±sÄ±mda buildParams( yapÄ±yorum.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

// Bu kÄ±sÄ±mda for ( name in obj ) { yapÄ±yorum.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

// Bu kÄ±sÄ±mda add( prefix, obj ); yapÄ±yorum.
		add( prefix, obj );
	}
}

// Bu kÄ±sÄ±mda jQuery.param = function( a, traditional ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.param = function( a, traditional ) { yapÄ±yorum.
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

// Bu kÄ±sÄ±mda var value = isFunction( valueOrFunction ) ? yapÄ±yorum.
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

// Bu kÄ±sÄ±mda if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObje... yapÄ±yorum.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

// Bu kÄ±sÄ±mda jQuery.each( a, function() { yapÄ±yorum.
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

// Bu kÄ±sÄ±mda for ( prefix in a ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda for ( prefix in a ) { yapÄ±yorum.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

// Bu kÄ±sÄ±mda return s.join( "&" ); yapÄ±yorum.
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

// Bu kÄ±sÄ±mda var elements = jQuery.prop( this, "elements" ); yapÄ±yorum.
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

// Bu kÄ±sÄ±mda return this.name && !jQuery( this ).is( ":disabled" ) && yapÄ±yorum.
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

// Bu kÄ±sÄ±mda rlocalProtocol = /^(?:about|app|app-storage|.+-extension|fil... yapÄ±yorum.
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

// Bu kÄ±sÄ±mda allTypes = "*/".concat( "*" ), yapÄ±yorum.
	allTypes = "*/".concat( "*" ),

// Bu kÄ±sÄ±mda originAnchor = document.createElement( "a" ); yapÄ±yorum.
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Bu kÄ±sÄ±mda function addToPrefiltersOrTransports( structure ) { yapÄ±yorum.
function addToPrefiltersOrTransports( structure ) {

// Bu kÄ±sÄ±mda return function( dataTypeExpression, func ) { yapÄ±yorum.
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

// Bu kÄ±sÄ±mda while ( ( dataType = dataTypes[ i++ ] ) ) { yapÄ±yorum.
			while ( ( dataType = dataTypes[ i++ ] ) ) {

// Bu kÄ±sÄ±mda if ( dataType[ 0 ] === "+" ) { yapÄ±yorum.
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Bu kÄ±sÄ±mda function inspectPrefiltersOrTransports( structure, options, ... yapÄ±yorum.
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// Bu kÄ±sÄ±mda function ajaxExtend( target, src ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function ajaxExtend( target, src ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda function ajaxExtend( target, src ) { yapÄ±yorum.
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

// Bu kÄ±sÄ±mda while ( dataTypes[ 0 ] === "*" ) { yapÄ±yorum.
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

// Bu kÄ±sÄ±mda if ( ct ) { yapÄ±yorum.
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

// Bu kÄ±sÄ±mda if ( dataTypes[ 0 ] in responses ) { yapÄ±yorum.
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

// Bu kÄ±sÄ±mda for ( type in responses ) { yapÄ±yorum.
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

// Bu kÄ±sÄ±mda finalDataType = finalDataType || firstDataType; yapÄ±yorum.
		finalDataType = finalDataType || firstDataType;
	}

// Bu kÄ±sÄ±mda if ( finalDataType ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( finalDataType ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( finalDataType ) { yapÄ±yorum.
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

// Bu kÄ±sÄ±mda dataTypes = s.dataTypes.slice(); yapÄ±yorum.
		dataTypes = s.dataTypes.slice();

// Bu kÄ±sÄ±mda if ( dataTypes[ 1 ] ) { yapÄ±yorum.
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

// Bu kÄ±sÄ±mda while ( current ) { yapÄ±yorum.
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

// Bu kÄ±sÄ±mda if ( !prev && isSuccess && s.dataFilter ) { yapÄ±yorum.
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

// Bu kÄ±sÄ±mda if ( current === "*" ) { yapÄ±yorum.
			if ( current === "*" ) {

				current = prev;

// Bu kÄ±sÄ±mda } else if ( prev !== "*" && prev !== current ) { yapÄ±yorum.
			} else if ( prev !== "*" && prev !== current ) {

// Bu kÄ±sÄ±mda conv = converters[ prev + " " + current ] || converters[ "* ... yapÄ±yorum.
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

// Bu kÄ±sÄ±mda if ( !conv ) { yapÄ±yorum.
				if ( !conv ) {
					for ( conv2 in converters ) {

// Bu kÄ±sÄ±mda tmp = conv2.split( " " ); yapÄ±yorum.
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

// Bu kÄ±sÄ±mda conv = converters[ prev + " " + tmp[ 0 ] ] || yapÄ±yorum.
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

// Bu kÄ±sÄ±mda if ( conv === true ) { yapÄ±yorum.
								if ( conv === true ) {
									conv = converters[ conv2 ];

// Bu kÄ±sÄ±mda } else if ( converters[ conv2 ] !== true ) { yapÄ±yorum.
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

// Bu kÄ±sÄ±mda if ( conv !== true ) { yapÄ±yorum.
				if ( conv !== true ) {

// Bu kÄ±sÄ±mda if ( conv && s.throws ) { yapÄ±yorum.
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

// Bu kÄ±sÄ±mda active: 0, yapÄ±yorum.
	active: 0,

// Bu kÄ±sÄ±mda lastModified: {}, yapÄ±yorum.
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

// Bu kÄ±sÄ±mda converters: { yapÄ±yorum.
// Bu kÄ±sÄ±mda converters: { yapÄ±yorum.
		converters: {

// Bu kÄ±sÄ±mda "* text": String, yapÄ±yorum.
			"* text": String,

// Bu kÄ±sÄ±mda "text html": true, yapÄ±yorum.
			"text html": true,

// Bu kÄ±sÄ±mda "text json": JSON.parse, yapÄ±yorum.
			"text json": JSON.parse,

// Bu kÄ±sÄ±mda "text xml": jQuery.parseXML yapÄ±yorum.
			"text xml": jQuery.parseXML
		},

// Bu kÄ±sÄ±mda flatOptions: { yapÄ±yorum.
// Bu kÄ±sÄ±mda flatOptions: { yapÄ±yorum.
// Bu kÄ±sÄ±mda flatOptions: { yapÄ±yorum.
// Bu kÄ±sÄ±mda flatOptions: { yapÄ±yorum.
		flatOptions: {
			url: true,
			context: true
		}
	},

// Bu kÄ±sÄ±mda ajaxSetup: function( target, settings ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda ajaxSetup: function( target, settings ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda ajaxSetup: function( target, settings ) { yapÄ±yorum.
	ajaxSetup: function( target, settings ) {
		return settings ?

// Bu kÄ±sÄ±mda ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), setti... yapÄ±yorum.
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

// Bu kÄ±sÄ±mda ajaxExtend( jQuery.ajaxSettings, target ); yapÄ±yorum.
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

// Bu kÄ±sÄ±mda ajax: function( url, options ) { yapÄ±yorum.
	ajax: function( url, options ) {

// Bu kÄ±sÄ±mda if ( typeof url === "object" ) { yapÄ±yorum.
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

// Bu kÄ±sÄ±mda options = options || {}; yapÄ±yorum.
		options = options || {};

		var transport,

// Bu kÄ±sÄ±mda cacheURL, yapÄ±yorum.
			cacheURL,

// Bu kÄ±sÄ±mda responseHeadersString, yapÄ±yorum.
			responseHeadersString,
			responseHeaders,

// Bu kÄ±sÄ±mda timeoutTimer, yapÄ±yorum.
			timeoutTimer,

// Bu kÄ±sÄ±mda urlAnchor, yapÄ±yorum.
			urlAnchor,

// Bu kÄ±sÄ±mda completed, yapÄ±yorum.
			completed,

// Bu kÄ±sÄ±mda fireGlobals, yapÄ±yorum.
			fireGlobals,

// Bu kÄ±sÄ±mda i, yapÄ±yorum.
			i,

// Bu kÄ±sÄ±mda uncached, yapÄ±yorum.
			uncached,

// Bu kÄ±sÄ±mda s = jQuery.ajaxSetup( {}, options ), yapÄ±yorum.
			s = jQuery.ajaxSetup( {}, options ),

// Bu kÄ±sÄ±mda callbackContext = s.context || s, yapÄ±yorum.
			callbackContext = s.context || s,

// Bu kÄ±sÄ±mda globalEventContext = s.context && yapÄ±yorum.
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

// Bu kÄ±sÄ±mda deferred = jQuery.Deferred(), yapÄ±yorum.
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

// Bu kÄ±sÄ±mda statusCode = s.statusCode || {}, yapÄ±yorum.
			statusCode = s.statusCode || {},

// Bu kÄ±sÄ±mda requestHeaders = {}, yapÄ±yorum.
			requestHeaders = {},
			requestHeadersNames = {},

// Bu kÄ±sÄ±mda strAbort = "canceled", yapÄ±yorum.
			strAbort = "canceled",

// Bu kÄ±sÄ±mda jqXHR = { yapÄ±yorum.
			jqXHR = {
				readyState: 0,

// Bu kÄ±sÄ±mda getResponseHeader: function( key ) { yapÄ±yorum.
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

// Bu kÄ±sÄ±mda getAllResponseHeaders: function() { yapÄ±yorum.
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

// Bu kÄ±sÄ±mda setRequestHeader: function( name, value ) { yapÄ±yorum.
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

// Bu kÄ±sÄ±mda overrideMimeType: function( type ) { yapÄ±yorum.
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

// Bu kÄ±sÄ±mda statusCode: function( map ) { yapÄ±yorum.
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

// Bu kÄ±sÄ±mda jqXHR.always( map[ jqXHR.status ] ); yapÄ±yorum.
							jqXHR.always( map[ jqXHR.status ] );
						} else {

// Bu kÄ±sÄ±mda for ( code in map ) { yapÄ±yorum.
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

// Bu kÄ±sÄ±mda abort: function( statusText ) { yapÄ±yorum.
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

// Bu kÄ±sÄ±mda deferred.promise( jqXHR ); yapÄ±yorum.
		deferred.promise( jqXHR );

// Bu kÄ±sÄ±mda s.url = ( ( url || s.url || location.href ) + "" ) yapÄ±yorum.
// Bu kÄ±sÄ±mda s.url = ( ( url || s.url || location.href ) + "" ) yapÄ±yorum.
// Bu kÄ±sÄ±mda s.url = ( ( url || s.url || location.href ) + "" ) yapÄ±yorum.
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

// Bu kÄ±sÄ±mda s.type = options.method || options.type || s.method || s.typ... yapÄ±yorum.
		s.type = options.method || options.type || s.method || s.type;

// Bu kÄ±sÄ±mda s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rno... yapÄ±yorum.
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

// Bu kÄ±sÄ±mda if ( s.crossDomain == null ) { yapÄ±yorum.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

// Bu kÄ±sÄ±mda try { yapÄ±yorum.
// Bu kÄ±sÄ±mda try { yapÄ±yorum.
// Bu kÄ±sÄ±mda try { yapÄ±yorum.
			try {
				urlAnchor.href = s.url;

// Bu kÄ±sÄ±mda urlAnchor.href = urlAnchor.href; yapÄ±yorum.
// Bu kÄ±sÄ±mda urlAnchor.href = urlAnchor.href; yapÄ±yorum.
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

// Bu kÄ±sÄ±mda s.crossDomain = true; yapÄ±yorum.
// Bu kÄ±sÄ±mda s.crossDomain = true; yapÄ±yorum.
				s.crossDomain = true;
			}
		}

// Bu kÄ±sÄ±mda if ( s.data && s.processData && typeof s.data !== "string" )... yapÄ±yorum.
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

// Bu kÄ±sÄ±mda inspectPrefiltersOrTransports( prefilters, s, options, jqXHR... yapÄ±yorum.
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

// Bu kÄ±sÄ±mda if ( completed ) { yapÄ±yorum.
		if ( completed ) {
			return jqXHR;
		}

// Bu kÄ±sÄ±mda fireGlobals = jQuery.event && s.global; yapÄ±yorum.
// Bu kÄ±sÄ±mda fireGlobals = jQuery.event && s.global; yapÄ±yorum.
		fireGlobals = jQuery.event && s.global;

// Bu kÄ±sÄ±mda if ( fireGlobals && jQuery.active++ === 0 ) { yapÄ±yorum.
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

// Bu kÄ±sÄ±mda s.type = s.type.toUpperCase(); yapÄ±yorum.
		s.type = s.type.toUpperCase();

// Bu kÄ±sÄ±mda s.hasContent = !rnoContent.test( s.type ); yapÄ±yorum.
		s.hasContent = !rnoContent.test( s.type );

// Bu kÄ±sÄ±mda cacheURL = s.url.replace( rhash, "" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda cacheURL = s.url.replace( rhash, "" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda cacheURL = s.url.replace( rhash, "" ); yapÄ±yorum.
		cacheURL = s.url.replace( rhash, "" );

// Bu kÄ±sÄ±mda if ( !s.hasContent ) { yapÄ±yorum.
		if ( !s.hasContent ) {

// Bu kÄ±sÄ±mda uncached = s.url.slice( cacheURL.length ); yapÄ±yorum.
			uncached = s.url.slice( cacheURL.length );

// Bu kÄ±sÄ±mda if ( s.data && ( s.processData || typeof s.data === "string"... yapÄ±yorum.
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

// Bu kÄ±sÄ±mda delete s.data; yapÄ±yorum.
				delete s.data;
			}

// Bu kÄ±sÄ±mda if ( s.cache === false ) { yapÄ±yorum.
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

// Bu kÄ±sÄ±mda s.url = cacheURL + uncached; yapÄ±yorum.
			s.url = cacheURL + uncached;

// Bu kÄ±sÄ±mda } else if ( s.data && s.processData && yapÄ±yorum.
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

// Bu kÄ±sÄ±mda if ( s.ifModified ) { yapÄ±yorum.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

// Bu kÄ±sÄ±mda if ( s.data && s.hasContent && s.contentType !== false || op... yapÄ±yorum.
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

// Bu kÄ±sÄ±mda jqXHR.setRequestHeader( yapÄ±yorum.
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

// Bu kÄ±sÄ±mda for ( i in s.headers ) { yapÄ±yorum.
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

// Bu kÄ±sÄ±mda if ( s.beforeSend && yapÄ±yorum.
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

// Bu kÄ±sÄ±mda return jqXHR.abort(); yapÄ±yorum.
			return jqXHR.abort();
		}

// Bu kÄ±sÄ±mda strAbort = "abort"; yapÄ±yorum.
		strAbort = "abort";

// Bu kÄ±sÄ±mda completeDeferred.add( s.complete ); yapÄ±yorum.
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

// Bu kÄ±sÄ±mda transport = inspectPrefiltersOrTransports( transports, s, op... yapÄ±yorum.
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

// Bu kÄ±sÄ±mda if ( !transport ) { yapÄ±yorum.
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

// Bu kÄ±sÄ±mda if ( fireGlobals ) { yapÄ±yorum.
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

// Bu kÄ±sÄ±mda if ( completed ) { yapÄ±yorum.
			if ( completed ) {
				return jqXHR;
			}

// Bu kÄ±sÄ±mda if ( s.async && s.timeout > 0 ) { yapÄ±yorum.
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

// Bu kÄ±sÄ±mda if ( completed ) { yapÄ±yorum.
				if ( completed ) {
					throw e;
				}

// Bu kÄ±sÄ±mda done( -1, e ); yapÄ±yorum.
				done( -1, e );
			}
		}

// Bu kÄ±sÄ±mda function done( status, nativeStatusText, responses, headers ... yapÄ±yorum.
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

// Bu kÄ±sÄ±mda if ( completed ) { yapÄ±yorum.
			if ( completed ) {
				return;
			}

			completed = true;

// Bu kÄ±sÄ±mda if ( timeoutTimer ) { yapÄ±yorum.
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

// Bu kÄ±sÄ±mda transport = undefined; yapÄ±yorum.
// Bu kÄ±sÄ±mda transport = undefined; yapÄ±yorum.
			transport = undefined;

// Bu kÄ±sÄ±mda responseHeadersString = headers || ""; yapÄ±yorum.
			responseHeadersString = headers || "";

// Bu kÄ±sÄ±mda jqXHR.readyState = status > 0 ? 4 : 0; yapÄ±yorum.
			jqXHR.readyState = status > 0 ? 4 : 0;

// Bu kÄ±sÄ±mda isSuccess = status >= 200 && status < 300 || status === 304; yapÄ±yorum.
			isSuccess = status >= 200 && status < 300 || status === 304;

// Bu kÄ±sÄ±mda if ( responses ) { yapÄ±yorum.
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

// Bu kÄ±sÄ±mda if ( !isSuccess && yapÄ±yorum.
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

// Bu kÄ±sÄ±mda response = ajaxConvert( s, response, jqXHR, isSuccess ); yapÄ±yorum.
			response = ajaxConvert( s, response, jqXHR, isSuccess );

// Bu kÄ±sÄ±mda if ( isSuccess ) { yapÄ±yorum.
			if ( isSuccess ) {

// Bu kÄ±sÄ±mda if ( s.ifModified ) { yapÄ±yorum.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

// Bu kÄ±sÄ±mda if ( status === 204 || s.type === "HEAD" ) { yapÄ±yorum.
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

// Bu kÄ±sÄ±mda } else if ( status === 304 ) { yapÄ±yorum.
				} else if ( status === 304 ) {
					statusText = "notmodified";

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

// Bu kÄ±sÄ±mda error = statusText; yapÄ±yorum.
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

// Bu kÄ±sÄ±mda jqXHR.status = status; yapÄ±yorum.
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

// Bu kÄ±sÄ±mda if ( isSuccess ) { yapÄ±yorum.
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

// Bu kÄ±sÄ±mda jqXHR.statusCode( statusCode ); yapÄ±yorum.
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

// Bu kÄ±sÄ±mda completeDeferred.fireWith( callbackContext, [ jqXHR, statusT... yapÄ±yorum.
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

// Bu kÄ±sÄ±mda if ( !( --jQuery.active ) ) { yapÄ±yorum.
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

// Bu kÄ±sÄ±mda if ( isFunction( data ) ) { yapÄ±yorum.
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

// Bu kÄ±sÄ±mda return jQuery.ajax( jQuery.extend( { yapÄ±yorum.
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

// Bu kÄ±sÄ±mda type: "GET", yapÄ±yorum.
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

// Bu kÄ±sÄ±mda converters: { yapÄ±yorum.
// Bu kÄ±sÄ±mda converters: { yapÄ±yorum.
// Bu kÄ±sÄ±mda converters: { yapÄ±yorum.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

// Bu kÄ±sÄ±mda wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone... yapÄ±yorum.
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

// Bu kÄ±sÄ±mda 0: 200, yapÄ±yorum.
		0: 200,

// Bu kÄ±sÄ±mda 1223: 204 yapÄ±yorum.
// Bu kÄ±sÄ±mda 1223: 204 yapÄ±yorum.
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

// Bu kÄ±sÄ±mda if ( support.cors || xhrSupported && !options.crossDomain ) ... yapÄ±yorum.
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

// Bu kÄ±sÄ±mda if ( options.xhrFields ) { yapÄ±yorum.
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

// Bu kÄ±sÄ±mda if ( options.mimeType && xhr.overrideMimeType ) { yapÄ±yorum.
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

// Bu kÄ±sÄ±mda if ( !options.crossDomain && !headers[ "X-Requested-With" ] ... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !options.crossDomain && !headers[ "X-Requested-With" ] ... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !options.crossDomain && !headers[ "X-Requested-With" ] ... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !options.crossDomain && !headers[ "X-Requested-With" ] ... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !options.crossDomain && !headers[ "X-Requested-With" ] ... yapÄ±yorum.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

// Bu kÄ±sÄ±mda for ( i in headers ) { yapÄ±yorum.
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

// Bu kÄ±sÄ±mda callback = function( type ) { yapÄ±yorum.
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

// Bu kÄ±sÄ±mda if ( typeof xhr.status !== "number" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof xhr.status !== "number" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof xhr.status !== "number" ) { yapÄ±yorum.
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

// Bu kÄ±sÄ±mda xhr.status, yapÄ±yorum.
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

// Bu kÄ±sÄ±mda ( xhr.responseType || "text" ) !== "text"  || yapÄ±yorum.
// Bu kÄ±sÄ±mda ( xhr.responseType || "text" ) !== "text"  || yapÄ±yorum.
// Bu kÄ±sÄ±mda ( xhr.responseType || "text" ) !== "text"  || yapÄ±yorum.
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

// Bu kÄ±sÄ±mda xhr.onload = callback(); yapÄ±yorum.
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

// Bu kÄ±sÄ±mda if ( xhr.onabort !== undefined ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( xhr.onabort !== undefined ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( xhr.onabort !== undefined ) { yapÄ±yorum.
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

// Bu kÄ±sÄ±mda if ( xhr.readyState === 4 ) { yapÄ±yorum.
						if ( xhr.readyState === 4 ) {

// Bu kÄ±sÄ±mda window.setTimeout( function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda window.setTimeout( function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda window.setTimeout( function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda window.setTimeout( function() { yapÄ±yorum.
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

// Bu kÄ±sÄ±mda callback = callback( "abort" ); yapÄ±yorum.
				callback = callback( "abort" );

				try {

// Bu kÄ±sÄ±mda xhr.send( options.hasContent && options.data || null ); yapÄ±yorum.
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

// Bu kÄ±sÄ±mda if ( callback ) { yapÄ±yorum.
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Bu kÄ±sÄ±mda jQuery.ajaxPrefilter( function( s ) { yapÄ±yorum.
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Bu kÄ±sÄ±mda jQuery.ajaxSetup( { yapÄ±yorum.
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Bu kÄ±sÄ±mda jQuery.ajaxPrefilter( "script", function( s ) { yapÄ±yorum.
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bu kÄ±sÄ±mda jQuery.ajaxTransport( "script", function( s ) { yapÄ±yorum.
jQuery.ajaxTransport( "script", function( s ) {

// Bu kÄ±sÄ±mda if ( s.crossDomain || s.scriptAttrs ) { yapÄ±yorum.
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

// Bu kÄ±sÄ±mda document.head.appendChild( script[ 0 ] ); yapÄ±yorum.
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Bu kÄ±sÄ±mda jQuery.ajaxSetup( { yapÄ±yorum.
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Bu kÄ±sÄ±mda jQuery.ajaxPrefilter( "json jsonp", function( s, originalSet... yapÄ±yorum.
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

// Bu kÄ±sÄ±mda if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) { yapÄ±yorum.
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

// Bu kÄ±sÄ±mda callbackName = s.jsonpCallback = isFunction( s.jsonpCallback... yapÄ±yorum.
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

// Bu kÄ±sÄ±mda if ( jsonProp ) { yapÄ±yorum.
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

// Bu kÄ±sÄ±mda s.converters[ "script json" ] = function() { yapÄ±yorum.
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

// Bu kÄ±sÄ±mda s.dataTypes[ 0 ] = "json"; yapÄ±yorum.
		s.dataTypes[ 0 ] = "json";

// Bu kÄ±sÄ±mda overwritten = window[ callbackName ]; yapÄ±yorum.
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

// Bu kÄ±sÄ±mda jqXHR.always( function() { yapÄ±yorum.
		jqXHR.always( function() {

// Bu kÄ±sÄ±mda if ( overwritten === undefined ) { yapÄ±yorum.
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

// Bu kÄ±sÄ±mda } else { yapÄ±yorum.
			} else {
				window[ callbackName ] = overwritten;
			}

// Bu kÄ±sÄ±mda if ( s[ callbackName ] ) { yapÄ±yorum.
			if ( s[ callbackName ] ) {

// Bu kÄ±sÄ±mda s.jsonpCallback = originalSettings.jsonpCallback; yapÄ±yorum.
				s.jsonpCallback = originalSettings.jsonpCallback;

// Bu kÄ±sÄ±mda oldCallbacks.push( callbackName ); yapÄ±yorum.
				oldCallbacks.push( callbackName );
			}

// Bu kÄ±sÄ±mda if ( responseContainer && isFunction( overwritten ) ) { yapÄ±yorum.
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

// Bu kÄ±sÄ±mda return "script"; yapÄ±yorum.
		return "script";
	}
} );




// Bu kÄ±sÄ±mda support.createHTMLDocument = ( function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.createHTMLDocument = ( function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.createHTMLDocument = ( function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.createHTMLDocument = ( function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda support.createHTMLDocument = ( function() { yapÄ±yorum.
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Bu kÄ±sÄ±mda jQuery.parseHTML = function( data, context, keepScripts ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.parseHTML = function( data, context, keepScripts ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.parseHTML = function( data, context, keepScripts ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.parseHTML = function( data, context, keepScripts ) { yapÄ±yorum.
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

// Bu kÄ±sÄ±mda if ( support.createHTMLDocument ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( support.createHTMLDocument ) { yapÄ±yorum.
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

// Bu kÄ±sÄ±mda base = context.createElement( "base" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda base = context.createElement( "base" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda base = context.createElement( "base" ); yapÄ±yorum.
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

// Bu kÄ±sÄ±mda if ( parsed ) { yapÄ±yorum.
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

// Bu kÄ±sÄ±mda if ( isFunction( params ) ) { yapÄ±yorum.
	if ( isFunction( params ) ) {

// Bu kÄ±sÄ±mda callback = params; yapÄ±yorum.
		callback = params;
		params = undefined;

// Bu kÄ±sÄ±mda } else if ( params && typeof params === "object" ) { yapÄ±yorum.
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

// Bu kÄ±sÄ±mda if ( self.length > 0 ) { yapÄ±yorum.
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

// Bu kÄ±sÄ±mda type: type || "GET", yapÄ±yorum.
// Bu kÄ±sÄ±mda type: type || "GET", yapÄ±yorum.
// Bu kÄ±sÄ±mda type: type || "GET", yapÄ±yorum.
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

// Bu kÄ±sÄ±mda response = arguments; yapÄ±yorum.
			response = arguments;

			self.html( selector ?

// Bu kÄ±sÄ±mda jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) )... yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) )... yapÄ±yorum.
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

// Bu kÄ±sÄ±mda responseText ); yapÄ±yorum.
				responseText );

// Bu kÄ±sÄ±mda } ).always( callback && function( jqXHR, status ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda } ).always( callback && function( jqXHR, status ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda } ).always( callback && function( jqXHR, status ) { yapÄ±yorum.
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

// Bu kÄ±sÄ±mda if ( position === "static" ) { yapÄ±yorum.
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

// Bu kÄ±sÄ±mda if ( calculatePosition ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( calculatePosition ) { yapÄ±yorum.
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

// Bu kÄ±sÄ±mda options = options.call( elem, i, jQuery.extend( {}, curOffse... yapÄ±yorum.
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

// Bu kÄ±sÄ±mda offset: function( options ) { yapÄ±yorum.
	offset: function( options ) {

// Bu kÄ±sÄ±mda if ( arguments.length ) { yapÄ±yorum.
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

// Bu kÄ±sÄ±mda if ( !elem.getClientRects().length ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !elem.getClientRects().length ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !elem.getClientRects().length ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !elem.getClientRects().length ) { yapÄ±yorum.
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

// Bu kÄ±sÄ±mda rect = elem.getBoundingClientRect(); yapÄ±yorum.
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

// Bu kÄ±sÄ±mda position: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda position: function() { yapÄ±yorum.
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

// Bu kÄ±sÄ±mda if ( jQuery.css( elem, "position" ) === "fixed" ) { yapÄ±yorum.
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

// Bu kÄ±sÄ±mda offset = elem.getBoundingClientRect(); yapÄ±yorum.
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

// Bu kÄ±sÄ±mda doc = elem.ownerDocument; yapÄ±yorum.
// Bu kÄ±sÄ±mda doc = elem.ownerDocument; yapÄ±yorum.
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

// Bu kÄ±sÄ±mda parentOffset = jQuery( offsetParent ).offset(); yapÄ±yorum.
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

// Bu kÄ±sÄ±mda return { yapÄ±yorum.
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

// Bu kÄ±sÄ±mda offsetParent: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda offsetParent: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda offsetParent: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda offsetParent: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda offsetParent: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda offsetParent: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda offsetParent: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda offsetParent: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda offsetParent: function() { yapÄ±yorum.
// Bu kÄ±sÄ±mda offsetParent: function() { yapÄ±yorum.
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Bu kÄ±sÄ±mda jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYO... yapÄ±yorum.
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

// Bu kÄ±sÄ±mda var win; yapÄ±yorum.
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Bu kÄ±sÄ±mda jQuery.each( [ "top", "left" ], function( _i, prop ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( [ "top", "left" ], function( _i, prop ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( [ "top", "left" ], function( _i, prop ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( [ "top", "left" ], function( _i, prop ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( [ "top", "left" ], function( _i, prop ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.each( [ "top", "left" ], function( _i, prop ) { yapÄ±yorum.
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

// Bu kÄ±sÄ±mda return rnumnonpx.test( computed ) ? yapÄ±yorum.
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Bu kÄ±sÄ±mda jQuery.each( { Height: "height", Width: "width" }, function(... yapÄ±yorum.
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

// Bu kÄ±sÄ±mda jQuery.fn[ funcName ] = function( margin, value ) { yapÄ±yorum.
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

// Bu kÄ±sÄ±mda return funcName.indexOf( "outer" ) === 0 ? yapÄ±yorum.
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

// Bu kÄ±sÄ±mda if ( elem.nodeType === 9 ) { yapÄ±yorum.
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

// Bu kÄ±sÄ±mda return Math.max( yapÄ±yorum.
// Bu kÄ±sÄ±mda return Math.max( yapÄ±yorum.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

// Bu kÄ±sÄ±mda jQuery.css( elem, type, extra ) : yapÄ±yorum.
					jQuery.css( elem, type, extra ) :

// Bu kÄ±sÄ±mda jQuery.style( elem, type, value, extra ); yapÄ±yorum.
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

// Bu kÄ±sÄ±mda return arguments.length === 1 ? yapÄ±yorum.
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

// Bu kÄ±sÄ±mda jQuery.fn[ name ] = function( data, fn ) { yapÄ±yorum.
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Bu kÄ±sÄ±mda var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; yapÄ±yorum.
// Bu kÄ±sÄ±mda var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; yapÄ±yorum.
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bu kÄ±sÄ±mda jQuery.proxy = function( fn, context ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.proxy = function( fn, context ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.proxy = function( fn, context ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda jQuery.proxy = function( fn, context ) { yapÄ±yorum.
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

// Bu kÄ±sÄ±mda if ( !isFunction( fn ) ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( !isFunction( fn ) ) { yapÄ±yorum.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

// Bu kÄ±sÄ±mda args = slice.call( arguments, 2 ); yapÄ±yorum.
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

// Bu kÄ±sÄ±mda proxy.guid = fn.guid = fn.guid || jQuery.guid++; yapÄ±yorum.
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

// Bu kÄ±sÄ±mda var type = jQuery.type( obj ); yapÄ±yorum.
// Bu kÄ±sÄ±mda var type = jQuery.type( obj ); yapÄ±yorum.
// Bu kÄ±sÄ±mda var type = jQuery.type( obj ); yapÄ±yorum.
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

// Bu kÄ±sÄ±mda !isNaN( obj - parseFloat( obj ) ); yapÄ±yorum.
// Bu kÄ±sÄ±mda !isNaN( obj - parseFloat( obj ) ); yapÄ±yorum.
// Bu kÄ±sÄ±mda !isNaN( obj - parseFloat( obj ) ); yapÄ±yorum.
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Bu kÄ±sÄ±mda if ( typeof define === "function" && define.amd ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof define === "function" && define.amd ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof define === "function" && define.amd ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof define === "function" && define.amd ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof define === "function" && define.amd ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof define === "function" && define.amd ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof define === "function" && define.amd ) { yapÄ±yorum.

// Bu kÄ±sÄ±mda if ( typeof define === "function" && define.amd ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof define === "function" && define.amd ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof define === "function" && define.amd ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof define === "function" && define.amd ) { yapÄ±yorum.

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

// Bu kÄ±sÄ±mda _jQuery = window.jQuery, yapÄ±yorum.
	_jQuery = window.jQuery,

// Bu kÄ±sÄ±mda _$ = window.$; yapÄ±yorum.
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Bu kÄ±sÄ±mda if ( typeof noGlobal === "undefined" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof noGlobal === "undefined" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof noGlobal === "undefined" ) { yapÄ±yorum.
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

