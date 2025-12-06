// global  localStorage;
var allPlayers = [];
var selplayers = [];
var players = [];
var availablePlayers=[];

  
  
  selplayers = localStorage.getItem('SelectedplayerList');
  availablePlayers = localStorage.getItem('availablePlayers');
  //document.getElementById('dispo').innerHTML += selplayers;

   function removeLineup(){
   localStorage.clear(); //reset page
   location.reload(); 
  }
 //get the selected players

  function getplayers(selplayers, len){

   var tempPlayers = selplayers.split(",");
    // var tempPlayers = availablePlayers.split(",");
   
  // var tempPlayers = availablePlayers.replaceAll(" ",", ").split(","); alert (tempPlayers);
  

   //console.log(tempPlayers);
  //  var tempPlayers = selplayers.trim().split(/\s+/).join("  "); 
    //selPlayers = JSON.parse(localStorage.getItem('SelectedplayerList'));
   //selPlayers.push(localStorage.getItem('SelectedplayerList'))
 // alert(tempPlayers.join(" "), "tempPlayers- ");
       
  i = 0, n = tempPlayers.length; //12 if 6 players

  while(i < n){
    
    players.push(tempPlayers.slice(i, i += len));   //1st player
    }
  
  return players; 
  }
 //  players.push(tempPlayers.slice(i, i += len).join(": "));   

 getplayers(selplayers, 2); //makes arrays of two(name, cra), in array of selected [[1,2][3,4][5.6]]

// document.getElementById('dispo').innerHTML = allPlayers;
document.getElementById('dispo').innerHTML = players;

var elites = ['Virginie','Brigitte', 'Hélène', 'Cristina'];
var superElites = ['Cristina'];
var terrain3Ban = ['Seyller', 'Anderson'];
var teams=[];
var finalLu = [];
var Eq = [];
//console.log("len-", players.length);

if(players.length!==0){
  players.sort((a,b) => {return b[1]- a[1]});
  console.log("players sorted = " , players);
  }else{
    console.log("list players = empty");
  }
//console.log("what the d is going on");
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
 
  getTeamsby2(); 
 
//console.log("teams after teams by 2 length = ", teams[0][1]); 
console.log(teams.length); //15 of 2 teams

var n = 0;
/////////////////combining these teams by 3
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

      
  var elite =  elites[0]; console.log(elite);
  var elite1 =  elites[1]; 
  var elite2 = elites[2];
  var elite3 = elites[3];
  
  var superElite1 = superElites[0]; console.log(superElite1);
 

  console.log("printing function Elite()");

console.log("end of printing function Elite()");
  
    function eliteCondition(n) {
      //checks that elites are not on courts 2 and 3 
      tempEq = finalLu[n].split(" "); 
      //if(tempEq.includes(elite)){
      // console.log("test =  " ,tempEq.indexOf("terrain", tempEq.indexOf("terrain")+1));
      
        if(tempEq.indexOf("terrain", tempEq.indexOf("terrain")+1) > tempEq.indexOf(elite) &&
        tempEq.indexOf("terrain", tempEq.indexOf("terrain")+1) > tempEq.indexOf(elite1) &&
        tempEq.indexOf("terrain", tempEq.indexOf("terrain")+1) > tempEq.indexOf(elite2)&&
        tempEq.indexOf("terrain", tempEq.indexOf("terrain")+1) > tempEq.indexOf(elite3))
        {
            console.log("Alert! OK NO Elite on court 2"); 
            return true;
            }else{ 
              return false;
            }
          }
        
        //checks that there is max 1 Elites on court 1 in lineup 
       function SE1condition(n) {
           tempEq = finalLu[n].split("terrain 2");
           const eliteCount = elites.filter(el => tempEq[0].includes(el)).length;    //.filter(...) builds a new array containing only those elites that were found in tempEq.
            return eliteCount <= 1; // 
          }


     function condition4(n) {

           tempEq = finalLu[n].split("terrain 3"); 
           const fourPtFiveCount = terrain3Ban.filter(miniEl => tempEq[1].includes(miniEl)).length;    //.filter(...) builds a new array containing only those elites that were found in tempEq.
            //alert(fourPtFiveCount);
           return fourPtFiveCount <= 0; 
          }
          
          function SE2condition(n){
              //if(tempEq.includes(superElite1)&&
              if(tempEq.indexOf("terrain", tempEq.indexOf("terrain")+1) > tempEq.indexOf(superElite1)){
                        console.log("Alert! OK NO superElite on court 2"); 
                        return true;
                      }else{ 
                        return false;
                      }
               }
                   
//             function court3Condition(n) {
              
//                   tempEq = tempEq.join(' ').replaceAll(' ,', ' ').split('\n');
                  
//                   //  tempEq = finalLu[n].split(" ");
//                   //alert("tempEq new = " +tempEq);
//                       //removes possible alignements with Annabel A and Annabel S on court 3. 
//                       // alert("condition 3 in effect "+ "indexes of Jany then terrain == "+tempEq.indexOf("Jany")+tempEq.indexOf("terrain", tempEq.indexOf("terrain")+2))
//                       //if(tempEq.indexOf("terrain", tempEq.indexOf("terrain")+2) > tempEq.indexOf(Jany) && 
//                       // if(tempEq.indexOf("terrain", tempEq.indexOf("terrain") + 2) > tempEq.indexOf(Seyller)){
//                       if(!tempEq[2].toString().includes('Annabel Seyller')||(!tempEq[2].toString().includes('Annabel Anderson'))){  
//                       // alert("ok! no seyller or Anderson S on court 3"); 
//                         return true;
//                   }
//  }
                                
var check = function checkDups(){
var len = finalLu.length; 
    
  
    if(len!==0){

      while(n < finalLu.length){

                //console.log("temp1 = " , finalLu[n]);
                
                max = 0;  
                console.log("n=", n);
           
                
              
                for(pl in players){
                         
                
                var re = RegExp(players[pl],'gi');      console.log("re= ", re);//console.log(tempEq[0])
                var temp1 = finalLu[n].toString();      console.log("temp1 = ", temp1);
                //var temp2 = finalLu[n];               console.log("temp2 = " +temp2);
                //var temp3 = finalLu[n+2].toString();  console.log("temp3 = " +temp3);                
                var count1 = (temp1.match(re) || []).length; console.log("count1 = ",count1); //not rpinting
              // var count2 = (temp2.match(re) || []).length; console.log("count2 = ",count2);
              // var count3 = (temp3.match(re) || []).length; console.log("count3 = ",count3);
                
                //var eachcount = (a) => { return (count1 > 0 || count2>0 || count3 > 0)}; 
                var totalcount = count1; console.log("totalcount = " +totalcount);
                            
                    if(totalcount >= max){
                    max = totalcount; 
                    } 
                    
                  } console.log("max= " ,max);  

                 
                 
                 
           
                  function con1(){
                    
                    
                      
                      if((max ===1) && (eliteCondition(n) && (SE2condition(n)) && (SE1condition(n))
                      
                      &&(condition4(n))
                      
                      )){
                        Eq.push(finalLu[n]); 
                            console.log("max > 1 or super Elite on court 2, drop elemnt for n = ", n); 
                            //Eq.push(finalLu[n]); 
                           
                   
                          }
                        }
                      

                     con1();

                  
                    console.log("n at bottom= ", n);
                          
                    n++; 
                }     
                return Eq;  //was : return ("final linupe =", Eq); 
                }
          } //end of check function
          
            //console.log("finalLu[0] = ", finalLu[0],  finalLu[0].length); 
            
            //console.log("typeof=" ,typeof(Eq[0])); //this is a string with 237 chars. 

     //console.log("tempEq[100] = ", tempEq[100],  tempEq[100].length);
   
   check();
  
   //console.log("Alignements possibles : \n");
   //console.log(Eq.join(" Go Team!! \n"));
          
         
    var outputHTML = "";
   
    function displayTeams(){
      
      outputHTML = "";
      outputHTML += "<table class='table'>";
     
      for (var i = 0; i < Eq.length;i++){
        Eq[i]=Eq[i].replaceAll(",", "");
        Eq[i]=Eq[i].replaceAll(" TOTAL", ", TOTAL")
        outputHTML += "<tr>";
        outputHTML += "<td>" + "ALIGNEMENT " + (i+1) + "\n";
        outputHTML += "<td>" +" "+ Eq[i] +" " + "</td>"; 
        //outputHTML += "<td>" +" "+ check().join()+" " + "</td>";
        }
        outputHTML += "</tr>"; 
      
     return outputHTML += "</table>";
    }
    document.getElementById('nbrDispo').innerHTML += " "+players.length;
    if(Eq.length!== 0){
    document.getElementById("aligne").innerHTML = "Nombre d'alignements : "+Eq.length+"\n" + displayTeams();
    }else {
    
   document.getElementById("aligne").innerHTML = "<p style='color:red'> Pas d'alignement possible avec ces joueuses, vérifier la sélection</p>";
   
    }
    function print_Lineup(){
    window.print();
  } 
  // Trigger search on Enter key
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {   // Check if Enter was pressed
        searchTeams(Eq);            // Call your search function
    }
});

function searchTeams(Eq) {
    // Clear previous results
    document.getElementById("aligne").innerHTML = "";
    document.getElementById("resultList").innerHTML = "";
    

    // Get search query and split into terms
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();
    var searchTerms = searchQuery.split(',')
        .map(term => term.trim().replace(/^"|"$/g, ''))
        .slice(0, 6); // max 6 terms

    var foundCount = 0;

    // Loop through the array and check for matches
    for (var i = 0; i < Eq.length; i++) {
        var lines = Eq[i].split('\n').map(line => line.toLowerCase().trim());
        var teamMatches = true;
        var j = 0;

        while (j < searchTerms.length && teamMatches) {
            var term = searchTerms[j];

            if (/^terrain \d+$/.test(term)) {
                // Find the line containing this terrain
                var terrainLine = lines.find(line => line.includes(term));
                if (!terrainLine) {
                    teamMatches = false;
                    break;
                }

                // Next 1-2 terms must appear on the same line
                for (var k = 1; k <= 2; k++) {
                    if (j + k < searchTerms.length) {
                        if (!terrainLine.includes(searchTerms[j + k])) {
                            teamMatches = false;
                            break;
                        }
                    }
                }

                j += 3; // skip terrain + next two terms
            } else {
                // Normal term: can appear anywhere
                var found = lines.some(line => line.includes(term));
                if (!found) {
                    teamMatches = false;
                    break;
                }
                j++;
            }
        }

        if (teamMatches) {
            foundCount++;
            document.getElementById('aligne').innerHTML +=
                '<tr><p style="color:maroon"><u>Alignement ' + (i + 1) + '</u></p>' + Eq[i] + '</tr>';
        }
    }

    document.getElementById('resultList').innerHTML =
        foundCount + " alignements trouvés avec " + searchTerms.join(', ');
}

