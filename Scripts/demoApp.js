var demoApp = angular.module('demoApp', ['ngRoute']);

//loading routes
demoApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Partials/View1.html',
                controller: 'SimpleController'
            })
            .when('/view2', {
                templateUrl: 'Partials/View2.html',
                controller: 'SimpleController'
            })
            .otherwise({ redirectTo: '/View1' });
}]);

		//this is more common that separating out the function
		//note there is no need for function name b/c it is within 
		//the controller instantiation
demoApp.controller('SimpleController',function ($scope){
	$scope.customers=[
		{name:'John Smith', city:'Phoenix'}, 
		{name:'John Smith', city:'New York'},
		{name:'Jane Doe',city:'San Francisco'}
	];

	//bc view binds to scope, we need to add our function
	//that adds customer here
	$scope.addCustomer = function (){
		$scope.customers.push(
			{ 
				name: $scope.newCustomer.name, 
				city: $scope.newCustomer.city 
			});
	};
});