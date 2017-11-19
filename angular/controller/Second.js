myApp.controller("secondController", ['$http','$location','$routeParams',function($http,$location,$routeParams)
{
	var main=this;
	this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
	this.baseUrl2= 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
	this.matchId1 = $routeParams.matchid1 ;
    this.matchId2 = $routeParams.matchid2 ;
    this.matchDate = $routeParams.matchdate ;
	this.matchname = $routeParams.matchname ;
	console.log(matchId1);
	console.log(matchId2);
	console.log(matchDate);
	this.team1;
    this.team2;
    this.score1;
    this.score2;
    this.winner;
    this.date;
    this.day;
	this.code1;
	this.code2;
    this.rounds1 = [];
	this.rounds2 =[];
	this.loadsingleData=function(data)
	{
		for(var i in main.data)
		{
			for(var j in main.data[i].matches)
			{
				if(main.data[i].matches.team1.name == main.matchId1 && main.data[i].matches.team2.name==main.matchId2 &&  main.data[i].matches.data==main.matchDate)
				{
					console.log("Record_Found");
					main.day=main.data[i].name;
					main.team1=main.data[i].matches[j].team1.name;
					main.team2=main.data[i].mathes[j].team2.name;
					main.score1=main.data[i].matches[j].team1.score1;
					main.score2=main.data[i].matches[j].team2.score2;
					main.date=main.data[i].matches[j].date;
					main.code1=main.data[i].matches[j].team1.code1;
					main.code2=main.data[i].matches[j].team1.code2;
					if(main.score1=main.score2)
					{
						main.winner="Match Drawn";
					}
					else if (main.score1>main.score2)
					{
						main.winner= ""+main.team1+" wins !!!! and dominates over "+main.team2;
					}
					else{
						  main.winner = ""+main.team2+" wins!! and dominates over"+main.team1;  
					}
				}
			}
		}
	}
      this.loadYear1=function()
	  {
		  http({
			  method:"GET",
			  url:main.baseUrl
			  }).then(function successCallback(response)
			  {
				main.loadsingleData(response.data); 
			  },function errorcallBack(reason)
			  {
				  alert("error in GET");
				  
			  })
	  }
	  this.loadYear1()
	  this.loadYear2=function()
	  {
		  http({
			  method:"GET",
			  url:main.baseUrl2
			  }).then(function successCallback(response)
			  {
				main.loadsingleData(response.data); 
			  },function errorcallBack(reason)
			  {
				  alert("error in GET");
				  
			  })
	  }
	  this.loadYear2();
}]);



        

