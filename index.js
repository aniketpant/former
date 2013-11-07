
/**
 * Module dependencies.
 */

var domify  = require( 'domify' )
    extend  = require( 'extend' );

/**
 * Expose `Former`
 */

module.exports = Former;

/**
 * Defaults
 */

defaults = {
  'encloseFormFields': '<ul>',
  'encloseField': '<li>',
  'method': 'POST',
  'action': ''
};

/**
 * The `Former` Object
 * @param object el      Element which will enclose the form
 * @param object options All options
 */

function Former( el, options ) {

  this.el = el;
  this.options = extend( false, defaults, options );
  this.init();
}

/**
 * Initialize Form
 */

Former.prototype.init = function() {

  var form = '<form method="' + this.options.method + '" ' + 'action="' + this.options.action + '">';

  this.form = this.el.appendChild( domify( form ) );
  this.formFields = this.form.appendChild( domify(this.options.encloseFormFields) );
}

/**
 * Add new field to form
 */

Former.prototype.add = function ( type, attributes, label ) {

  var field = this.options.encloseField;

  if (label) {
    field += '<label>';
    if (label['text']) {
      field += label['text'];
    }
    field += '</label>';
  }

  field += '<' + type + ' ';

  for (var key in attributes) {
    field += key + '="' + attributes[key] + '" ';
  }

  field += '/>';

  this.formFields.appendChild( domify(field) );
}