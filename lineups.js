// global  localStorage;
  var allPlayers = [];
var selplayers = [];

var players = [];
//var players = [['Annabel Anderson: ' , 5.2352], ['Brigitte St Hilaire: ' , 5.2857],['Jany Renaud: ',  4.4406], ['Linda Creamer: ', 4.1253],['Quynh: ', 4.2149],['Marie-Josee Reeves: ', 4.8040]];
//if (typeof window !== 'undefined') {
  
  
  // selplayers = localStorage.getItem('SelectedplayerList');
     selplayers = localStorage.getItem('availablePlayers'); //*** */

   function removeLineup(){
    localStorage.clear(); //reset page
    location.reload();
  }

  function getplayers(selplayers, len){

   var tempPlayers = selplayers.split(","); 
 
       
  i = 0, n = tempPlayers.length; //12 if 6 players
  while(i < n){
    
  players.push(tempPlayers.slice(i, i += len));   //1st player
  }
 //console.log("playersxxxxxxxxxxxxxxxxx =", players);
 return players; 
 }
 //  players.push(tempPlayers.slice(i, i += len).join(": "));   

 getplayers(selplayers, 2); //makes arrays of two(name, cra), in array of selected [[1,2][3,4][5.6]]

document.getElementById('dispo').innerHTML += players;

var Elites = ['Hélène', 'Virginie','Brigitte','Cristina'];
var superElites = ['Cristina'];
var terrain3 = ['Anderson', 'Seyller'];
var teams=[];
var finalLu = [];
var Eq = [];
      
  var elite =  Elites[0]; 
  var elite1 =  Elites[1];
  var elite2 = Elites[2];
  var elite3 = Elites[3];
  var superElite1= superElites[0];

  var superElite1 = superElites[0]; 
  alert("superElite1 = " +superElite1);


if(players.length!==0){
  players.sort((a,b) => {return b[1]- a[1]});
  console.log("players sorted = " ,players);
  }else{
    alert("list players = empty");
  }

var result = [];
result.length = 6; //

//so is len = 6 (6 is result.length) in the beginning? 
function getTeamsby2(){ //whatever array of 6 is passed it splits by 6 and returns return pairs 
    /* for(var i = 0; i < players.length-1; i++){
        for(var j = 1; j < players.length; j++){ */
        for(i in players){ 
          for (j in players){   
                if(i < j){

                teams.push([[players[i] +" et " 
                + players[j]]+" TOTAL CRA =  ", [(parseFloat(players[i][1]) + parseFloat(players[j][1])).toFixed(4)]]);
                
                 }
            }
        } return teams.join(" ");

  }
  //teams.join(" "); 
 // arr.ForEach (arr=>(getTeamsby2(arr)));

 //console.log("teams after teams by 2 = ", getTeamsby2()); 
 
//console.log("teams after teams by 2 length = ", teams[0][1]); 
console.log(teams.length); //15 of 2 teams

var n = 0;
//combining these teams by 3
//trying i j k all different
//(temp1.match(re) || []).length

var count1 = 0; var count2=0; var count3=0;

var totalcount = 0;
finalLu=[];
var tempEq=[];

       for(var i = 0; i < teams.length; i++){ 
        for(var j = 1; j < teams.length; j++){
          for(var k = 2; k <teams.length; k++){ 
           
            if(parseFloat(teams[i][1])>=parseFloat(teams[j][1])&& parseFloat(teams[j][1])>=parseFloat(teams[k][1])){
            
              finalLu.push("terrain 1 = " +teams[i] +"\n " + "terrain 2 = " +teams[j] +"\n " +"terrain 3 = " +teams[k]+" \n ");
              
             }
            }
          }
        }
//document.getElementById("testEq").innerHTML = "teams are : " + Eq.join("&&");

var max = 0;
//var string =""; var tempEq=[];


  
  

  //alert(Seyller);

  //console.log("printing function Elite()");

//console.log("end of printing function Elite()");
   

   const eliteCondition = (n)=> {
      
      tempEq = finalLu[n].split(" ");
      //if(tempEq.includes(elite)){
      // console.log("test =  " ,tempEq.indexOf("terrain", tempEq.indexOf("terrain")+1));
        return (tempEq.indexOf("terrain", tempEq.indexOf("terrain")+1) > tempEq.indexOf(elite)
        
        && (tempEq.indexOf("terrain", tempEq.indexOf("terrain")+1) > tempEq.indexOf(elite1)))
                
        }
        /* function maxElitesCon(n){
          elCount = 0;
          
          for(pl in tempEq){
            if(Elites.includes(tempEq[pl] && superElites.includes(tempEq[pl]))){
              elCount+=1; alert(elCount);
            }


            if(elCount<1){
              return true;
            }
            }
          }
         */
         const SE1condition = (n)=>{
         //if(tempEq.includes(superElite1)&&
         return (tempEq.indexOf("terrain", tempEq.indexOf("terrain")+1) > tempEq.indexOf(superElite1)
                  && (console.log("Alert! OK NO superElite on court 2"))); 
            
             } 
    
          /* function SE2condition(n){
              //if(tempEq.includes(superElite1)&&
              if(tempEq.indexOf("terrain", tempEq.indexOf("terrain")+1) > tempEq.indexOf(superElite2)){
                        console.log("Alert! OK NO superElite on court 2"); 
                        return true;
                      }else{ 
                        return false;
                      }
                   } */
                   
  
                                
var check = function checkDups(){
var len = finalLu.length; 
    eliteCondition(n);
    //SE1condition(n);
   // maxElitesCon(n)

    if(len!==0){

      while(n < finalLu.length){
                max = 0;  
                console.log("n=", n);
                for(pl in players){
                var re = RegExp(players[pl],'gi');      //console.log("re= ", re);//console.log(tempEq[0])
                var temp1 = finalLu[n].toString();         //console.log("temp1 = ", temp1);
               
                           
                var count1 = (temp1.match(re) || []).length; //console.log("count1 = ",count1); //not rpinting
              // var count2 = (temp2.match(re) || []).length; console.log("count2 = ",count2);
              // var count3 = (temp3.match(re) || []).length; console.log("count3 = ",count3);
                
                //var eachcount = (a) => { return (count1 > 0 || count2>0 || count3 > 0)}; 
                var totalcount = count1; //console.log("totalcount = " +totalcount);
                            
                    if(totalcount >= max){
                    max = totalcount; 
                    } 
                    
                  } console.log("max= " ,max);  
                    function con1(){
                  
                      if((max ===1) && (eliteCondition(n)  && (SE1condition(n))
                      
                     // &&(maxElitesCon(n))
                      
                      )){
                        Eq.push(finalLu[n]); 
                            console.log("max > 1 or super Elite on court 2, drop elemnt for n = ", n); 
                      }
                    }
                    con1();
                  // console.log("n at bottom= ", n);
                  n++; 
                }     
                return Eq; //was : return ("final linupe =", Eq); 
                }
          } //end of check function
          
           
     //console.log("tempEq[100] = ", tempEq[100],  tempEq[100].length);
   //console.log("printing check(0) which should return count of max = ", check(0));
   //console.log("Alignements possibles : \n");
   //console.log(Eq.join(" Go Team!! \n"));
          
    //this works
    var outputHTML = "";
   
    function displayTeams(){
      
      outputHTML = "";
      outputHTML += "<table class='table'>";
     
      for (var i = 0; i < Eq.length;i++){
        
        outputHTML += "<tr>";
        outputHTML += "<td>" + "ALIGNEMENT " + (i+1) + "\n";
        outputHTML += "<td>" +" "+ Eq[i] +" " + "</td>"; 
        //outputHTML += "<td>" +" "+ check().join()+" " + "</td>";
        }
        outputHTML += "</tr>"; 
      
     return outputHTML += "</table>";
    }
    document.getElementById('nbrDispo').innerHTML += " "+players.length;
    document.getElementById("aligne").innerHTML = "Nombre d'alignements : "+Eq.length+"\n" + displayTeams();
    
    function print_Lineup(){
    window.print();
  } 
  function searchTeams(Eq) {
    // Clear previous results
    document.getElementById("aligne").innerHTML = "";
    
    // Get the search query from the input
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();

    // Loop through the array and check for matches
    for (var i = 0; i < Eq.length; i++) {
        var team = " " +Eq[i].toLowerCase(); //alert('team = '+ team);
        if (team.includes(searchQuery)) {

          //document.getElementById('aligne').innerHTML+= 
          document.getElementById('aligne').innerHTML+= '<tr><p style="color:maroon"><u>Alignement '+(i+1)+'</u></p>' + team+'</tr>';
        
        }
    }
}
  
