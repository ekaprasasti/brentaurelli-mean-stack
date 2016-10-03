/*
Inject depedencies $scope, dan Api yg kita sudah buat
di js/services/Api.js
*/
myApp.controller('projectsController', ['$scope', 'Api', function($scope, Api) {

	// inisiasi form sebagai empty
	$scope.form = {};

	// function triger untuk post ke database
	$scope.addToDatabase = function() {
		/*
		gunakan Customer section
		function .save() parameter pertama, untuk memuat id unik
		kita tidak mensetnya biarkan kosong dan mongodb yg membuatnya,
		paramter kedua untuk mendapatkan data dari $scope.form yg sudah di isi,
		parameter ketiga merupakan function callback
		*/
		Api.Customer.save({}, $scope.form, function(){
			// empty objek
			$scope.form = {};
		})
	}
}]);

