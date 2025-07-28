/*!
 * jQuery Validation Plugin v1.19.5
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2022 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

// Bu kÄ±sÄ±mda validate: function( options ) { yapÄ±yorum.
	validate: function( options ) {

// Bu kÄ±sÄ±mda if ( !this.length ) { yapÄ±yorum.
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

// Bu kÄ±sÄ±mda var validator = $.data( this[ 0 ], "validator" ); yapÄ±yorum.
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

// Bu kÄ±sÄ±mda this.attr( "novalidate", "novalidate" ); yapÄ±yorum.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

// Bu kÄ±sÄ±mda validator.submitButton = event.currentTarget; yapÄ±yorum.
// Bu kÄ±sÄ±mda validator.submitButton = event.currentTarget; yapÄ±yorum.
				validator.submitButton = event.currentTarget;

// Bu kÄ±sÄ±mda if ( $( this ).hasClass( "cancel" ) ) { yapÄ±yorum.
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

// Bu kÄ±sÄ±mda if ( $( this ).attr( "formnovalidate" ) !== undefined ) { yapÄ±yorum.
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

// Bu kÄ±sÄ±mda this.on( "submit.validate", function( event ) { yapÄ±yorum.
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

// Bu kÄ±sÄ±mda event.preventDefault(); yapÄ±yorum.
					event.preventDefault();
				}

				function handle() {
					var hidden, result;

// Bu kÄ±sÄ±mda if ( validator.submitButton && ( validator.settings.submitHa... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( validator.submitButton && ( validator.settings.submitHa... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( validator.submitButton && ( validator.settings.submitHa... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( validator.submitButton && ( validator.settings.submitHa... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( validator.submitButton && ( validator.settings.submitHa... yapÄ±yorum.
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler && !validator.settings.debug ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

// Bu kÄ±sÄ±mda hidden.remove(); yapÄ±yorum.
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

// Bu kÄ±sÄ±mda if ( validator.cancelSubmit ) { yapÄ±yorum.
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

// Bu kÄ±sÄ±mda valid: function() { yapÄ±yorum.
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

// Bu kÄ±sÄ±mda rules: function( command, argument ) { yapÄ±yorum.
	rules: function( command, argument ) {
		var element = this[ 0 ],
			isContentEditable = typeof this.attr( "contenteditable" ) !== "undefined" && this.attr( "contenteditable" ) !== "false",
			settings, staticRules, existingRules, data, param, filtered;

// Bu kÄ±sÄ±mda if ( element == null ) { yapÄ±yorum.
		if ( element == null ) {
			return;
		}

		if ( !element.form && isContentEditable ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

// Bu kÄ±sÄ±mda delete existingRules.messages; yapÄ±yorum.
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

// Bu kÄ±sÄ±mda if ( data.required ) { yapÄ±yorum.
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

// Bu kÄ±sÄ±mda if ( data.remote ) { yapÄ±yorum.
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// Bu kÄ±sÄ±mda var trim = function( str ) { yapÄ±yorum.
var trim = function( str ) {

// Bu kÄ±sÄ±mda return str.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""... yapÄ±yorum.
	return str.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "" );
};

// Bu kÄ±sÄ±mda $.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[... yapÄ±yorum.
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

// Bu kÄ±sÄ±mda blank: function( a ) { yapÄ±yorum.
	blank: function( a ) {
		return !trim( "" + $( a ).val() );
	},

// Bu kÄ±sÄ±mda filled: function( a ) { yapÄ±yorum.
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!trim( "" + val );
	},

// Bu kÄ±sÄ±mda unchecked: function( a ) { yapÄ±yorum.
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Bu kÄ±sÄ±mda $.validator = function( options, form ) { yapÄ±yorum.
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// Bu kÄ±sÄ±mda $.validator.format = function( source, params ) { yapÄ±yorum.
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

// Bu kÄ±sÄ±mda if ( this.settings.focusCleanup ) { yapÄ±yorum.
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
// Bu kÄ±sÄ±mda var excludedKeys = [ yapÄ±yorum.
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

// Bu kÄ±sÄ±mda if ( element.name in this.submitted ) { yapÄ±yorum.
			if ( element.name in this.submitted ) {
				this.element( element );

// Bu kÄ±sÄ±mda } else if ( element.parentNode.name in this.submitted ) { yapÄ±yorum.
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

// Bu kÄ±sÄ±mda setDefaults: function( settings ) { yapÄ±yorum.
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var currentForm = this.currentForm,
				groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

// Bu kÄ±sÄ±mda if ( !this.form && isContentEditable ) { yapÄ±yorum.
				if ( !this.form && isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

// Bu kÄ±sÄ±mda if ( currentForm !== this.form ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( currentForm !== this.form ) { yapÄ±yorum.
				if ( currentForm !== this.form ) {
					return;
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

// Bu kÄ±sÄ±mda .on( "click.validate", "select, option, [type='radio'], [typ... yapÄ±yorum.
// Bu kÄ±sÄ±mda .on( "click.validate", "select, option, [type='radio'], [typ... yapÄ±yorum.
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

// Bu kÄ±sÄ±mda form: function() { yapÄ±yorum.
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

// Bu kÄ±sÄ±mda element: function( element ) { yapÄ±yorum.
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

// Bu kÄ±sÄ±mda group = this.groups[ checkElement.name ]; yapÄ±yorum.
// Bu kÄ±sÄ±mda group = this.groups[ checkElement.name ]; yapÄ±yorum.
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

// Bu kÄ±sÄ±mda this.toHide = this.toHide.add( this.containers ); yapÄ±yorum.
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

// Bu kÄ±sÄ±mda $( element ).attr( "aria-invalid", !rs ); yapÄ±yorum.
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

// Bu kÄ±sÄ±mda showErrors: function( errors ) { yapÄ±yorum.
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

// Bu kÄ±sÄ±mda $.extend( this.errorMap, errors ); yapÄ±yorum.
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

// Bu kÄ±sÄ±mda this.successList = $.grep( this.successList, function( eleme... yapÄ±yorum.
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

// Bu kÄ±sÄ±mda resetForm: function() { yapÄ±yorum.
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

// Bu kÄ±sÄ±mda if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ]... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ]... yapÄ±yorum.
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.trigger( "focus" )

// Bu kÄ±sÄ±mda .trigger( "focusin" ); yapÄ±yorum.
					.trigger( "focusin" );
				} catch ( e ) {

// Bu kÄ±sÄ±mda } yapÄ±yorum.
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

// Bu kÄ±sÄ±mda return $( this.currentForm ) yapÄ±yorum.
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

// Bu kÄ±sÄ±mda if ( isContentEditable ) { yapÄ±yorum.
				if ( isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

// Bu kÄ±sÄ±mda if ( this.form !== validator.currentForm ) { yapÄ±yorum.
				if ( this.form !== validator.currentForm ) {
					return false;
				}

// Bu kÄ±sÄ±mda if ( name in rulesCache || !validator.objectLength( $( this ... yapÄ±yorum.
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				isContentEditable = typeof $element.attr( "contenteditable" ) !== "undefined" && $element.attr( "contenteditable" ) !== "false",
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( isContentEditable ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

// Bu kÄ±sÄ±mda if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) { yapÄ±yorum.
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

// Bu kÄ±sÄ±mda idx = val.lastIndexOf( "/" ); yapÄ±yorum.
// Bu kÄ±sÄ±mda idx = val.lastIndexOf( "/" ); yapÄ±yorum.
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

// Bu kÄ±sÄ±mda idx = val.lastIndexOf( "\\" ); yapÄ±yorum.
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

// Bu kÄ±sÄ±mda return val; yapÄ±yorum.
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

// Bu kÄ±sÄ±mda if ( typeof rules.normalizer === "function" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( typeof rules.normalizer === "function" ) { yapÄ±yorum.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

// Bu kÄ±sÄ±mda if ( normalizer ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( normalizer ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( normalizer ) { yapÄ±yorum.
			if ( normalizer ) {
				val = normalizer.call( element, val );

// Bu kÄ±sÄ±mda delete rules.normalizer; yapÄ±yorum.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

// Bu kÄ±sÄ±mda if ( result === "dependency-mismatch" && rulesCount === 1 ) ... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( result === "dependency-mismatch" && rulesCount === 1 ) ... yapÄ±yorum.
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

// Bu kÄ±sÄ±mda customDataMessage: function( element, method ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda customDataMessage: function( element, method ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda customDataMessage: function( element, method ) { yapÄ±yorum.
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

// Bu kÄ±sÄ±mda customMessage: function( name, method ) { yapÄ±yorum.
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

// Bu kÄ±sÄ±mda findDefined: function() { yapÄ±yorum.
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

// Bu kÄ±sÄ±mda defaultMessage: function( element, rule ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda defaultMessage: function( element, rule ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda defaultMessage: function( element, rule ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda defaultMessage: function( element, rule ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda defaultMessage: function( element, rule ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda defaultMessage: function( element, rule ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda defaultMessage: function( element, rule ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda defaultMessage: function( element, rule ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda defaultMessage: function( element, rule ) { yapÄ±yorum.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

// Bu kÄ±sÄ±mda !this.settings.ignoreTitle && element.title || undefined, yapÄ±yorum.
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

// Bu kÄ±sÄ±mda error.removeClass( this.settings.validClass ).addClass( this... yapÄ±yorum.
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

// Bu kÄ±sÄ±mda error.html( message ); yapÄ±yorum.
				error.html( message );
			} else {

// Bu kÄ±sÄ±mda error = $( "<" + this.settings.errorElement + ">" ) yapÄ±yorum.
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

// Bu kÄ±sÄ±mda place = error; yapÄ±yorum.
				place = error;
				if ( this.settings.wrapper ) {

// Bu kÄ±sÄ±mda place = error.hide().show().wrap( "<" + this.settings.wrappe... yapÄ±yorum.
// Bu kÄ±sÄ±mda place = error.hide().show().wrap( "<" + this.settings.wrappe... yapÄ±yorum.
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

// Bu kÄ±sÄ±mda if ( error.is( "label" ) ) { yapÄ±yorum.
				if ( error.is( "label" ) ) {

// Bu kÄ±sÄ±mda error.attr( "for", elementID ); yapÄ±yorum.
					error.attr( "for", elementID );

// Bu kÄ±sÄ±mda } else if ( error.parents( "label[for='" + this.escapeCssMet... yapÄ±yorum.
// Bu kÄ±sÄ±mda } else if ( error.parents( "label[for='" + this.escapeCssMet... yapÄ±yorum.
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

// Bu kÄ±sÄ±mda if ( !describedBy ) { yapÄ±yorum.
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

// Bu kÄ±sÄ±mda describedBy += " " + errorID; yapÄ±yorum.
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

// Bu kÄ±sÄ±mda group = this.groups[ element.name ]; yapÄ±yorum.
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

// Bu kÄ±sÄ±mda if ( describer ) { yapÄ±yorum.
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

// Bu kÄ±sÄ±mda escapeCssMeta: function( string ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda escapeCssMeta: function( string ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda escapeCssMeta: function( string ) { yapÄ±yorum.
		escapeCssMeta: function( string ) {
			if ( string === undefined ) {
				return "";
			}

			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

// Bu kÄ±sÄ±mda if ( this.checkable( element ) ) { yapÄ±yorum.
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

// Bu kÄ±sÄ±mda return $( element ).not( this.settings.ignore )[ 0 ]; yapÄ±yorum.
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

// Bu kÄ±sÄ±mda if ( this.pendingRequest < 0 ) { yapÄ±yorum.
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() && this.pendingRequest === 0 ) {
				$( this.currentForm ).trigger( "submit" );

// Bu kÄ±sÄ±mda if ( this.submitButton ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( this.submitButton ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( this.submitButton ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( this.submitButton ) { yapÄ±yorum.
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

// Bu kÄ±sÄ±mda destroy: function() { yapÄ±yorum.
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" )
				.find( ".validate-lessThan-blur" )
					.off( ".validate-lessThan" )
					.removeClass( "validate-lessThan-blur" )
				.find( ".validate-lessThanEqual-blur" )
					.off( ".validate-lessThanEqual" )
					.removeClass( "validate-lessThanEqual-blur" )
				.find( ".validate-greaterThanEqual-blur" )
					.off( ".validate-greaterThanEqual" )
					.removeClass( "validate-greaterThanEqual-blur" )
				.find( ".validate-greaterThan-blur" )
					.off( ".validate-greaterThan" )
					.removeClass( "validate-greaterThan-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

// Bu kÄ±sÄ±mda if ( /min|max|step/.test( method ) && ( type === null || /nu... yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( /min|max|step/.test( method ) && ( type === null || /nu... yapÄ±yorum.
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

// Bu kÄ±sÄ±mda if ( isNaN( value ) ) { yapÄ±yorum.
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

// Bu kÄ±sÄ±mda rules[ type === "date" ? "dateISO" : method ] = true; yapÄ±yorum.
// Bu kÄ±sÄ±mda rules[ type === "date" ? "dateISO" : method ] = true; yapÄ±yorum.
			rules[ type === "date" ? "dateISO" : method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

// Bu kÄ±sÄ±mda if ( method === "required" ) { yapÄ±yorum.
			if ( method === "required" ) {
				value = element.getAttribute( method );

// Bu kÄ±sÄ±mda if ( value === "" ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( value === "" ) { yapÄ±yorum.
				if ( value === "" ) {
					value = true;
				}

// Bu kÄ±sÄ±mda value = !!value; yapÄ±yorum.
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

// Bu kÄ±sÄ±mda if ( rules.maxlength && /-1|2147483647|524288/.test( rules.m... yapÄ±yorum.
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );

// Bu kÄ±sÄ±mda if ( value === "" ) { yapÄ±yorum.
			if ( value === "" ) {
				value = true;
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

// Bu kÄ±sÄ±mda $.each( rules, function( prop, val ) { yapÄ±yorum.
		$.each( rules, function( prop, val ) {

// Bu kÄ±sÄ±mda if ( val === false ) { yapÄ±yorum.
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

// Bu kÄ±sÄ±mda $.each( rules, function( rule, parameter ) { yapÄ±yorum.
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = typeof parameter === "function" && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

// Bu kÄ±sÄ±mda $.each( [ "minlength", "maxlength" ], function() { yapÄ±yorum.
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( Array.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

// Bu kÄ±sÄ±mda if ( rules.min != null && rules.max != null ) { yapÄ±yorum.
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

// Bu kÄ±sÄ±mda normalizeRule: function( data ) { yapÄ±yorum.
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

// Bu kÄ±sÄ±mda addMethod: function( name, method, message ) { yapÄ±yorum.
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

// Bu kÄ±sÄ±mda methods: { yapÄ±yorum.
	methods: {

// Bu kÄ±sÄ±mda required: function( value, element, param ) { yapÄ±yorum.
		required: function( value, element, param ) {

// Bu kÄ±sÄ±mda if ( !this.depend( param, element ) ) { yapÄ±yorum.
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

// Bu kÄ±sÄ±mda var val = $( element ).val(); yapÄ±yorum.
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value !== undefined && value !== null && value.length > 0;
		},

// Bu kÄ±sÄ±mda email: function( value, element ) { yapÄ±yorum.
		email: function( value, element ) {

// Bu kÄ±sÄ±mda return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?... yapÄ±yorum.
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

// Bu kÄ±sÄ±mda url: function( value, element ) { yapÄ±yorum.
		url: function( value, element ) {

// Bu kÄ±sÄ±mda return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?... yapÄ±yorum.
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

// Bu kÄ±sÄ±mda date: ( function() { yapÄ±yorum.
		date: ( function() {
			var called = false;

			return function( value, element ) {
				if ( !called ) {
					called = true;
					if ( this.settings.debug && window.console ) {
						console.warn(
							"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
							"Please don't use it, since it relies on the Date constructor, which\n" +
							"behaves very differently across browsers and locales. Use `dateISO`\n" +
							"instead or one of the locale specific methods in `localizations/`\n" +
							"and `additional-methods.js`."
						);
					}
				}

				return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
			};
		}() ),

// Bu kÄ±sÄ±mda dateISO: function( value, element ) { yapÄ±yorum.
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

// Bu kÄ±sÄ±mda number: function( value, element ) { yapÄ±yorum.
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

// Bu kÄ±sÄ±mda digits: function( value, element ) { yapÄ±yorum.
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

// Bu kÄ±sÄ±mda minlength: function( value, element, param ) { yapÄ±yorum.
		minlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

// Bu kÄ±sÄ±mda maxlength: function( value, element, param ) { yapÄ±yorum.
		maxlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

// Bu kÄ±sÄ±mda rangelength: function( value, element, param ) { yapÄ±yorum.
		rangelength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

// Bu kÄ±sÄ±mda min: function( value, element, param ) { yapÄ±yorum.
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

// Bu kÄ±sÄ±mda max: function( value, element, param ) { yapÄ±yorum.
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

// Bu kÄ±sÄ±mda range: function( value, element, param ) { yapÄ±yorum.
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

// Bu kÄ±sÄ±mda step: function( value, element, param ) { yapÄ±yorum.
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

// Bu kÄ±sÄ±mda return match[ 1 ] ? match[ 1 ].length : 0; yapÄ±yorum.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

// Bu kÄ±sÄ±mda if ( notSupported ) { yapÄ±yorum.
// Bu kÄ±sÄ±mda if ( notSupported ) { yapÄ±yorum.
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

// Bu kÄ±sÄ±mda if ( decimalPlaces( value ) > decimals || toInt( value ) % t... yapÄ±yorum.
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

// Bu kÄ±sÄ±mda equalTo: function( value, element, param ) { yapÄ±yorum.
		equalTo: function( value, element, param ) {

// Bu kÄ±sÄ±mda var target = $( param ); yapÄ±yorum.
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

// Bu kÄ±sÄ±mda remote: function( value, element, param, method ) { yapÄ±yorum.
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Bu kÄ±sÄ±mda var pendingRequests = {}, yapÄ±yorum.
// Bu kÄ±sÄ±mda var pendingRequests = {}, yapÄ±yorum.
// Bu kÄ±sÄ±mda var pendingRequests = {}, yapÄ±yorum.

var pendingRequests = {},
	ajax;

// Bu kÄ±sÄ±mda if ( $.ajaxPrefilter ) { yapÄ±yorum.
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

// Bu kÄ±sÄ±mda ajax = $.ajax; yapÄ±yorum.
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));
