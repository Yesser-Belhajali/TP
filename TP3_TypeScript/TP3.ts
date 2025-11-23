//Exercice1
console.log("Hello TypeScript!");
//----------------------------------------------------------------
//Exercice2
let nom: string="Yesser";
let age: number=20;
let isAdmin: boolean=false;
let scores: number[]=[10,20,30,40];
let etudiant: [string,number]=["Yesser",21];
enum Role{
    user,
    Admin,
    SuperAdmin
}
let monRole: Role=Role.user;
console.log(monRole);
//----------------------------------------------------------------
//Exercice3
let id: number|string;//id peut etre soit number soit string
id=100;
console.log(id);
id="bonjour";
console.log(id);
type A={name:string;age:number};//initialiser le type A
type B={age:number;isAdmin:boolean};//initialiser le type B
type C=A&B;//C recoit l'intersection de A et B
let user:C={
    name:"Yesser",
    age:21,
    isAdmin:false
};
type Status="pending"|"done"|"canceled";
let tache:Status="done";
let donnee:unknown="Bonjour";
if (typeof donnee === "string") {//test du type
    let length: number = (donnee as string).length;
    console.log(length);//affichage de la longueur
}
//------------------------------------------------
//Exercice4
interface User{
    id:number;
    name:string;
    email?:string;
    readonly isAdmin:boolean;
}
let user1:User={
    id:1,
    name:"Yesser",
    isAdmin:false,
    email:"medyesserbha@gmail.com"
};
interface Admin extends User{
    permissions:string[];
}
let admin1:Admin={
    id:2,
    name:"Islem",
    isAdmin:true,
    email:"mohamedislembha@gmail.com",
    permissions:["read","write","execute"]
};
//-------------------------------------------------
//Exercice5
function add(a:number,b:number):number{
    return a+b;
}
console.log(add(15,5));
//fonction greet
function greet(name:string,age?:number):void{
    if(age==undefined){
        console.log("Bonjour "+name);
    }
    else{
        console.log("Bonjour "+name+" ,vous avez "+age+" ans");
    }
}
greet("Yesser");
greet("Yesser",21);
//fonction power
function power(base:number,exp:number=2):number{
    return base**exp;
}
console.log(power(2));
console.log(power(2,5));
//declaration des surcharges
function combine(a:number,b:number):number;
function combine(a:string,b:string):string;
//implementation
function combine(a:any,b:any):any{
    return a+b;
}
console.log(combine(20,10));
console.log(combine("Bonjour ","Yesser"));
//-----------------------------------------------------------------
//Exercice6
//question1
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet():string{
        return "Je m'appelle "+this.name+" ,j'ai "+this.age+" ans";
    }
}
let personne=new Person("Yesser",21);
console.log(personne.greet());
//question2
class Student extends Person{
    school:string;
    constructor(name:string,age:number,school:string){
        super(name,age);
        this.school=school;
    }
    greet():string{
        return super.greet()+" ,Je suis étudiant à "+this.school;
    }
}
let student=new Student("Yesser",21,"FST");
console.log(student.greet());
//question3
abstract class Shape{
    abstract area():number;
}
class Circle extends Shape{
    rayon:number;
    constructor(rayon:number){
        super();
        this.rayon=rayon;
    }
    area():number{
        return this.rayon**2*Math.PI;
    }
}
class Rectangle extends Shape{
    longueur:number;
    largeur:number;
    constructor(longueur:number,largeur:number){
        super();
        this.longueur=longueur;
        this.largeur=largeur;
    }
    area():number{
        return this.longueur*this.largeur;
    }
}
let cercle=new Circle(5);
console.log("Aire du cercle = "+cercle.area());
let rectangle=new Rectangle(10,5);
console.log("Aire du rectangle = "+rectangle.area());
//question4
interface Drivable {
    drive(): void;
}
class Car implements Drivable {
    marque: string;
    constructor(marque: string) {
        this.marque = marque;
    }

    drive(): void {
        console.log(this.marque+ " est en train de rouler");
    }
}
const car1 = new Car("Toyota");
car1.drive();
//-----------------------------------------------------------------------------
//Exercice7
//question1
function identity<T>(value:T):T{
    return value;
}
//question2
function getFirst<T>(arr:T[]):T|undefined{
    return arr[0];
}
//question3
class Repository<T>{
    private items:T[]=[];
    add(item:T): void{
        this.items.push(item);
    }
    remove(item: T): void{
        this.items=this.items.filter(i=>i!==item);
    }
    getAll():T[]{
        return this.items;
    }
}
//question4
interface ApiResponse<T>{
    data: T;
    error?: string;
}
//---------------------------------------------------------------
//Exercice8
//question2
import { add1 } from "./math";
console.log(add1(5, 3));
import type { User1 } from "./types";
const u: User1 = { id: 1, name: "Yesser" };
console.log(u);