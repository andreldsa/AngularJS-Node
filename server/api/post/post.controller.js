'use strict';

var _ = require('lodash');
var Utils = require('../../components/utils')
var Post = require('./post.model');
var auth = require('../../auth/auth.service');

var validationError = function(res, err) {
	  return res.json(422, err);
};

function findById(req) {
	var query = Post.findById(req.params.id).where('owner').equals(req.user)
	if (auth.isAdmin(req.user)) {
		query = Post.findById(req.params.id)
	}
	return query
}

// Get list of posts
exports.index = function(req, res) {
	var query = Post.find()
	Utils.applyFilters(query, Post.filters(), req.query)
	query.exec(function(err, posts) {
		if (err) {
			return handleError(res, err);
		}
		return res.json(200, posts);
	});
};

// Get a single post
exports.show = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    return res.json(post);
  });
};

// Creates a new post in the DB.
exports.create = function(req, res) {
  Post.create(req.body, function(err, post) {
    if(err) { return validationError(res, err); }
    post.owner = req.user;
    post.save(function(err, post) {
    	 if (err) return validationError(err);
    })
    return res.json(201, post);
  });
};

// Updates an existing post in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  findById(req).exec(function (err, post) {
    if (err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    var updated = _.merge(post, req.body);
    updated.save(function (err) {
      if (err) { return validationError(res, err); }
      return res.json(200, post);
    });
  });
};

// Deletes a post from the DB.
exports.destroy = function(req, res) {
	findById(req).exec(function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    post.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}