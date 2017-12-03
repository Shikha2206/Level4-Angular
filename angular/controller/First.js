//firstController to view all matches
myApp.controller('firstController',['$http',function($http){ 
   var main=this;
	 this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
	 this.baseUrl2= 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
	 this.data1=[]; 
	 this.data2=[];
	 this.firstName=0;
	 this.secondName=0;
	 this.loadFirst = function(){
     $http({ 
        method: 'GET', 
        url: main.baseUrl 
      }).then(function successCallback(response){
          // this callback will be called asynchronously 
          // when the response is available 
          //console.log(response); 
		  main.firstName=response.data.name;
		  //console.log(main.firstName);
		  main.data1 = response.data.rounds;
          //console.log(main.data1);
}, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
        });
  };
 this.loadFirst();
 this.loadSecond = function(){
     $http({ 
        method: 'GET', 
        url: main.baseUrl2
      }).then(function successCallback(response){
          // this callback will be called asynchronously 
          // when the response is available 
          //console.log(response); 
		  main.secondName=response.data.name;
		  //console.log(main.firstName);
		  main.data2 = response.data.rounds;
          //console.log(main.data2);
}, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
        });
  };
 this.loadSecond();
}]);
myApp.controller('mainCtrl',function($scope){
  $scope.Types  = [
  {
    name: "Teamname",
    value: 0
  }, 
  {
    name: "Matchday",
    value: 1,
  }, 
  {
    name: "Score",
    value: 2
  }];
  
  $scope.subItems = {
    0:[{ name: "Manchester United", value:0}, { name:"Tottenham Hotspur", value:1 }, { name:"Bournemouth ", value:2 },{ name:"Aston Villa ", value:3 },{ name:"Everton ", value:4 },{ name:"Watford ", value:4 },{ name:"Leicester City ", value:6 },{ name:"Sunderland ", value:7 },{ name:"Norwich", value:8 },{ name:"Crystal Palace ", value:9 },{ name:"Chelsea ", value:10 },{ name:"Arsenal ", value:11 },{ name:"Swansea ", value:12 },{ name:"West Ham United ", value:13 },{ name:"Newcastle United", value:14 },{ name:"Southampton ", value:15 },{ name:"Stoke City", value:16 },{ name:"Liverpool ", value:17 },{ name:"West Bromwich Albion ", value:18 },{ name:"Manchester City ", value:19 }],
    1:[{ name: "Play-Off um 1 Premierleague-Platz:", value:0}, { name:"Matchday 2 ", value:1 },{ name:"Matchday 3 ", value:2 },{ name:"Matchday 4 ", value:3 },
	{ name:"Matchday 5 ", value:4 },{ name:"Matchday 6 ", value:5 },{ name:"Matchday 7 ", value:6 },{ name:"Matchday 8 ", value:7 },{ name:"Matchday 9 ", value:8 },{ name:"Matchday 10 ", value:9 },{ name:"Matchday 11 ", value:10 },{ name:"Matchday 12 ", value:11 },{ name:"Matchday 13 ", value:12 },{ name:"Matchday 14 ", value:13 },{ name:"Matchday 15 ", value:14 },{ name:"Matchday 16 ", value:15 },{ name:"Matchday 17 ", value:16 },{ name:"Matchday 18 ", value:17 },{ name:"Matchday 19", value:18 },{ name:"Matchday 20 ", value:19 },{ name:"Matchday 21 ", value:20 },{ name:"Matchday 22 ", value:21 },{ name:"Matchday 23 ", value:22 },{ name:"Matchday 24 ", value:23 },{ name:"Matchday 25 ", value:24 },{ name:"Matchday 26 ", value:25 },{ name:"Matchday 27 ", value:26 },{ name:"Matchday 28 ", value:27 },{ name:"Matchday 29 ", value:28 },{ name:"Matchday 30 ", value:29 },{ name:"Matchday 31 ", value:30 },{ name:"Matchday 32 ", value:31 },{ name:"Matchday 33 ", value:32 },{ name:"Matchday 34 ", value:33 },{ name:"Matchday 35 ", value:34 },{ name:"Matchday 36 ", value:35 },{ name:"Matchday 37 ", value:36 },{ name:"Matchday 38 ", value:37 }],
	2:[{name:"0",value:0},{name:"1",value:1},{name:"2",value:2},{name:"3",value:3},{name:"4",value:4}]
  };
});