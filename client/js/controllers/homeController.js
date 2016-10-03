myApp.controller('homeController', ['$scope', function($scope){
	// carousel setting
	$scope.myInterval = 5000;
	$scope.slides = [{
		image: "img/maxresdefault.jpg",
		caption: "ini slide 1"
	},
	{
		image: "img/mean-stack.png",
		caption: "ini slide 2"
	},
	{
		image: "img/mean.png",
		caption: "ini slide 3"
	}];
	// end carousel setting
}]);