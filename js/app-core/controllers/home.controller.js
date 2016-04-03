let HomeController = function($scope, $http){

  let url = 'https://openapi.etsy.com/v2/listings/active.js?api_key=3nk0gcxgoph1wphq6dwkukxq&includes=Images,Shop';

  $scope.search = (query) => {
    $http.get(url + '&keywords=' + query+";").then( (res) => {
      $scope.listings = res.data;

      console.log($scope.listings);
    });
  };

};

HomeController.$inject = ['$scope', '$http'];

export default HomeController;