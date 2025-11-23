"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Exercice1
console.log("Hello TypeScript!");
//----------------------------------------------------------------
//Exercice2
var nom = "Yesser";
var age = 20;
var isAdmin = false;
var scores = [10, 20, 30, 40];
var etudiant = ["Yesser", 21];
var Role;
(function (Role) {
    Role[Role["user"] = 0] = "user";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
var monRole = Role.user;
console.log(monRole);
//----------------------------------------------------------------
//Exercice3
var id; //id peut etre soit number soit string
id = 100;
console.log(id);
id = "bonjour";
console.log(id);
var user = {
    name: "Yesser",
    age: 21,
    isAdmin: false
};
var tache = "done";
var donnee = "Bonjour";
if (typeof donnee === "string") { //test du type
    var length_1 = donnee.length;
    console.log(length_1); //affichage de la longueur
}
var user1 = {
    id: 1,
    name: "Yesser",
    isAdmin: false,
    email: "medyesserbha@gmail.com"
};
var admin1 = {
    id: 2,
    name: "Islem",
    isAdmin: true,
    email: "mohamedislembha@gmail.com",
    permissions: ["read", "write", "execute"]
};
//-------------------------------------------------
//Exercice5
function add(a, b) {
    return a + b;
}
console.log(add(15, 5));
//fonction greet
function greet(name, age) {
    if (age == undefined) {
        console.log("Bonjour " + name);
    }
    else {
        console.log("Bonjour " + name + " ,vous avez " + age + " ans");
    }
}
greet("Yesser");
greet("Yesser", 21);
//fonction power
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    return Math.pow(base, exp);
}
console.log(power(2));
console.log(power(2, 5));
//implementation
function combine(a, b) {
    return a + b;
}
console.log(combine(20, 10));
console.log(combine("Bonjour ", "Yesser"));
//-----------------------------------------------------------------
//Exercice6
//question1
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Je m'appelle " + this.name + " ,j'ai " + this.age + " ans";
    };
    return Person;
}());
var personne = new Person("Yesser", 21);
console.log(personne.greet());
//question2
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    Student.prototype.greet = function () {
        return _super.prototype.greet.call(this) + " ,Je suis étudiant à " + this.school;
    };
    return Student;
}(Person));
var student = new Student("Yesser", 21, "FST");
console.log(student.greet());
//question3
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(rayon) {
        var _this = _super.call(this) || this;
        _this.rayon = rayon;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.pow(this.rayon, 2) * Math.PI;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(longueur, largeur) {
        var _this = _super.call(this) || this;
        _this.longueur = longueur;
        _this.largeur = largeur;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.longueur * this.largeur;
    };
    return Rectangle;
}(Shape));
var cercle = new Circle(5);
console.log("Aire du cercle = " + cercle.area());
var rectangle = new Rectangle(10, 5);
console.log("Aire du rectangle = " + rectangle.area());
var Car = /** @class */ (function () {
    function Car(marque) {
        this.marque = marque;
    }
    Car.prototype.drive = function () {
        console.log(this.marque + " est en train de rouler");
    };
    return Car;
}());
var car1 = new Car("Toyota");
car1.drive();
//-----------------------------------------------------------------------------
//Exercice7
//question1
function identity(value) {
    return value;
}
//question2
function getFirst(arr) {
    return arr[0];
}
//question3
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.remove = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    return Repository;
}());
//---------------------------------------------------------------
//Exercice8
//question2
var math_1 = require("./math");
console.log((0, math_1.add1)(5, 3));
var u = { id: 1, name: "Yesser" };
console.log(u);
