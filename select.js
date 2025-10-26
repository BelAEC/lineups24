
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
    static afficherAlignement() {

        return this.alignement();
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
let alignement = [];


function getAlignement() {

    
    alignement = [

        new Joueur("Equipe", "Les Super Elites", 0, "Images/superEl.png"),
      
        new Joueur("Equipe", "Cristina Popescu", 6.0061, "Images/cristina.png"),

        new Joueur("Equipe", "Les Elites", 0, "Images/sophie.png"),
        new Joueur("Equipe", "Hélène Macchi", 5.0460, "Images/Helene.png"),
        new Joueur("Equipe", "Brigitte St-Hilaire", 5.000, "Images/Brigitte25.png"),
        new Joueur("Equipe", "Virginie Villani", 4.000, "Images/Virginie.jpg"),

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
        new Joueur("Equipe", "Marie-Josée Reeves", 4.4000, "Images/frog.jpeg"),

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
 
    return alignement;
}

 var list = "";

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
       
      //  console.log("output test = " , arraynamesinTAesNewCras);
        }  return arraynamesinTAesNewCras; //
   

} //end of getInfo()

var indexCra = 0;


function updateSelect() {
    for (choix of alignement) {
     playerCra.options[playerCra.options.length] = new Option(choix.nom, choix.cra);
    }
}

function chargerSelector() {

    for (choix of alignement) {

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
   
    return alignement.filter(item => (alignement.includes(item)));
    
}
function hideSelection() {

    document.getElementById("selJoueur").style.display = "none";
}

function getJoueurs() {

    return alignement.filter(item => item.categ === 'Equipe');

}
function getAllCras(){
    return alignement.filter(item =>item === item.cra);
}



console.log("getJoueurs = ", getJoueurs());
console.log("getSuperElites  = ", getSuperElites());

function getSuperElites() {

    return alignement.filter(item => item.categ === 'catSuperElite');
}
function getElites() {

    return alignement.filter(item => item.categ === 'catElite');
}


async function infoJoueur(joueur) {
    
    let mJoueurs = getJoueurs();
    
    let tempNames = [];
    for (let n in mJoueurs){
        tempNames.push(mJoueurs[n].nom);
    }
    
    // Check if selectedIndex is 0 (placeholder), do nothing or return
    if (joueur.selectedIndex <= 0 || joueur.selectedIndex > mJoueurs.length) {
        return; // no valid selection
    }
    
    // Adjust index by subtracting 1 when accessing array
    let choice = mJoueurs[joueur.selectedIndex - 1]; 
    
    let namesinTA = choice.nom;

    let findnamesinTA = "";
   

    // continue your code here...

    
   //findnamesinTA = namesinTA.match(/^[A-Z][a-zA-ZÀ-ÿ]+-?$/); //full firstname from list
   // findnamesinTA = namesinTA.match(/^[A-Z][\p{L}]+(?:\s(?:[A-Z][\p{L}]+(?:-[\p{L}]+)?)){1,2}$/u);
    findnamesinTA = namesinTA.match(/^[A-Z][\p{L}]*(?:-[\p{L}]+)?(?:\s(?:[A-Z][\p{L}]*(?:-[\p{L}]+)?)){1,2}$/u);//uppercase on 1st letters only

        ///^[\p{L}]*(?:-[\p{L}]+)?(?:\s(?:[\p{L}]*(?:-[\p{L}]+)?)){1,2}$/ui  //will ignore distinction betw upper and lower case
      
     tempNames.shift();

     await getInfo();

     let crax = function returnIndexofEl(findnamesinTA){

        for(idx in arraynamesinTAesNewCras){
             if(arraynamesinTAesNewCras[idx].includes(findnamesinTA)){
             return newCras[idx];
          
             } 
           }
        } 
       
    // document.getElementById("photoJoueur").src = choice.photo;
       document.getElementById("photoJoueur").style.backgroundImage = `url('${choice.photo}')`;
    
    if(selected.includes(choice.nom)) {

        document.getElementById("craEquipe").innerHTML = "Joueuse déja sélectionnée";

    } else if (choice.nom === "Les joueuses" || choice.nom === "Les Elites" ||choice.nom === "Les Super Elites") {

        document.getElementById("craEquipe").innerHTML = "Faites vos choix";
    
    } else {

        selected.push(choice.nom, " " + crax(findnamesinTA));

         if (choice.nom === "Hélène Macchi") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";

        } if (choice.nom === "Cristina Popescu") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";

        }
            
        if (choice.nom === "Brigitte St-Hilaire") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
            
        } 
        if (choice.nom === "Virginie Villani") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
            
        
        }
             
        if (choice.nom === "Annabel Seyller") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
            
        }

        if (choice.nom === "Annabel Anderson") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";

        }
        if (choice.nom === "Linda Creamer") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href= 'https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWlhK3g3ajc%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
        if (choice.nom === "Josiane Rousseau") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href= 'https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWlhK3g3ajc%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
         if (choice.nom === "Karen Magharian") {
             document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href= 'https://tfim.tenniscores.com/player.php?print&p=nndz-WkNHeHhiMytodz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
         }
         if (choice.nom === "Marie-Josée Reeves") {
             document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href= 'https://tfim.tenniscores.com/player.php?print&p=nndz-WkNHeHhiMytodz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
         }
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
               
        
    }  
        addtoSelection();
      
      //CraalignementChoisi();
      
}//end of infojoueurs


function infoTous(tous) {

    allPlayers = getAllPlayers(); 
    var choice = allPlayers[tous.selectedIndex]; 
    indexCra = tous.selectedIndex;
    console.log("selindex = ", indexCra); //this works
       
  

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
    
    var testNoElite=['Brigitte St Hilaire', 'Cristina Popescu', 'Helene Macchi', 'Virginie Villani'];
    let limitSE = (selected.includes(testNoElite[0]) && selected.includes(testNoElite[1]))||(selected.includes(testNoElite[1])&& selected.includes(testNoElite[2])) || (selected.includes(testNoElite[1]) && selected.includes(testNoElite[3]))
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
    alignement[indexCra].cra = updatedCra; //set new cra in alignement - temporary  

}

function addtoSelection() {
    console.log('myFunction was called!');
    document.getElementById("aligne").innerHTML = selected.toString();
    displayPlayers();
}

function clearMsg() {

    document.getElementById('updateCra').innerHTML = "";
    
}

function showLiens() {

    document.getElementById('liens').style.display = "block";
}



