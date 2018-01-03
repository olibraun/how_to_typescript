var myName: string = "Derek";
var myAge: number = 41;
var canVote: boolean = true;

// "Dynamischer Typ"
var anything: any = "dog";
anything = 2;

// Geht nicht:
// myAge = "a";

console.log(typeof(anything));

// Type Conversion
var strToNum: number = parseInt("5");

// Access HTML document
var numToStr: number = 5;
document.write("numToStr is a " + typeof(numToStr.toString()) + "<br />");

// Constants
const PI: number = 3.14159;

// More complex datatypes: interfaces
interface SuperHero {
  realName: String;
  superName: String;
}

var superman: SuperHero = {
  realName: "Clark Kent",
  superName: "Superman"
}

document.write(superman.realName + " is " + superman.superName);

var employees: string[] = ["Bob", "Sally", "Sam"];

// Geht nicht:
// employees.push(5);

var superheroes: SuperHero[] = [];
superheroes.push(
  {
    realName: 'Bruce Wayne',
    superName: 'Batman'
  }
);

