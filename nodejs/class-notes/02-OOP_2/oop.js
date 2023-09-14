"use strict";

/*-----------------------------------------------------------------------------

OOP & classes
-------------------------------------------------------------------------------
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

// Class Declaration:

// class PascalNamedClassName {

// }

const PascalNamedClassName = class {
  undefinedProperty; //? Onle definition ("undefined")
  extraField = "field-value";

  methodName1() {
    return this;
  }
  methodName2() {
    return this.extraField;
  }
};

//? "new Class" ile obje olustururken veri gondermek icin "constructor" methodu kullanilir.

constructor (parameter1, parameter2) {
    this.parameter1 = parameter1
    this.parameter2 = parameter2
}

//? INSTANCE: Bir classtan turetilen objedir.

const instance = new PascalNamedClassName("parameter-1-value", "parameter-2-value");
console.log(instance);
console.log(instance.methodName2);
-------------------------------------------------------------------------------*/

// class Car {
//   isRunning = false;
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   runEngine() {
//     this.isRunning = true;
//     console.log("Motor Calisti");
//     return this.isRunning;
//   }
// }

// const ford = new Car("Ford", "Mustang", 1967);

// console.log(ford);
// console.log(ford.isRunning);
// ford.runEngine();
// console.log(ford.isRunning);

// const mercedes = new Car("Mercedes", "CLK200", 2000);

// console.log(mercedes);
