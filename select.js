
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

        new Joueur("Equipe", "Les joueuses", 0, "Images/equipe1.jpg"),
        new Joueur("Equipe", "Annabel Seyller", 4.4444, "Images/Seyller.jpg"),
       // new Joueur("Equipe", "Mihaela Bar (S↑)", 3.1102, "Images/anderson.jpeg"),

       // new Joueur("Equipe", "Raheleh Jalalfard (S↑)", 2.6916, "Images/anderson.jpeg"),

       // new Joueur("Equipe", "Marie-Claude Pageau", 3.1578, "Images5/anderson.jpeg"),
        
        new Joueur("Equipe", "Quynh Nhu Vo", 4.2575, "Images/qu2.jpg"),
        new Joueur("Equipe", "Annabel Anderson", 5.2461, "Images/anderson.jpeg"),
        new Joueur("Equipe", "Linda Creamer", 4.1679, "Images/lady2.jpeg"),
       // new Joueur("Equipe", "Kelly Gordon", 4.5896, "Images/kellyG.jpeg"),
        new Joueur("Equipe", "Alexandra Kaneb", 4.3, "Images/frog.jpeg"),
        new Joueur("Equipe", "Sophie Stival", 4.5327, "Images/soph1.jpg"),
        //new Joueur("Equipe", "Isabelle Provencher", 4.4586, "Images/Isa1.jpg"),
        new Joueur("Equipe", "Karen Magharian", 4.4586, "Images/Isa1.jpg"),
        new Joueur("Equipe", "Jany Renaud", 4.4000, "Images/jany.jpeg"),
        new Joueur("Equipe", "Reeves Marie-Josee", 4.4000, "Images/frog.jpeg"),

        new Joueur("Equipe", "Josianne Rousseau", 3.9607, "Images/frog.jpeg"),
        new Joueur("Equipe", "Ouellette Line", 3.9607, "Images/lady2.jpeg"),
        new Joueur("Equipe", "Brassard Anne-marie", 3.9607, "Images/lady2.jpeg"),

       // new Joueur("Equipe", "Helène Macchi", 5.7299, "Images/Helene.png"),
        new SuperElite("catSuperElite", "Les Super Elites", 0, "Images/superEl.png", "nbMatchsSE"),
        new SuperElite("catSuperElite", "Helene Macchi", 5.9460, "Images/Helene.png", "3"),
        new SuperElite("catSuperElite", "Cristina Popescu", 6.0061, "Images/cristina.png", "4"),
       
        new Elite("catElite", "Les Elites", 0, "Images/sophie.png", "nbMatchE"),
        new Elite("catElite", "Brigitte St Hilaire", 5.3134, "Images/brigcap.png", "2"),
        new Elite("catElite", "Virginie Villani", 4.9163, "Images/Virginie.jpg", "0"),
        ];
    
   
 
    return menu;
}
/* let newCras = [

    '4.1861', '3.1102',
    '2.6916', '3.1578',
    '5.9845', '4.3349',
    '4.9864', '4.3086',
    '4.6360', '4.0357',
    '5.7473', '4.4749',
    '4.6341', '4.5042',
    '5.2715', '4.5771'
  
]; */
   

//document.getElementById('test1').innerHTML = "hello" +  " "+newCras[3]; // works here
//document.getElementById('test9').innerHTML += "test working";
 let list1 ="";

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
 
list1 = "(5.0) Brigitte St-Hilaire  (C)  5.2335 Sophie Stival  (CC)  4.5352 (4.5) Annabel Anderson  4.9246 Anne-Marie Brassard  3.6478 Linda Creamer  4.2203 Alexandra Kaneb  4.0480 (5.0) Hélène Macchi  5.8984 Karen Magharian  3.9752 Ouellette  Line 3.7341 Cristina Popescu (5.5)  5.5706 Josianne Rousseau  4.0601 Reeves Marie-Josee 4.6455 Jany Renaud  4.7035 Annabel Seyller  4.5631 Quynh Nhu Vo  4.6387";

   // list1 = document.getElementById('test1').innerHTML;
    //alert(typeof(list1));
  //  alert(list1);  
let arraynamesinTAesNewCras=[];
let newCras = [];

async function getInfo(){

        //await listUpdate();

        var regex  = /[+-]?([0-9]*[.])?[0-9]{4}/g; //for cras

        newCras = list1.match(regex);

        //alert(newCras);

        //alert(newCras +' ' + typeof(newCras)+' ' + newCras.length);

        //let list =  "Annabel Seyller (N) 4.1861Mihaela Bar (S↑) 3.1102Raheleh Jalalfard (S↑) 2.6916Marie-Claude Pageau (S↑) 3.1578(5.5) Cristina Popescu (N) 5.9845Quynh Nhu Vo (Y) 4.3349(4.5+) Annabel Anderson (N) 4.9864Linda Creamer (Y) 4.3086Kelly Gordon (N) 4.6360Alexandra Kaneb (N) 4.0357(5.0) Hélène Macchi (N) 5.7473Isabelle Provencher 4.4749Marie-Josée Reeves (N) 4.6341Jany Renaud (Y) 4.5042(5.0) Brigitte St-Hilaire 5.2715Sophie Stival (N) 4.5771";

        let temp = [...list1]; 

        for(char in list1); 

        if(list1[char] === regex){
            list1.replaceAll(regex, " " );

        }

        names1 = [];

        var reg = /[A-Z][a-z]+\s[A-Z][a-z]+\s/g //matches namesin dynamic list
        names1 = list1.match(reg); //matches namesin dynamic list
        //alert (names1); //putting a string in fromt of nmes 1 fucks the alert - doesnt show the names1 list. 
        
        let testspace = list1.replaceAll(regex, ", "); //prints namesinTAes, with spaces without cras
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
    
    findnamesinTA = namesinTA.match(/^[A-Z][a-zA-ZÀ-ÿ]+-?$/); //partial name from list
    //full name and surnmame = /^[A-Z][a-zA-Z]+(?:-[A-Z][a-zA-Z]+)?\s[A-Z][a-zA-Z]+$/
    //mine 


    let findname = () => {
        
        if(namesinTA.includes("Seyller")){
        findnamesinTA = "Annabel Seyller";
        
                  
        } else  
            
                if(namesinTA.includes("Anderson")){
            findnamesinTA = "Annabel Anderson";
            
        
            
         } else {
        
            findnamesinTA = namesinTA.match(/^[A-Z][a-ÿ]{2}/);
         
         }                    
            return findnamesinTA;
            
        }
    
    
    findname();
      
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

        document.getElementById("craEquipe").innerHTML = "Faites votre choix";
    

    } else {

        selected.push(choice.nom, " " + crax(findnamesinTA));

        // if (choice.nom === "Isabelle Provencher") {
        // document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/player.php?print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        // }
        if (choice.nom === "Annabel Anderson" && choice.cra > 4.7) {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWkrNHc3YjY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";

        }
        if (choice.nom === "Linda Creamer") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href= 'https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWlhK3g3ajc%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
        if (choice.nom === "Josianne Rousseau") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href= 'https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WWlhK3g3ajc%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
        if (choice.nom === "Karen Magharian") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href= 'https://tfim.tenniscores.com/player.php?print&p=nndz-WkNHeHhiMytodz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
        if (choice.nom === "Alexandra Kaneb") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WnllNHc3Yi9nZz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
        if (choice.nom === "Reeves Marie-Josee") {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WnllNHc3Yi9nZz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        }
    
        if (choice.nom === "Quynh Nhu Vo") {
             document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WnllNHc3Yi9nZz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";      }
             if (choice.nom === "Ouellette Line") {
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
        if (choice.nom === "Annabel Seyller" && choice.cra >4.4) {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/player.php?print&p=nndz-WkM2L3g3ZitnQT09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";

        }   
         if (choice.nom === "Brassard Anne-marie" && choice.cra < 4.2) {
            document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&print&p=nndz-WnllNHc3Yi9nZz09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
            //console.log("anne-marie  ", choice.nom);
        }
        // if (choice.nom === "Mihaela Bar (S↑)") {
        //     document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/player.php?print&p=nndz-WWk2d3liNzY%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        // }
        // if (choice.nom === "Marie-Claude Pageau") {
        //     document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/player.php?print&p=nndz-WWk2d3g3M3g%3D' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        // }
        // if (choice.nom === "Raheleh Jalalfard") {
        //     document.getElementById("craEquipe").innerHTML = "Joueuse: '<a href='https://tfim.tenniscores.com/player.php?print&p=nndz-WnllNHhMMzRqUT09' alt='joueuse'>" + choice.nom + '</a> ' + crax(findnamesinTA) + " ajoutée à la sélection.<br> Confirmer la sélection ";
        // }
        //document.getElementById("aligne").innerHTML = selected.toString(); //Watch out added this as test code.   
    }   //if(checkboxx){ 

        addtoSelection();
      
      //CraMenuChoisi();
      
}//end of infojoueurs

function infoElite(joueurSup) {

    let mElites = getElites();               //console.log("mJoueur====", mElites);
    let choice = mElites[joueurSup.selectedIndex];
    document.getElementById("craElite").innerHTML = choice.cra;
    //document.getElementById("nbmatchsP").innerHTML= "nombre matchs:  ? / "+7;
    document.getElementById("photoElite").src = choice.photo;
        if (choice.nom === "Les Elites") {
        document.getElementById("craElite").innerHTML = "Faites votre choix";
    } else {
    if (selected.includes(choice.nom)) {

        document.getElementById("craElite").innerHTML = "Joueuse déjà sélectionnée";
    } else 
        selected.push(choice.nom, " " + choice.cra);
        document.getElementById("craElite").innerHTML = "Joueuse: " + choice.nom + " " +choice.cra+ " ajoutée à la sélection.<br> Confirmer la sélection ";
        addtoSelection();
    }
    //CraMenuChoisi();
}
var Eq=[];

function infoSuperElite(joueurSup) {

    let mSuperElites = getSuperElites();
    
    let choice = mSuperElites[joueurSup.selectedIndex];
    
    document.getElementById("craSuper").innerHTML = choice.cra;
    //document.getElementById("nbmatchsSE").innerHTML = "nombre matchs: " +"? /"+4;    
    document.getElementById("photoSuper").src = choice.photo;

    if (selected.includes(choice.nom)) {
        document.getElementById("craSuper").innerHTML = "Joueuse déjà sélectionnée";
    } else if (choice.nom === "Les Super Elites") {
        document.getElementById("craSuper").innerHTML = "Faites votre choix";
    } else {
        selected.push(choice.nom, "" + choice.cra);
        document.getElementById("craSuper").innerHTML = "Joueuse: " + choice.nom + " " + choice.cra + " ajoutée à la sélection.<br> Confirmer la sélection ";
        addtoSelection();
        // document.getElementById("aligne").innerHTML = selected.toString();
    }
  //  CraMenuChoisi();
}

function infoTous(tous) {

    allPlayers = getAllPlayers(); 
    
    var choice = allPlayers[tous.selectedIndex]; //choice is element in the allPlayers list
    /* if(choice === "Linda Creamer"){
        document.getElementById('playerCra').innerHTML =  'https://tfim.tenniscores.com/?mod=nndz-Sm5yb2lPdTcxdFJibXc9PQ%3D%3D&all&print&p=nndz-WWlhK3g3ajc%3D&s=nndz-WXlhN3d3PT0%3D';  */
    //}
    //document.getElementById("oldCra").value = newcra;
    
    //element in array = allPlayers[document.getElementById('playerCra').selectedIndex];

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
/* function clearbox() {

    if (document.getElementById('newCra').value !== "") {
        //document.getElementById("updateCra").innerHTML = "";
        document.getElementById('msgUpdate').innerHTML = "";
    }
} */

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

 /*  var warning = document.getElementById('warning');
    warning.addEventListener('click', elites2warning);
    function elites2warning(){
    
    if(limitSE){
      alert("Attention, votre sélection contient PLUS DE UNE (Super(Elite))\n")
   }
} */
 


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
   // var choix1F = mJoueurs[document.getElementById("selJoueur").selectedIndex].nom;
    //var choix2 = mSuperElites[document.getElementById("selSuperE").selectedIndex].nom;
  //  var choix3 = mElites[document.getElementById("selElite").selectedIndex].nom;
  //  var choix4 = allPlayers[document.getElementById("playerCra").selectedIndex].nom;

   // var t1 = mJoueurs[document.getElementById("selJoueur").selectedIndex].cra;
    //var t2 = mSuperElites[document.getElementById("selSuperE").selectedIndex].cra;
  //  var t3 = mElites[document.getElementById("selElite").selectedIndex].cra;
//var oldCra = allPlayers[document.getElementById("playerCra").selectedIndex].cra;

 
  /*  
    function getChoix1F() {

        choix1F = mJoueurs[document.getElementById("selJoueur").selectedIndex].nom;

        if (choix1F === "Les joueuses") {

            choix1F = "";

        } return "";
    } */

  //  console.log(choix1F, '= choix1F');


    /* function getChoix2() {

        choix2 = mSuperElites[document.getElementById("selSuperE").selectedIndex].nom;
        var t2 = mSuperElites[document.getElementById("selSuperE").selectedIndex].cra;
        if (choix2 === "Select" && t2 === '0') {
            return "";

        } else {

            choix2 = choix2 + ": " + t2 + '';
            return choix2;
        }

    } console.log(choix2, '= choix2');

    function getChoix3() {

        choix3 = mElites[document.getElementById("selElite").selectedIndex].nom;
        var t3 = mElites[document.getElementById("selElite").selectedIndex].cra;
        if (choix3 === "Select" && t3 === '0') {
            //choix2F="",
            //t2F="";

            return "";

        } else {
            choix3 = choix3 + ": " + t3;
            return choix3;
        }
    } console.log(choix3, '= choix3');
 */
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
/* function persistLineup(){
    selplayers = localStorage.getItem('SelectedplayerList')
    if(selplayers!==0){
    document.getElementById('aligne').innerHTML = selplayers;
    }
  }
 */
/* function hideInstr(){

  var x = document.getElementById("updateCra");
  if(x.style.display === "block") {
    clearupdateMsg();  
    }else{
       x.innerHTML=" bloody hell ";
    }
} */

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
