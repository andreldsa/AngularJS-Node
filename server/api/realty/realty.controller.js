'use strict';

var _ = require('lodash');
var Realty = require('./realty.model');

// Get list of realtys
exports.index = function(req, res) {
  Realty.find(function (err, realtys) {
    if(err) { return handleError(res, err); }
    return res.json(200, realtys);
  });
};

// Get a single realty
exports.show = function(req, res) {
  Realty.findById(req.params.id, function (err, realty) {
    if(err) { return handleError(res, err); }
    if(!realty) { return res.send(404); }
    return res.json(realty);
  });
};

// Creates a new realty in the DB.
exports.create = function(req, res) {
  Realty.create(req.body, function(err, realty) {
    if(err) { return handleError(res, err); }
    return res.json(201, realty);
  });
};

// Updates an existing realty in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Realty.findById(req.params.id, function (err, realty) {
    if (err) { return handleError(res, err); }
    if(!realty) { return res.send(404); }
    var updated = _.merge(realty, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, realty);
    });
  });
};

// Deletes a realty from the DB.
exports.destroy = function(req, res) {
  Realty.findById(req.params.id, function (err, realty) {
    if(err) { return handleError(res, err); }
    if(!realty) { return res.send(404); }
    realty.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}