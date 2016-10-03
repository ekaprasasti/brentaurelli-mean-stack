var myApp = angular.module('myApp', [
	'ngRoute',
	'ui.bootstrap',
	'ngResource', 
	'ngAnimate'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	// mensetting router
	$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
	$routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutController'});
	$routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactController'});
	$routeProvider.when('/projects', {templateUrl: 'partials/projects/customerapi.html', controller: 'customerApiController'});
	// $routeProvider.when('/projects:project', {
	// 	templateUrl: function(params) {
	// 		return '/partials/projects/' + params.projects + '.html'
	// 	},
	// 	controller: 'customerApiController'
	// });
	// $routeProvider.when('/projects/customerapi', {templateUrl: '/partials/projects/customerapi.html', controller: 'projectsController'});

	// routing selain /home masuknya ke /home
	$routeProvider.otherwise({redirectTo: '/home'});

	// $locatProvider di gunakan untuk mengkonfigurasi bagaimana penyimapanan path aplikasi
	// method .html5mode masih kurang ngerti penjelasan nya di https://docs.angularjs.org/api/ng/provider/$locationProvider
	/*
	sekarang udah ngerti method html5Mode(), jadi kalo aplikasi single page biasanya url/#/home.html,
	dengan method ini kita bisa ilangin tanda #
	*/
	// $locationProvider.html5Mode({enabled: true, requireBase: false});
}])
// buat filter yang mereturn 5 index pertama
.filter('startFrom', function() {
	// parameter pertama mengambil data dari form, par ke 2 data di mulai dari berapa
	return function(data, start) {
		// mengembalikan nilai dari ke berapa data di ambil
		return data.slice(start);
	}
});











