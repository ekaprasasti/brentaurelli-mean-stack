/*
Pembuatan API
mengambil data dari customer.js
*/
var Customer = require('../models/customer');
module.exports = function(router) {
	// POST method to /customer
	router.post('/customer', function(req, res) {
		console.log(req.body);
		/*
		http://expressjs.com/en/api.html#req.body

		req.body
		Contains key-value pairs of data submitted in the request body. 
		By default, it is undefined, and is populated when you use 
		body-parsing middleware such as body-parser and multer.
		
		membuat object dari variable Customer
		*/
		var customer 				= new Customer();
		customer.firstname 			= req.body.firstname;
		customer.lastname			= req.body.lastname; 
		customer.phone				= req.body.phone;
		if (req.body.address) {
			customer.address.street		= req.body.address.street;
			customer.address.city		= req.body.address.city;
			customer.address.state		= req.body.address.state;
			customer.address.zip		= req.body.address.zip;
		}

		// buat function save untuk throwexception error
		customer.save(function(err, data){
			if (err) 
				throw err;
			// mengkonfersi ke format json
			res.json(data);
		});
	});

	// get all customers back
	router.get('/customer', function(req, res) {
		Customer.find({}, function(err, data) {
			res.json(data);
		});
	});

	// delete all customer data
	router.delete('/customer', function(req, res) {
		Customer.remove({}, function(err) {
			res.json({result: err ? 'error' : 'ok'});
		});
	});

	// get spesifik customer 
	router.get('/customer/:id', function(req, res) {
		Customer.findOne({_id: req.params.id}, function(err, data) {
			res.json(data);
		});
	});

	// delete spesifik customer
	router.delete('/customer/:id', function(req, res) {
		Customer.remove({_id: req.params.id}, function(err) {
			res.json({result: err ? 'error' : 'ok'});
		});
	});

	// edit spesifik customer
	// masih error, gak mau save di edit n send malah firstname,lastname, phone ilang,
	// address ada tpi gak mau di edit
	router.post('/customer/:id', function(req, res) {
		Customer.findOne({_id: req.params.id}, function(err, data) {
			var customer = data;
			customer.firstname 			= req.body.firstname;
			customer.lastname			= req.body.lastname; 
			customer.phone				= req.body.phone;
			if (req.body.address) {
				customer.address.street		= req.body.address.street;
				customer.address.city		= req.body.address.city;
				customer.address.state		= req.body.address.state;
				customer.address.zip		= req.body.address.zip;
			}

			// buat function save untuk throwexception error
			customer.save(function(err, data){
				if (err) 
					throw err;
				// mengkonfersi ke format json
				res.json(data);
			});
		});
	});
}










