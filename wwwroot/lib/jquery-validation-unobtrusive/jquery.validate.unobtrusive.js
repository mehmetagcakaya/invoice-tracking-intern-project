﻿/**
 * @license
 * Unobtrusive validation support library for jQuery and jQuery Validate
 * Copyright (c) .NET Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
 * @version v4.0.0
 */

/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: false */
/*global document: false, jQuery: false */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
// Bu kÄ±sÄ±mda define("jquery.validate.unobtrusive", ['jquery-validation'],... yapÄ±yorum.
        define("jquery.validate.unobtrusive", ['jquery-validation'], factory);
    } else if (typeof module === 'object' && module.exports) {
// Bu kÄ±sÄ±mda module.exports = factory(require('jquery-validation')); yapÄ±yorum.
        module.exports = factory(require('jquery-validation'));
    } else {
// Bu kÄ±sÄ±mda jQuery.validator.unobtrusive = factory(jQuery); yapÄ±yorum.
        jQuery.validator.unobtrusive = factory(jQuery);
    }
}(function ($) {
    var $jQval = $.validator,
        adapters,
        data_validation = "unobtrusiveValidation";

    function setValidationValues(options, ruleName, value) {
        options.rules[ruleName] = value;
        if (options.message) {
            options.messages[ruleName] = options.message;
        }
    }

    function splitAndTrim(value) {
        return value.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g);
    }

    function escapeAttributeValue(value) {
// Bu kÄ±sÄ±mda return value.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/... yapÄ±yorum.
        return value.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1");
    }

    function getModelPrefix(fieldName) {
        return fieldName.substr(0, fieldName.lastIndexOf(".") + 1);
    }

    function appendModelPrefix(value, prefix) {
        if (value.indexOf("*.") === 0) {
            value = value.replace("*.", prefix);
        }
        return value;
    }

    function onError(error, inputElement) {  // 'this' is the form element
        var container = $(this).find("[data-valmsg-for='" + escapeAttributeValue(inputElement[0].name) + "']"),
            replaceAttrValue = container.attr("data-valmsg-replace"),
            replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) !== false : null;

        container.removeClass("field-validation-valid").addClass("field-validation-error");
        error.data("unobtrusiveContainer", container);

        if (replace) {
            container.empty();
            error.removeClass("input-validation-error").appendTo(container);
        }
        else {
            error.hide();
        }
    }

    function onErrors(event, validator) {  // 'this' is the form element
        var container = $(this).find("[data-valmsg-summary=true]"),
            list = container.find("ul");

        if (list && list.length && validator.errorList.length) {
            list.empty();
            container.addClass("validation-summary-errors").removeClass("validation-summary-valid");

            $.each(validator.errorList, function () {
                $("<li />").html(this.message).appendTo(list);
            });
        }
    }

    function onSuccess(error) {  // 'this' is the form element
        var container = error.data("unobtrusiveContainer");

        if (container) {
            var replaceAttrValue = container.attr("data-valmsg-replace"),
                replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) : null;

            container.addClass("field-validation-valid").removeClass("field-validation-error");
            error.removeData("unobtrusiveContainer");

            if (replace) {
                container.empty();
            }
        }
    }

    function onReset(event) {  // 'this' is the form element
        var $form = $(this),
            key = '__jquery_unobtrusive_validation_form_reset';
        if ($form.data(key)) {
            return;
        }
// Bu kÄ±sÄ±mda $form.data(key, true); yapÄ±yorum.
        $form.data(key, true);
        try {
            $form.data("validator").resetForm();
        } finally {
            $form.removeData(key);
        }

        $form.find(".validation-summary-errors")
            .addClass("validation-summary-valid")
            .removeClass("validation-summary-errors");
        $form.find(".field-validation-error")
            .addClass("field-validation-valid")
            .removeClass("field-validation-error")
            .removeData("unobtrusiveContainer")
            .find(">*")  // If we were using valmsg-replace, get the underlying error
            .removeData("unobtrusiveContainer");
    }

    function validationInfo(form) {
        var $form = $(form),
            result = $form.data(data_validation),
            onResetProxy = $.proxy(onReset, form),
            defaultOptions = $jQval.unobtrusive.options || {},
            execInContext = function (name, args) {
                var func = defaultOptions[name];
                func && $.isFunction(func) && func.apply(form, args);
            };

        if (!result) {
            result = {
                options: {  // options structure passed to jQuery Validate's validate() method
                    errorClass: defaultOptions.errorClass || "input-validation-error",
                    errorElement: defaultOptions.errorElement || "span",
                    errorPlacement: function () {
                        onError.apply(form, arguments);
                        execInContext("errorPlacement", arguments);
                    },
                    invalidHandler: function () {
                        onErrors.apply(form, arguments);
                        execInContext("invalidHandler", arguments);
                    },
                    messages: {},
                    rules: {},
                    success: function () {
                        onSuccess.apply(form, arguments);
                        execInContext("success", arguments);
                    }
                },
                attachValidation: function () {
                    $form
                        .off("reset." + data_validation, onResetProxy)
                        .on("reset." + data_validation, onResetProxy)
                        .validate(this.options);
                },
                validate: function () {  // a validation function that is called by unobtrusive Ajax
                    $form.validate();
                    return $form.valid();
                }
            };
            $form.data(data_validation, result);
        }

        return result;
    }

    $jQval.unobtrusive = {
        adapters: [],

        parseElement: function (element, skipAttach) {
// Bu kÄ±sÄ±mda var $element = $(element), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $element = $(element), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $element = $(element), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $element = $(element), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $element = $(element), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $element = $(element), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $element = $(element), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $element = $(element), yapÄ±yorum.
            var $element = $(element),
                form = $element.parents("form")[0],
                valInfo, rules, messages;

            if (!form) {  // Cannot do client-side validation without a form
                return;
            }

            valInfo = validationInfo(form);
            valInfo.options.rules[element.name] = rules = {};
            valInfo.options.messages[element.name] = messages = {};

            $.each(this.adapters, function () {
                var prefix = "data-val-" + this.name,
                    message = $element.attr(prefix),
                    paramValues = {};

                if (message !== undefined) {  // Compare against undefined, because an empty message is legal (and falsy)
                    prefix += "-";

                    $.each(this.params, function () {
                        paramValues[this] = $element.attr(prefix + this);
                    });

                    this.adapt({
                        element: element,
                        form: form,
                        message: message,
                        params: paramValues,
                        rules: rules,
                        messages: messages
                    });
                }
            });

            $.extend(rules, { "__dummy__": true });

            if (!skipAttach) {
                valInfo.attachValidation();
            }
        },

        parse: function (selector) {
// Bu kÄ±sÄ±mda var $selector = $(selector), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $selector = $(selector), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $selector = $(selector), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $selector = $(selector), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $selector = $(selector), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $selector = $(selector), yapÄ±yorum.

// Bu kÄ±sÄ±mda var $selector = $(selector), yapÄ±yorum.
// Bu kÄ±sÄ±mda var $selector = $(selector), yapÄ±yorum.
            var $selector = $(selector),
                $forms = $selector.parents()
                    .addBack()
                    .filter("form")
                    .add($selector.find("form"))
                    .has("[data-val=true]");

            $selector.find("[data-val=true]").each(function () {
                $jQval.unobtrusive.parseElement(this, true);
            });

            $forms.each(function () {
                var info = validationInfo(this);
                if (info) {
                    info.attachValidation();
                }
            });
        }
    };

    adapters = $jQval.unobtrusive.adapters;

    adapters.add = function (adapterName, params, fn) {
// Bu kÄ±sÄ±mda if (!fn) {  // Called with no params, just a function yapÄ±yorum.
// Bu kÄ±sÄ±mda if (!fn) {  // Called with no params, just a function yapÄ±yorum.
// Bu kÄ±sÄ±mda if (!fn) {  // Called with no params, just a function yapÄ±yorum.
// Bu kÄ±sÄ±mda if (!fn) {  // Called with no params, just a function yapÄ±yorum.
// Bu kÄ±sÄ±mda if (!fn) {  // Called with no params, just a function yapÄ±yorum.
// Bu kÄ±sÄ±mda if (!fn) {  // Called with no params, just a function yapÄ±yorum.
// Bu kÄ±sÄ±mda if (!fn) {  // Called with no params, just a function yapÄ±yorum.
// Bu kÄ±sÄ±mda if (!fn) {  // Called with no params, just a function yapÄ±yorum.
// Bu kÄ±sÄ±mda if (!fn) {  // Called with no params, just a function yapÄ±yorum.
        if (!fn) {  // Called with no params, just a function
            fn = params;
            params = [];
        }
        this.push({ name: adapterName, params: params, adapt: fn });
        return this;
    };

    adapters.addBool = function (adapterName, ruleName) {
// Bu kÄ±sÄ±mda return this.add(adapterName, function (options) { yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, function (options) { yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, function (options) { yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, function (options) { yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, function (options) { yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, function (options) { yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, function (options) { yapÄ±yorum.
        return this.add(adapterName, function (options) {
            setValidationValues(options, ruleName || adapterName, true);
        });
    };

    adapters.addMinMax = function (adapterName, minRuleName, maxRuleName, minMaxRuleName, minAttribute, maxAttribute) {
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [minAttribute || "min", maxAttr... yapÄ±yorum.
        return this.add(adapterName, [minAttribute || "min", maxAttribute || "max"], function (options) {
            var min = options.params.min,
                max = options.params.max;

            if (min && max) {
                setValidationValues(options, minMaxRuleName, [min, max]);
            }
            else if (min) {
                setValidationValues(options, minRuleName, min);
            }
            else if (max) {
                setValidationValues(options, maxRuleName, max);
            }
        });
    };

    adapters.addSingleVal = function (adapterName, attribute, ruleName) {
// Bu kÄ±sÄ±mda return this.add(adapterName, [attribute || "val"], function ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [attribute || "val"], function ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [attribute || "val"], function ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [attribute || "val"], function ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [attribute || "val"], function ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [attribute || "val"], function ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [attribute || "val"], function ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [attribute || "val"], function ... yapÄ±yorum.
// Bu kÄ±sÄ±mda return this.add(adapterName, [attribute || "val"], function ... yapÄ±yorum.
        return this.add(adapterName, [attribute || "val"], function (options) {
            setValidationValues(options, ruleName || adapterName, options.params[attribute]);
        });
    };

    $jQval.addMethod("__dummy__", function (value, element, params) {
        return true;
    });

    $jQval.addMethod("regex", function (value, element, params) {
        var match;
        if (this.optional(element)) {
            return true;
        }

        match = new RegExp(params).exec(value);
        return (match && (match.index === 0) && (match[0].length === value.length));
    });

    $jQval.addMethod("nonalphamin", function (value, element, nonalphamin) {
        var match;
        if (nonalphamin) {
            match = value.match(/\W/g);
            match = match && match.length >= nonalphamin;
        }
        return match;
    });

    if ($jQval.methods.extension) {
        adapters.addSingleVal("accept", "mimtype");
        adapters.addSingleVal("extension", "extension");
    } else {
// Bu kÄ±sÄ±mda adapters.addSingleVal("extension", "extension", "accept"); yapÄ±yorum.
// Bu kÄ±sÄ±mda adapters.addSingleVal("extension", "extension", "accept"); yapÄ±yorum.
// Bu kÄ±sÄ±mda adapters.addSingleVal("extension", "extension", "accept"); yapÄ±yorum.
        adapters.addSingleVal("extension", "extension", "accept");
    }

    adapters.addSingleVal("regex", "pattern");
    adapters.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    adapters.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    adapters.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
    adapters.add("equalto", ["other"], function (options) {
        var prefix = getModelPrefix(options.element.name),
            other = options.params.other,
            fullOtherName = appendModelPrefix(other, prefix),
            element = $(options.form).find(":input").filter("[name='" + escapeAttributeValue(fullOtherName) + "']")[0];

        setValidationValues(options, "equalTo", element);
    });
    adapters.add("required", function (options) {
// Bu kÄ±sÄ±mda if (options.element.tagName.toUpperCase() !== "INPUT" || opt... yapÄ±yorum.
        if (options.element.tagName.toUpperCase() !== "INPUT" || options.element.type.toUpperCase() !== "CHECKBOX") {
            setValidationValues(options, "required", true);
        }
    });
    adapters.add("remote", ["url", "type", "additionalfields"], function (options) {
        var value = {
            url: options.params.url,
            type: options.params.type || "GET",
            data: {}
        },
            prefix = getModelPrefix(options.element.name);

        $.each(splitAndTrim(options.params.additionalfields || options.element.name), function (i, fieldName) {
            var paramName = appendModelPrefix(fieldName, prefix);
            value.data[paramName] = function () {
                var field = $(options.form).find(":input").filter("[name='" + escapeAttributeValue(paramName) + "']");
// Bu kÄ±sÄ±mda if (field.is(":checkbox")) { yapÄ±yorum.
                if (field.is(":checkbox")) {
                    return field.filter(":checked").val() || field.filter(":hidden").val() || '';
                }
                else if (field.is(":radio")) {
                    return field.filter(":checked").val() || '';
                }
                return field.val();
            };
        });

        setValidationValues(options, "remote", value);
    });
    adapters.add("password", ["min", "nonalphamin", "regex"], function (options) {
        if (options.params.min) {
            setValidationValues(options, "minlength", options.params.min);
        }
        if (options.params.nonalphamin) {
            setValidationValues(options, "nonalphamin", options.params.nonalphamin);
        }
        if (options.params.regex) {
            setValidationValues(options, "regex", options.params.regex);
        }
    });
    adapters.add("fileextensions", ["extensions"], function (options) {
        setValidationValues(options, "extension", options.params.extensions);
    });

    $(function () {
        $jQval.unobtrusive.parse(document);
    });

    return $jQval.unobtrusive;
}));

