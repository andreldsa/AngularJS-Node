'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RealtySchema = new Schema({
  type: String,
  region: String,
  city: String,
  address: String,  
  active: Boolean
});

module.exports = mongoose.model('Realty', RealtySchema);