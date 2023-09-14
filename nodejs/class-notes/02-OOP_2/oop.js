"use strict";

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- *
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

// Class Declaration:
// class PascalNamedClassName { ... }

// Class Expression:
const PascalNamedClassName = class {

    undefinedProperty // Onle definition ('undefined')
    extraField = 'field-value'

    //? "new Class" ile obje oluştururken veri göndermek için "constructor" methodu kullanılır.
    constructor (parameter1, parameter2 = 'default-value') {
        this.parameter1 = parameter1
        this.parameter2 = parameter2
    }

    methodName1() {
        return this
    }

    methodName2() {
        return this.extraField
    }
}

//? INSTANCE: Bir classtan türetilen objedir.
const instance = new PascalNamedClassName('parameter-1-value', 'parameter-2-value')
console.log( instance )
console.log( instance.methodName2() )
instance.extraField = 'new-value'
console.log( instance.extraField )

/* ------------------------------------------------------- *

class Car {

    isRunning = false

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Motor Çalıştı')
        return this.isRunning
    }
}

const ford = new Car('Ford', 'Mustang', 1967)
console.log ( ford )
console.log ( ford.isRunning ) //> false
ford.runEngine() //> Motor Çalıştı
console.log ( ford.isRunning ) //> true

// const mercedes  = new Car('Mercedes', 'CLK200', 2000)
// console.log ( mercedes )

/* ------------------------------------------------------- *
//? INHERITANCE: MirasAlma. Başka bir Class'ın tüm özelliklerini devralma (parent-child ilişkisi kurma)
//? THIS: Child Class - SUPER: Parent Class

class Vehicle {

    vehicleIsActive = false

    constructor(vehicleType) {
        this.vehicleType = vehicleType
    }
}

class Car extends Vehicle {

    isRunning = false

    constructor(brand, model, year, vehicleType = 'Car') {
        //? super() parametresi en tepede olmalı (Önce parent constructor çalıştırılmalı)
        super(vehicleType) // run constructor of ParentClass
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Motor Çalıştı')
        return this.isRunning
    }
}

const ford = new Car('Ford', 'Mustang', 1967, 'SUV')
console.log( ford )

class Accessory extends Car {

    constructor(accessoryName, brand, model, year, vehicleType = 'Car') {
        super(brand, model, year, vehicleType)
        this.accessoryName = accessoryName
    }
}

const fordCliamate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967, 'SUV')
// const fordCliamate = new Accessory('Bosh Climate', ...Object.values(ford)) //? Sıralama Önemli.
console.log (fordCliamate)

/* ------------------------------------------------------- */
//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? Overload: Üst metodla aynı isimde ama farklı yapıda (parametre adet/tip) yeni method oluşturma. (aynı anda ikiside aktif) (JS desteklemez)

class Vehicle {
  vehicleIsActive = false;

  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }

  getDetails() {
    console.log("Vehicle getDetails çalıştı");
    return this.vehicleType;
  }
}

class Car extends Vehicle {
  isRunning = false;

  constructor(brand, model, year, vehicleType = "Car") {
    //? super() parametresi en tepede olmalı (Önce parent constructor çalıştırılmalı)
    super(vehicleType); // run constructor of ParentClass
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  runEngine() {
    this.isRunning = true;
    console.log("Motor Çalıştı");
    return this.isRunning;
  }

  //? Override: Üstteki method ile aynı isimde. Artık bu geçerli.
  getDetails() {
    console.log("Car getDetails çalıştı");
    // return this
    return {
      brand: this.brand,
      model: this.model,
      year: this.year,
      vehicleType: super.getDetails(), // Parent class metodları super ile çalıştırabilir.
      // vehicleIsActive: super.vehicleIsActive // super constructor bu veriyi this'e aktardı.
      vehicleIsActive: this.vehicleIsActive, // super constructor bu veriyi this'e aktardı.
    };
  }
}

const ford = new Car("Ford", "Mustang", 1967, "SUV");
console.log(ford);
console.log(ford.getDetails());

/* ------------------------------------------------------- */
