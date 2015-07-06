'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// questionType Validation
function validateFormFieldType(value) {
  if (!value || typeof myVar !== 'string' ) { return false; }

  var validTypes = [
    'textfield',
    'date',
    'email',
    'legal',
    'url',
    'number',

    'textarea',
    'statement',
    'welcome',
    'thankyou',

    'file',

    'dropdown',
    'scale',
    'rating',
    'radio',
    'checkbox',

    'hidden',
  ];

  if (validTypes.indexOf(value) > -1) { 
    return true;
  }
  return false;
}


/**
 * Question Schema
 */
var FormFieldSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	description: {
		type: String,
		default: '',
	},
	options: [{
		type: String
	}]
	required: {
		type: Boolean,
		default: true,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	fieldType: {
		type: String,
		required: 'Field type cannot be blank',
		validate: [validateFormFieldType, 'Invalid field type']
	},
	value: Schema.Types.Mixed

});

module.exports = FormFieldSchema;

// mongoose.model('Field', FormFieldSchema);