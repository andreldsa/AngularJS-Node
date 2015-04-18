'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  link: String,
  realty: [{type: Schema.Types.ObjectId, ref: 'Realty'}],
  username: String,
  upvotes: Number,
  active: Boolean
});

PostSchema.statics.filters = function(){
	return {
		title: 'contains',
		username: 'contains',
		upvotes: 'lessThenEquals',
		link: 'contains'
	}
}

module.exports = mongoose.model('Post', PostSchema);