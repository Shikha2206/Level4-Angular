myApp.controller("StatsController",["$http",function($http){

      var main = this;


      this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
      this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";


       this.data1=0;
	   this.year1=0;
      this.rounds1 = [];
      this.totalMatches={};
      this.code1;

          this.teamStats = function(response,data1){ 
           
           main.rounds1 = response.data.rounds; 

               //    console.log(data1)

                var playedmatches = 0 ;  var wins= 0; var loss = 0; var drawn = 0;
                 var totalscore = 0; var code1;

              for(var i in main.rounds1){

                for( var j in main.rounds1[i].matches){

                    if (main.rounds1[i].matches[j].team1.name == data1){
                      
                       code1 = main.rounds1[i].matches[j].team1.name;

                       playedmatches++ ; 

                      totalscore += main.rounds1[i].matches[j].score1 ;
                  
                      if(main.rounds1[i].matches[j].score1 > main.rounds1[i].matches[j].score2){
                        wins ++ ; 
                        
                      }

                      else if(main.rounds1[i].matches[j].score1 < main.rounds1[i].matches[j].score2){
                        loss ++;
                       
                      }

                      else if(main.rounds1[i].matches[j].score1 == main.rounds1[i].matches[j].score2){
                        drawn ++;
                      }
                      
                    } // If !
                    
                    
                    else if(main.rounds1[i].matches[j].team2.name == data1){

                       code1 = main.rounds1[i].matches[j].team2.name ;
                      
                       playedmatches++ ;

                       totalscore += main.rounds1[i].matches[j].score2 ;

                       if(main.rounds1[i].matches[j].score1 > main.rounds1[i].matches[j].score2){
                        loss++ ; 
                      }

                      else if(main.rounds1[i].matches[j].score1 < main.rounds1[i].matches[j].score2){
                        wins++;
                      }

                      else if(main.rounds1[i].matches[j].score1 == main.rounds1[i].matches[j].score2){
                        drawn++;
                      }

                    }      //else if ends

            
                  }    
              }        //FOR-IN ends 



                   

                  main.code1= code1;
                  main.totalMatches.playedmatches = playedmatches;
                  main.totalMatches.totalscore = totalscore;
                  main.totalMatches.loss = loss;
                  main.totalMatches.wins = wins;
                  main.totalMatches.drawn = drawn;
                  main.totalMatches.winPercent = ((wins/matches)*100).toFixed(2);
                  main.totalMatches.lossPercent = ((loss/matches)*100).toFixed(2);
          };


           this.statsCheck = function(data1,year1){ 

              if (year1== '2015'){
                   $http({
                    method:"GET",
                    url: main.baseUrl1
              }).then(function successCallback(response){

                this.names1=[];

               for(var i=0; i<response.data.rounds[0].matches.length;i++){
             //   console.log(response.data.rounds[0].matches.length);
                  this.names1.push(response.data.rounds[0].matches[i].team1.name);
                    }
                  //  console.log(this.names1)
                for(var i=0;i<response.data.rounds[0].matches.length;i++){
                  this.names1.push(response.data.rounds[0].matches[i].team2.name);
                    }

               if(this.names1.includes(data1)){
                  if(main.value2){               // toggling 2015/16 stats button
                    main.value2 = false;   
                     main.value1 = true;
                    }
                else{
                    main.value1 = true;
                  } 
                   main.teamStats(response,data1);
                   }
                   else{
                    alert("Team didn't play in 2015 !");
                   // main.value1 = false;
                   }      

             }, function errorCallback(reason){   
                alert("Error in GET");
                  })
			  }				  
                else if(year1==2016) {
              $http({
                    method:"GET",
                    url: main.baseUrl2
              }).then(function successCallback(response){
             
              this.names2=[];

               for(var i=0;i<response.data.rounds[0].matches.length;i++){
         
                  this.names2.push(response.data.rounds[0].matches[i].team1.name);

                    }
                for(var i=0;i<response.data.rounds[0].matches.length;i++){
         
                  this.names2.push(response.data.rounds[0].matches[i].team2.name);

                    }

                if(this.names2.includes(data1)){

                  if(main.value1 == true){
                          main.value1 = false ;
                           main.value2 = true;
                       }
                      else {
                    main.value2 = true;
                  }

                   main.teamStats(response,data1);
                   }

                   else{
                    alert("Team didn't play in 2016 !");
                   }

              }, function errorCallback(reason){   
                alert("Error in GET");
                  })         
                }   
             } ;                          

        }]); // controller ends