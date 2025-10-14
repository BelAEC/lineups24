
class Joueur {

    #nom;
    #cra;
    #photo;
    #categ;
    //method to get updated Cras


    constructor(categ, nom, cra, photo) {

        this.#categ = categ;
        this.#nom = nom;
        this.#cra = cra;
        this.#photo = photo;

    }

    set nom(nom) {
        //prompt("enter namesinTAe : " , namesinTAes[])
        this.#nom = nom;
    }

    get nom() {
        return this.#nom;
    }

    set categ(categ) {
        this.#categ = categ;
    }

    get categ() {
        return this.#categ;
    }
    get cra() {
        return this.#cra;
    }

    set cra(cra) {

        this.#cra = cra;
    }


    get photo() {
        return this.#photo;
    }

    set photo(photo) {
        this.#photo = photo;
    }

    static getUpdatedCras(nom){
        //this.#nom=nom;
        let namesinTAeIndex = temparray.indexOf(nom);
        return  newCras[namesinTAeIndex];
    }
    //!
    static afficherMenu() {

        return this.menu();
    }
    /* static getCras() {

        //program to get newCras
        return newCras;

    } */
}


class Elite extends Joueur {

    #nbMatchsE = 0;
    constructor(categ, nom, cra, image, nbMatchsE) {
        super(categ, nom, cra, image);
        this.#nbMatchsE = nbMatchsE;
  }

    set nbMatchsE(nbMatchsE) {
        this.#nbMatchsE = nbMatchsE;
    }
    get nbMatchsE() {
        return this.#nbMatchsE;
    }
}
class SuperElite extends Joueur {

    #nbMatchsSE = 0; 

    constructor(categ, nom, cra, image, nbMatchsSE) {
        super(categ, nom, cra, image);
        this.#nbMatchsSE = nbMatchsSE;
    }

    set nbMatchsSE(nbMatchsSE) {
        this.#nbMatchsSE = nbMatchsSE;
    }

    get nbMatchsSE() {
        return this.#nbMatchsSE;
    }
}

var players = [];
var selected = [];
let menu = [];
var menu1 = [];

function getMenu() {

    
    menu = [

        new Joueur("Equipe", "Les Super Elites", 0, "Images/superEl.png"),
        new Joueur("Equipe", "Hélène Macchi", 5.9460, "Images/Helene.png"),
        new Joueur("Equipe", "Cristina Popescu", 6.0061, "Images/cristina.png"),

        new Joueur("Equipe", "Les Elites", 0, "Images/sophie.png"),
        new Joueur("Equipe", "Brigitte St-Hilaire", 5.000, "Images/brigcap.png"),
        new Joueur("Equipe", "Virginie Villani", 4.9163, "Images/Virginie.jpg"),

        new Joueur("Equipe", "Les joueuses", 0, "Images/equipe1.jpg"),
        new Joueur("Equipe", "Annabel Seyller", 4.8444, "Images/Seyller.jpg"),
       // new Joueur("Equipe", "Mihaela Bar (S↑)", 3.1102, "Images/anderson.jpeg"),

       // new Joueur("Equipe", "Raheleh Jalalfard (S↑)", 2.6916, "Images/anderson.jpeg"),

       // new Joueur("Equipe", "Marie-Claude Pageau", 3.1578, "Images5/anderson.jpeg"),
        
        new Joueur("Equipe", "Quynh Nhu Vo", 4.2575, "Images/qu2.jpg"),
        new Joueur("Equipe", "Annabel Anderson", 5.2461, "Images/anderson.jpeg"),
        new Joueur("Equipe", "Linda Creamer", 4.1679, "Images/lady2.jpeg"),
        new Joueur("Equipe", "Kelly Gordon", 4.5896, "Images/kellyG.jpeg"),
        new Joueur("Equipe", "Alexandra Kaneb", 4.3, "Images/frog.jpeg"),
        new Joueur("Equipe", "Sophie Stival", 4.5327, "Images/soph1.jpg"),
        new Joueur("Equipe", "Isabelle Provencher", 4.4586, "Images/Isa1.jpg"),
       // new Joueur("Equipe", "Karen Magharian", 4.4586, "Images/Isa1.jpg"),
        new Joueur("Equipe", "Jany Renaud", 4.4000, "Images/jany.jpeg"),
       // new Joueur("Equipe", "Reeves Marie-Josee", 4.4000, "Images/frog.jpeg"),

        new Joueur("Equipe", "Josiane Rousseau", 3.9607, "Images/frog.jpeg"),
        new Joueur("Equipe", "Line Ouellette", 3.9607, "Images/lady2.jpeg"),
       
      //  new Joueur("Equipe", "Brassard Anne-marie", 3.9607, "Images/lady2.jpeg"),

       // new Joueur("Equipe", "Helène Macchi", 5.7299, "Images/Helene.png"),
        // new SuperElite("catSuperElite", "Les Super Elites", 0, "Images/superEl.png", "nbMatchsSE"),
        // new SuperElite("catSuperElite", "Helene Macchi", 5.9460, "Images/Helene.png", "3"),
        // new SuperElite("catSuperElite", "Cristina Popescu", 6.0061, "Images/cristina.png", "4"),
       
        // new Elite("catElite", "Les Elites", 0, "Images/sophie.png", "nbMatchE"),
        // new Elite("catElite", "Brigitte St Hilaire", 5.3134, "Images/brigcap.png", "2"),
        // new Elite("catElite", "Virginie Villani", 4.9163, "Images/Virginie.jpg", "0"),
        ];
    
   
 
    return menu;
}
  

//document.getElementById('test1').innerHTML = "hello" +  " "+newCras[3]; // works here
//document.getElementById('test9').innerHTML += "test working";
 var list = "";

// async function listUpdate(){
  
//    // function getbtnlist(){
//     //jQuery.get('http://localhost:52330/c:/xampp/htdocs/lineups22/list.txt'
//     jQuery.get('https://BelAEC.github.io/lineups22/list.txt', 
//     function(list) {
//     //document.getElementById("test1").innerHTML = list;
   
//    //original code !!!1
//     //list1 = list
 

//}); return list1;
//} //end of listupdate

//  list1 = "Karen Magharian (N)  3.9153   Line Ouellette (Y)  3.7341   Cristina Popescu (5.5) (?)  5.5706   Josiane Rousseau (Y)  4.0603   Annabel Seyller (?)  4.5633   Quynh Nhu Vo (Y)  4.6052   (4.5) Annabel Anderson (?)  4.9246   Brassard Anne-marie (N)  3.6478   Linda Creamer (N)  4.2203   Alexandra Kaneb (Y)  3.9881   (5.0) Hélène Macchi (Y)  5.8649   Jany Renaud (N)  4.7035   (5.0) Brigitte St-Hilaire (N)  5.2335   Sophie Stival (?)  4.5352";
 function listUpdate() {
    // Fetch the list from GitHub URL using jQuery
    jQuery.get('https://raw.githubusercontent.com/BelAEC/lineups24/main/list.txt', function(fetchedList) {
        // Now `fetchedList` is available inside this callback
        console.log(fetchedList);  // Log the list to the console for debugging
        
        // Update the DOM with the fetched list
        document.getElementById("test1").innerHTML = fetchedList;
        
        // Update the global variable 'list' with the fetched data
        list = fetchedList;  // Now 'list' holds the data fetched from GitHub
    });
}


console.log("list= ", list);

let arraynamesinTAesNewCras=[];
let newCras = [];

async function getInfo(){

        //await listUpdate();

//        var regex  = /[+-]?([0-9]*[.])?[0-9]{4}/g; //for cras
        var regex = /\d(\.\d{1,4})?/g;


        newCras = list.match(regex);

        //alert(newCras);

        //alert(newCras +' ' + typeof(newCras)+' ' + newCras.length);

        //let list =  "Annabel Seyller (N) 4.1861Mihaela Bar (S↑) 3.1102Raheleh Jalalfard (S↑) 2.6916Marie-Claude Pageau (S↑) 3.1578(5.5) Cristina Popescu (N) 5.9845Quynh Nhu Vo (Y) 4.3349(4.5+) Annabel Anderson (N) 4.9864Linda Creamer (Y) 4.3086Kelly Gordon (N) 4.6360Alexandra Kaneb (N) 4.0357(5.0) Hélène Macchi (N) 5.7473Isabelle Provencher 4.4749Marie-Josée Reeves (N) 4.6341Jany Renaud (Y) 4.5042(5.0) Brigitte St-Hilaire 5.2715Sophie Stival (N) 4.5771";

      //  let temp = [...list1]; 

        for(char in list); 

        if(list[char] === regex){
            list.replaceAll(regex, " " );

        }

        names1 = [];

        var reg = /[A-Z][a-z]+\s[A-Z][a-z]+\s/g //matches namesin dynamic list
        names1 = list.match(reg); //matches namesin dynamic list
        //alert (names1); //putting a string in fromt of nmes 1 fucks the alert - doesnt show the names1 list. 
        
        let testspace = list.replaceAll(regex, ", "); //prints namesinTAes, with spaces without cras
        let temparray = testspace.split(', ');//temparray is same-
        //document.getElementById('test2').innerHTML += temparray;
        //get proper array with namesinTAe and cra as one index, to match cra with namesinTAe;

        let arrayTestspace = testspace.split(','); //this putts space after name

        //temparray is used to build arrayNamesinTemparraynewCras
        for(i in temparray){

            arraynamesinTAesNewCras.push(' '+temparray[i]+': '+newCras[i]);
        // alert(arraynamesinTAesNewCras); ok
        console.log("output test = " , arraynamesinTAesNewCras);
        }  return arraynamesinTAesNewCras; //
   

} //end of getInfo()

var indexCra = 0;
//getMenu1();

function updateSelect() {
    for (choix of menu) {
     playerCra.options[playerCra.options.length] = new Option(choix.nom, choix.cra);
    }
}

function chargerSelector() {

    for (choix of menu) {

        if (choix.categ === "catElite") {
            
            selElite.options[selElite.options.length] = new Option(choix.nom, choix.cra);

        } else if (choix.categ === "catSuperElite") {

                selSuperE.options[selSuperE.options.length] = new Option(choix.nom, choix.cra);

        } else 

                if(choix.categ === "Equipe"){
                selJoueur.options[selJoueur.options.length] = new Option(choix.nom, choix.cra);
               // selElite.options[selElite.options.length] = new Option(choix.nom, choix.cra);
            
        }
    }
}

function noSelect(cra) {

    if (document.getElementById('oldCra').value === '0') {
        document.getElementById('updateCra').innerHTML = "Pas de sélection";

    }
}

//charges selector of players to update cra
var allPlayers = [];

function getAllPlayers() {
   
    return menu.filter(item => (menu.includes(item)));
    
}
function hideSelection() {

    document.getElementById("selJoueur").style.display = "none";
}

function getJoueurs() {

    return menu.filter(item => item.categ === 'Equipe');

}
function getAllCras(){
    return menu.filter(item =>item === item.cra);
}



console.log("getJoueurs = ", getJoueurs());
console.log("getSuperElites  = ", getSuperElites());

function getSuperElites() {

    return menu.filter(item => item.categ === 'catSuperElite');
}
function getElites() {

    return menu.filter(item => item.categ === 'catElite');
}


async function infoJoueur(joueur) {
    
     //should return arraynamesinTAES...
    let mJoueurs = getJoueurs();
    
    let tempNames = [];
    for (n in mJoueurs){
        tempNames.push(mJoueurs[n].nom); //tempNames is names in static list. 
    }
    
        let dex = joueur.selectedIndex; //index of the selected item in menu
     
    let choice = mJoueurs[joueur.selectedIndex]; //whole element returned
    let namesinTA = ""; //names in TA are names in static list
    namesinTA = choice.nom; //fullname from list
    
    let findnamesinTA="";
    
   //findnamesinTA = namesinTA.match(/^[A-Z][a-zA-ZÀ-ÿ]+-?$/); //full firstname from list
   // findnamesinTA = namesinTA.match(/^[A-Z][\p{L}]+(?:\s(?:[A-Z][\p{L}]+(?:-[\p{L}]+)?)){1,2}$/u);
    findnamesinTA = namesinTA.match(/^[A-Z][\p{L}]*(?:-[\p{L}]+)?(?:\s(?:[A-Z][\p{L}]*(?:-[\p{L}]+)?)){1,2}$/u);//uppercase on 1st letters only

        ///^[\p{L}]*(?:-[\p{L}]+)?(?:\s(?:[\p{L}]*(?:-[\p{L}]+)?)){1,2}$/ui  //will ignore distinction betw upper and lower case



 //full name and surnmame, 3 names, hyphens and accents
    //try findnamesinTA = namesinTA.match(/^[A-Z][a-ÿ]+/);
    //mine 


//     let findname = () => {
        
//         if(namesinTA.includes("Seyller")){
//         findnamesinTA = "Annabel Seyller";
       
                  
//         } else  
            
//             if(namesinTA.includes("Anderson")){
//             findnamesinTA = "Annabel Anderson";
            
        
            
//          } else {
        
//             findnamesinTA = namesinTA.match(/^[A-Z][a-ÿ]+/);//use this /^[A-Z][a-ÿ-]+ [A-Z][a-ÿ]+$/
// //if problems with name. matches first and last with hyphens in first name. 
         
//          }              
//             return findnamesinTA;
            
//         } 
    
    
//     findname();
   // alert("findname= " +findname());//trouve les noms corrects
      
     tempNames.shift();

     await getInfo();

     let crax = function returnIndexofEl(findnamesinTA){

        for(idx in arraynamesinTAesNewCras){
             if(arraynamesinTAesNewCras[idx].includes(findnamesinTA)){
             return newCras[idx];
          
             } 
           }
        } 
       
    document.getElementById("photoJoueur").src = choice.photo;

    

    if(selected.includes(choice.nom)) {

        document.getElementById("craEquipe").innerHTML = "Joueuse déja sélectionnée";

    } else if (choice.nom === "Les joueuses") {

        document.getElementById("craEquipe").innerHTML = "Faites votre choixxxxxxxxxxxx";
    
    } else {

        selected.push(choice.nom, " " + crax(findnamesinTA));

         if (choice.nom === "Hélène Macchi" && choice.cra > 4.7) {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";

        } if (choice.nom === "Cristina Popescu" && choice.cra > 4.7) {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";

        }
          if (choice.nom === "Les Elites") {
            document.getElementById("craEquipe").innerHTML = "Faites votre choix d'élite(s)";

        }
        if (choice.nom === "Les Super Elites") {
            document.getElementById("craEquipe").innerHTML = "Faites votre choix de Super Elite(s)";

        }
        
        if (choice.nom === "Brigitte St-Hilaire") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
            
        } 
        if (choice.nom === "Virginie Villani" && choice.cra > 4.7) {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
            
        
        }
        if (choice.nom === "Les joueuses") {
            document.getElementById("craEquipe").innerHTML = "Selectionner vos joueuses régulières";
            

        }
        
        if (choice.nom === "Annabel Seyller" && choice.cra > 4.7) {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
            

        }

        if (choice.nom === "Annabel Anderson" && choice.cra > 4.7) {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";

        }
        if (choice.nom === "Linda Creamer") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href= 'https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWlhK3g3ajc%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
        if (choice.nom === "Josiane Rousseau") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href= 'https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWlhK3g3ajc%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
        // if (choice.nom === "Karen Magharian") {
        //     document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href= 'https://tfim.tenniscores.com/player.php?print&p=nndz-WkNHeHhiMytodz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        // }
        if (choice.nom === "Alexandra Kaneb") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WnllNHc3Yi9nZz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
        if (choice.nom === "Isabelle Provencher") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/player.php?print&p=nndz-WWlhOHlMMzQ%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
    
        if (choice.nom === "Quynh Nhu Vo") {
             document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WnllNHc3Yi9nZz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";      }
             if (choice.nom === "Line Ouellette") {
                document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WnllNHc3Yi9nZz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";    
              }
        if (choice.nom === "Jany Renaud") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/player.php?print&p=nndz-WUNXOXg3dnc%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }

        if (choice.nom === "Sophie Stival") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/player.php?print&p=nndz-WWllN3hiNzg%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
        if (choice.nom === "Kelly Gordon") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/player.php?print&p=nndz-WnllNHc3Yi9ndz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
             
        //  if (choice.nom === "Brassard Anne-marie" && choice.cra < 4.2) {
        //     document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WnllNHc3Yi9nZz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        //     //console.log("anne-marie  ", choice.nom);
        // }
               
        
        //document.getElementById("aligne").innerHTML = selected.toString(); //Watch out added this as test code.   
    }   //if(checkboxx){ 

        addtoSelection();
      
      //CraMenuChoisi();
      
}//end of infojoueurs

// function infoElite(joueurSup) {

//     let mElites = getElites();               //console.log("mJoueur====", mElites);
//     let choice = mElites[joueurSup.selectedIndex];
//     document.getElementById("craElite").innerHTML = choice.cra;
//     //document.getElementById("nbmatchsP").innerHTML= "nombre matchs:  ? / "+7;
//     document.getElementById("photoElite").src = choice.photo;
//         if (choice.nom === "Les Elites") {
//         document.getElementById("craElite").innerHTML = "Faites votre choix";
//     } else {
//     if (selected.includes(choice.nom)) {

//         document.getElementById("craElite").innerHTML = "Joueuse déjà sélectionnée";
//     } else 
//         selected.push(choice.nom, " " + choice.cra);
//         document.getElementById("craElite").innerHTML = "Joueuse: " + choice.nom + " " +choice.cra+ " ajoutée à la sélection.<br> Confirmer la sélection ";
//         addtoSelection();
//     }
//     //CraMenuChoisi();
// }
// var Eq=[];

// function infoSuperElite(joueurSup) {

//     let mSuperElites = getSuperElites();
    
//     let choice = mSuperElites[joueurSup.selectedIndex];
    
//     document.getElementById("craSuper").innerHTML = choice.cra;
//     //document.getElementById("nbmatchsSE").innerHTML = "nombre matchs: " +"? /"+4;    
//     document.getElementById("photoSuper").src = choice.photo;

//     if (selected.includes(choice.nom)) {
//         document.getElementById("craSuper").innerHTML = "Joueuse déjà sélectionnée";
//     } else if (choice.nom === "Les Super Elites") {
//         document.getElementById("craSuper").innerHTML = "Faites votre choix";
//     } else {
//         selected.push(choice.nom, "" + choice.cra);
//         document.getElementById("craSuper").innerHTML = "Joueuse: " + choice.nom + " " + choice.cra + " ajoutée à la sélection.<br> Confirmer la sélection ";
//         addtoSelection();
//         // document.getElementById("aligne").innerHTML = selected.toString();
//     }
//   //  CraMenuChoisi();
// }

function infoTous(tous) {

    allPlayers = getAllPlayers(); 
    
    var choice = allPlayers[tous.selectedIndex]; 
    indexCra = tous.selectedIndex;
    console.log("selindex = ", indexCra); //this works
    //console.log(newcra, "choice cra"); //newcra is the find cra i want....
   // var oldCra = newcra;
  

}
function clearlist() {

    document.getElementById("aligne").innerHTML = "Liste annulée";
    document.getElementById("nbDispo").innerHTML = "";
    
    selected = [];
    //document.getElementById("nbDispo").innerHTML = "";
    document.getElementById("craEquipe").innerHTML = "Aucune sélection";
    localStorage.clear();

}
function clearlast() {
    
    selected.pop();
    selected.pop();
    document.getElementById("aligne").innerHTML = selected;
    //alert (selected);
    /* document.getElementById("nbDispo").innerHTML = 3; */
    return selected;
}

function getSelectedPlayers() {
    
    return selected;
}

function displayPlayers() {
    
    var testNoElite=['Brigitte St Hilaire', 'Helene Macchi', 'Virginie Villani'];
    let limitSE = (selected.includes(testNoElite[0]) && selected.includes(testNoElite[1]))||(selected.includes(testNoElite[1])&& selected.includes(testNoElite[2])) || (selected.includes(testNoElite[1]) && selected.includes(testNoElite[2]))
    let rule4_5 = (selected.includes('Gordon')||selected.includes('Renaud'));
    var n = selected.length;
        
    if(document.getElementById('cancelbtn').clicked === true){
        // document.getElementById('nbDispo').innerHTML = 'Last player removed ' + n/2-1;
        n = n-2;
    }
    
   

    if ( n/2 < 6) {
        
        if(limitSE){
            document.getElementById("nbDispo").innerHTML = "Attention, votre sélection contient PLUS DE UNE (Super(Elite)\n ";
            document.getElementById("nbDispo").innerHTML += " " +n/2 + " joueuses";
        if(rule4_5){
            document.getElementById("nbDispo").innerHTML = "Attention, votre sélection contient une joueuse 4.5\n ";
            document.getElementById("nbDispo").innerHTML += " " +n/2 + " joueuses";
        }          
        } else{       
        document.getElementById("nbDispo").innerHTML = n/2 + " joueuses ; votre sélection n'est pas complète";
        }
    } else {
        if ( n/2 >= 6) {
               
        document.getElementById("nbDispo").innerHTML = "Vous avez sélectionné " + n/2 + " joueuses, c'est une équipe!";
        
        }
        if(limitSE){
            
            document.getElementById("nbDispo").innerHTML =  n/2 + " joueuses, Attention, votre sélection contient PLUS DE UNE (Super(Elite))";  
        }        
           
    }
    document.getElementById('aligne').innerHTML = selected.toString(); //displayers in box below
    localStorage.setItem('SelectedplayerList', selected.toString());
    
}
var updatedCra = 0;
var indexCra = 0;

//updates the select box and all Players  . 

function updateCra(indexCra) {  //only when clicked on button

    // noSelect();
    document.getElementById('newCra').innerHTML = "";
    updatedCra = document.getElementById('newCra').value;
    console.log(updatedCra, "updatedCRa, line 360");
    updatedCra = parseFloat(updatedCra);//float
    menu[indexCra].cra = updatedCra; //set new cra in menu - temporary  

    //console.log(typeof (updatedCra)); //string

    menu1 = [];
    menu1.push(menu);
    //allPlayers[indexCra] = updatedCra;
    console.log("updated");
    console.log("menu1= ", menu1);
    // console.log("updated menu = " ,menu);
    //changed from +menu[indexCra].cra to updatedCra below
    if (document.getElementById('newCra').value === "") {

        document.getElementById('msgUpdate').innerHTML = "Attention, vous n'avez pas mis à jour le Cra";
    } else {

        document.getElementById('updateCra').innerHTML = "Mis à jour : <br> joueuse "
            + menu[indexCra].nom + ", " + "Cra = " + updatedCra;
        //alert("Nan");
        // document.getElementById('msgUpdate').innerHTML = ""; 

    }
    document.getElementById('newCra').innerHTML = "";


}


function addtoSelection() {
    document.getElementById("aligne").innerHTML = selected.toString();
    displayPlayers();
}
function CraMenuChoisi() {

    var mJoueurs = getJoueurs(); //returns the 8 players
    var mSuperElites = getSuperElites(); // the 2 superElites
    var mElites = getElites(); //..
    allPlayers = getAllPlayers();
   
    function displayTeams() {

        outputHTML = "";
        outputHTML += "<table class='table'>";

        for (var i = 0; i < Eq.length; i++) {

            outputHTML += "<tr>";
            outputHTML += "<td>" + "ALIGNEMENT " + (i + 1) + "\n";
            outputHTML += "<td>" + " " + Eq[i] + " " + "</td>";
        }
        outputHTML += "</tr>";

        return outputHTML += "</table>";
    }

    document.getElementById("aligne").innerHTML += displayTeams();

}
function clearInstructions() {

    document.getElementsByClass('msgUpdate').innerHTML = "";
}
function clearupdateMsg() {

    document.getElementById('updateCra').innerHTML = "";
    //document.getElementById('msgUpdate').innerHTML = "";

}
function clearMsg() {

    document.getElementById('updateCra').innerHTML = "";
    
}

function showLiens() {

    document.getElementById('liens').style.display = "block";
}
function saveSpace() {

    /* if(document.getElementById('updateCra').value ===""){
    document.getElementById("liens").style.display = "block"; */

    if (document.getElementById("updateCra").value !== "") {
        document.getElementById("liens").style.display = "none";


    } else {
        document.getElementById('liens').style.display = "block";
    }
}

function showInstructions() {
    saveSpace();
    document.getElementById('newCra').innerHTML = "";
    document.getElementById('updateCra').innerHTML = 'Mettez à jour le Cra pour chaque joueuse disponible. Ensuite, faites la sélection de toutes les joueuses disponibles pour la rencontre, sans rafraichir la page. ' +
        'Confirmez vos choix en cliquant sur le bouton de confirmation: ' +
        '"Bon choix: confirmez la sélection". Cliquez sur le bouton "alignements possibles"' +
        ' pour obtenir tous les alignements possibles,  classés par Cra, pour votre sélection".';

}
