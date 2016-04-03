let HomeController = function($scope, $http, $timeout){
	let vm = this;
	let etsyURL = 'https://openapi.etsy.com/v2/listings/active.js?api_key=3nk0gcxgoph1wphq6dwkukxq&includes=Images,Shop';

	vm.listings = [];
	vm.search = search;
	vm.blank = true;
	vm.query = null;

//$timeout lets angular know that the value of listings has changed
function search(query){
		$.ajax({
		  url: etsyURL+ '&keywords=' + query+";",
		  dataType: 'jsonp',
		  method: 'get'
		}).then (function (res) {
			$timeout (function(){
				vm.query = query;
				vm.listings=res.results;
				vm.images = vm.listings.images;
				vm.resultQuantity = vm.listings.length;
				vm.blank = false;
				console.log(vm.resultQuantity);
				console.log(vm.listings)
			});
		});
	}

};


HomeController.$inject = ['$scope', '$http', '$timeout'];

export default HomeController;