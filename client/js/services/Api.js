/*
https://docs.angularjs.org/guide/providers

Belum begitu paham bgt dengan factory, yang gw tangkep
mungkin adalah untuk membuat service profider di angularJS

$resource: sebuah factory untuk membuat objek yang memungkinkan
kita berkomunikasi dengan RESTful server-side data resource
*/
myApp.factory('Api', ['$resource', function($resource) {
	return {
		Customer: $resource('/api/customer/:id', {id: '@id'})
	}
}]);