myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/2015-16",{
            // location of the template
        	templateUrl		: 'views/2015-16-view.html',
        	// Which controller it should use 
            controller 		: 'firstController',
            // what is the alias of that controller.
        	controllerAs 	: 'firstCtrl'
        })
        .when("/2016-17",{
        	templateUrl     : 'views/2016-17-view.html',
        	controller 		: 'firstController',
        	controllerAs 	: 'currentBlog'
        })
        .when("/match/:matchid1/:matchid2/:matchdate/matchname",{
			templateUrl     : 'views/Single-matchDetail.html',
        	controller 		: 'secondController',
        	controllerAs 	: 'secCtrl'
        })
		 .when("/Stat",{
              templateUrl : 'views/Statictics.html',
              controller : "StatsController",
              controllerAs : "statsCtrl"
           })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);