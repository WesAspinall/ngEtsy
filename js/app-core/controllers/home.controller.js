let HomeController = function($scope, $http){

	let etsyURL = 'https://openapi.etsy.com/v2/listings/active.js?api_key=3nk0gcxgoph1wphq6dwkukxq&includes=Images,Shop';
  
	$scope.search = (query) =>{
		$.ajax({
		  url: etsyURL+ '&keywords=' + query+";",
		  dataType: 'jsonp',
		  method: 'get'
		}).then (function (res) {
			$scope.listings = res.results;
			console.log($scope.listings);
		});
	}


};

HomeController.$inject = ['$scope', '$http'];

export default HomeController;