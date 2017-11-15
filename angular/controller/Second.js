
myApp.controller("secondController", ['$http','$location','$routeParams',function($http,$location,$routeParams)
{
	var main=this;
	this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
	this.baseUrl2= 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
	this.matchId1 = $routeParams.matchid1 ;
    this.matchId2 = $routeParams.matchid2 ;
    this.matchDate = $routeParams.matchdate ;
	this.matchname = $routeParams.matchname ;
	console.log("matchId1");
	console.log("matchId2");
	console.log("matchDate");
	console.log("matchname");
	this.team1;
    this.team2;
    this.score1;
    this.score2;
    this.winner;
    this.date;
    this.day;
    this.rounds1 = [];
	this.loadFirst();
	this.loadSecond();
	this.loadsingleData=function(data)
	{
		for(var i in data)
		{
			for(var j in data[i].matches)
			{
				if(matchId1==data[i].matches.team1.name && matchId2==data[i].matches.team2.name && matchDate == data[i].matches.data)
				{
					main.team1=data[i].matches.team1.code1;
					main.team2=data[i].matches.team2.code2;
					if(data[i].matches.score1==data[i].matches.score2){
						main.winner="Match Draw";
					}
					else if (data[i].matches.score1>data[i].matches.score2)
					{
						main.winner="main.team1" + Win;
					}
					else
					{
						main.winner="main.team2" + Win;
					}	
				}
				else (matchId==data[i].matches.team2.name && matchId1==data[i].matches.team1.name && matchDate == data[i].matches.data)
				{
					main.team2=data[i].matches.team2.code2;
					main.team1=data[i].matches.team1.code1;
					if(data[i].matches.score2==data[i].matches.score1){
						main.winner="Match Draw";
					}
					else if (data[i].matches.score2>data[i].matches.score1)
					{
						main.winner="main.team2" + Win;
					}
					else
					{
						main.winner="main.team1" + Win;
					}	
				}
			}
		}
	}
      this.loadFirst = function(){
         $http({ 
           method: 'GET', 
           url: main.baseUrl 
          }).then(function successCallback(response){
          // this callback will be called asynchronously 
          // when the response is available 
          console.log(response); 
		  main.data = response.data.rounds;
          console.log(main.data);
          }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
           });
	  }    
        this.loadSecond = function(){
         $http({ 
            method: 'GET', 
           url: main.baseUrl2
         }).then(function successCallback(response){
          // this callback will be called asynchronously 
          // when the response is available 
            console.log(response); 
		    main.data = response.data.rounds;
             console.log(main.data);
          }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
            });
              }
}]);