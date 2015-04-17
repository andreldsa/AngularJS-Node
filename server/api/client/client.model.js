'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientSchema = new Schema({
  name: String,
  info: String,
  email: { type: String, lowercase: true },
  owner: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  active: Boolean
});

module.exports = mongoose.model('Client', ClientSchema);