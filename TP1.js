//EX1
var a=5;//déclaration avec var
let ch="bonjour";//déclaration avec let
const pi=3.14;//déclaration d'une cosntante avec const
function aff_somme(){
    var b=8;
    var c=10;
    var s=b+c
    alert(s);
}
aff_somme();
//alert(s);-->n'affiche rien car la la variable s est locale à la fonction aff_somme()
//pi=5;-->génère une erreur

//EX2
function somme(a,b){
    s=a+b;
}//fonction somme classique

let s=(a,b)=>a+b;//fonction somme fléchée aver return implicite

//EX3

const user={name:"Nour",age:10,city:"Tunis"};
let nom=user.name;//stocker le nom
let age=user.age;//stocker l'age
alert(nom+" "+age);//afficher les deux variables

//EX4
let T1=[1,2,3];
let T2=[4,5,6];
let T3=[...T1,...T2];//créer T3 à partir de la fusion de T1 et T2
alert(T3);//afficher T3

let copie={...user};//créer une copie de user
copie.age=21;//modifier l'age de la copie
alert(copie.name+" "+copie.age+" "+copie.city);

//EX5

let livre={
    titre:"Les misérables",//champ titre
    auteur:"Victor Hugo",//champ auteur
    année:"1862",//champ année
    getInfo: function(){//méthode qui retourne une phrase descriptive
        return this.titre+" écrit par "+this.auteur+" en "+this.année;
    }
}
alert(livre.getInfo());//afficher la chaîne descriptive

//EX6
class Etudiant{//classe Etudiant
    constructor(nom,note){
        this.nom=nom;
        this.note=note;
    }
    getMention(){//méthode qui retourne la mention
        if(this.note<10){
            return "Echec"
        }
        else if(this.note<=12){
            return "Passable";
        }
        else if(this.note<=14){
            return "Assez bien";
        }
        else if(this.note<=16){
            return "Bien";
        }
        else{
            return "Très bien";
        }
    }
}

let et1=new Etudiant("Yesser",20);//instancier et1
let et2=new Etudiant("Ahmed",8);//instancier et2
let et3=new Etudiant("Montasser",15);//instancier et3
alert("La mention de "+et1.nom+" est "+et1.getMention());
alert("La mention de "+et2.nom+" est "+et2.getMention());
alert("La mention de "+et3.nom+" est "+et3.getMention());

//EX7
let notes=[12,5,17,9,20];
let somme2=notes.reduce((acc, note)=>acc+note,0);//calcul de la somme en utilisant reduce
let moyenne=somme2/notes.length;
alert("Moyenne :"+moyenne);
let notesDecroissantes=[...notes].sort((a,b)=>b-a);
alert("Tri décroissant :"+notesDecroissantes);
let notesPassables=notes.filter(note=>note>=10);
alert("Notes >= 10 : "+notesPassables);