myApp.controller('navController', ['$scope', '$location', function($scope, $location) {
	/*
	$location service memparse URL di dalam address bar browser, dan itu membuat url bisa di gunakan
	di dalam aplikasi.
	method path() mengembalikan url yang sedang di akses, tanpa menyisipkan parameter apapun.

	Membuat logic class active
	*/
	$scope.isActive = function(destination) {
		return destination === $location.path();
	};
}]);