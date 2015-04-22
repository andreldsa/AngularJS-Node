'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var validate = require('mongoose-validate')

var ClientSchema = new Schema({
  name: String,
  phone: { type: String, required: true},
  address: { type: String, required: true},
  city: { type: String, required: true},
  info: String,
  email: { type: String, lowercase: true, required: true, validate: [validate.email, 'Invalid email address'] },
  owner: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  active: Boolean
});

module.exports = mongoose.model('Client', ClientSchema);