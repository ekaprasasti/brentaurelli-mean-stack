/*
EkaPrasasti.com
Author: Eka Prasasti
NodeJS Server
*/

// mengimport library yg di butuhkan
var express 	= require('express');
var path 		= require('path');
var mongoose 	= require('mongoose');
var configDB	= require('./server/config/database.js');
var app 		= express();

// mengidentifikasi port 8888
var port = 8888;

var bodyParser	= require('body-parser');
/* 
app.use(bodyParser.urlencoded({extended: true}));
agar nodejs memungkinkan membaca url encoded form
kita membutuhkan data json maka function urlencoded()
di ganti dengan json()
*/
app.use(bodyParser.json());

var methodOverride = require('method-override');
app.use(methodOverride());

/*
http://expressjs.com/en/api.html#app.set
Pengertian function app.set() pada javascript adalah:
Suatu function yang memberi nilai pada suatu app properties

Yang di mana app properties dapat di lihat pada tabel disini
http://expressjs.com/en/api.html#app.settings.table
*/

// default engine extension nya yaitu ejs
// ejs adalah library template engine
app.set('view engine', 'ejs');

// sebuah directory dari view aplikasi
// function path.resolve() memberikan path
// path di bawah ini adalah /root/client/views/
app.set('views', path.resolve(__dirname, 'client', 'views'));

/*
membuat static file directory untuk file bootstrap, angular, & jquery
Function app.use() pengertiannya berkaitan dengan middleware
Function express.static di gunakan untuk mengambil file dalam directory,
seperti file js, css, images, dll
*/
app.use(express.static(path.resolve(__dirname, 'client')));

/*
Membuat rooting root ('/')
Function res.render mengembalikan nilai HTML dari view lewat
fungsi callback
*/
app.get('/', function(req, res) {
	res.render('index.ejs');
});

mongoose.Promise = global.Promise;
// Mengconnection kan database mongoose
mongoose.connect(configDB.url);

// build API go live
var api = express.Router();
/*
membuat variable api yg memiliki function express.Router()
mengarah pada server/routes/api
*/
require('./server/routes/api')(api);
// setiap kali user membuka navigasi api, gunakan router ini
app.use('/api', api);

// membuat server pada nilai port
app.listen(port, function(){
	console.log('SERVER RUNNING... PORT: ' + port);
});