'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var validate = require('mongoose-validate')

var SaleSchema = new Schema({
  commission: { type: Number, required: true},
  owner: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  realty: [{ type: Schema.Types.ObjectId, ref: 'Realty'}],
  client: [{ type: Schema.Types.ObjectId, ref: 'Client'}],
  price: { type: Number, required: true},
  state: { type: String}
});

SaleSchema.statics.filters = function(){
	return {
		commission: 'lessThenEquals',
		price: 'lessThenEquals',
		state: 'contains'
	}
}

module.exports = mongoose.model('Sale', SaleSchema);