'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var validate  = require('mongoose-validate')

var PostSchema = new Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  realty: [{type: Schema.Types.ObjectId, ref: 'Realty'}],
  owner: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  active: Boolean
});

PostSchema.statics.filters = function(){
	return {
		title: 'contains',
		description: 'contains',
	}
}

module.exports = mongoose.model('Post', PostSchema);