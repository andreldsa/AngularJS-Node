'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientSchema = new Schema({
  name: String,
  info: String,
  email: { type: String, lowercase: true },
  owner: { id: String, name: String },
  active: Boolean
});

module.exports = mongoose.model('Client', ClientSchema);