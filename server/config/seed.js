/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Client = require('../api/client/client.model');
var Realty = require('../api/realty/realty.model');
var Post = require('../api/post/post.model');
var Sale = require('../api/sale/sale.model');
var App = require('../api/app/app.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

App.find({}).remove(function() {})

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'secret'
  }, function() {
      console.log('finished populating users');
    }
  );
});

User.create({
	_id : '55389e8dc4eb7fc02b2e3f11',
	provider : 'local',
	role : 'admin',
	name : 'Admin',
	email : 'admin@admin.com',
	password : 'secret'
}, function(err, user) {
	App.create({
		"_id" : "5538a255bcec4a702a24bb59",
		"apikey" : "003d8ed40432044e7394131e09f8ad9fc57cd55d",
		"name" : "Master Application",
		"__v" : 0,
		"user" : [ user._id ]
	}, function(err, app) {
		user.apps.push(app)
		user.save(function() {
			console.log('finished master user and apps');
		})
	})
})

Client.find({}).remove(function() {})

Realty.find({}).remove(function() {})

var Post = require('../api/post/post.model');

Post.find({}).remove(function() {
  Post.create(  {
    title : 'India - Tiger population sees 30% increase.',
    link:   'http://www.bbc.com/news/world-asia-30896028',
    username: 'jbloggs',
    upvotes: 0
  },  {
    title : 'The button that is not.',
    link:   'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
    username: 'psmith',
    upvotes: 36
  },  {
    title : 'Google Nears $1B Investment in SpaceX',
    link:   null,
    username: 'aoneill',
    upvotes: 8
  },  {
    title : 'Facebook $3B Investment in SpaceX',
    link:   null,
    username: 'andreldsa',
    upvotes: 8
  },  {
    title : 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
    link:   'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
    username: 'jmarino',
    upvotes: 80
  }, function() {
      console.log('finished populating posts');
  	}
  )
});

Sale.find({}).remove(function() {})