/*
mongoose is an elegant mongodb object modeling for node.js
*/
var mongoose = require('mongoose');

/* 
http://mongoosejs.com/docs/guide.html

Pada Mongoose di mulai dengan Schema, 
setiap schema menunjukan MongoDB collection dan 
mendefinisikan kondisi dari dokumen
*/
var Schema = mongoose.Schema;
var customerSchema = mongoose.Schema({
	firstname: String,
	lastname: String,
	phone: String,
	address: {
		street: String,
		city: String,
		state: String,
		zip: String
	}
});

/*
http://mongoosejs.com/docs/models.html

Model merupakan konstruktor yang mengcompiled definisi dari
schema yang sudah di buat.
Semua pembuatan dokumen dan pengambilan dari database di tangani oleh model ini

module.exports di buat oleh module system pada node.js
*/
module.exports = mongoose.model('Customer', customerSchema);


