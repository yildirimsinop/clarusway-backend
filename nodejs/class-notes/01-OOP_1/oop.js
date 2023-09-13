"use strict";

/* -------------------------------------------------------
    OBJECTS
------------------------------------------------------- */

// const exampleObject = {

//     propertyName: 'value', // field, attribute
//     methodName: function () {
//         return 'This is Method'
//     }
// }

// console.log( exampleObject.propertyName )
// console.log( exampleObject.methodName() )

/* ------------------------------------------------------- *

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 4900
    },
    startEngine: function () {
        return 'Motor çalıştı'
    }
}

// console.log( Car.brand )
// console.log( Car.colors )
// console.log( Car.colors[0] )
// console.log( Car.details )
// console.log( Car.details.engineSize )
// console.log( Car.startEngine() )

console.log( Car['brand'] )
console.log( Car.details['engineSize'] )
console.log( Car['details']['engineSize'] )
console.log( Car['startEngine']() )

/* ------------------------------------------------------- *
//? "THIS" KEYWORD

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1: 'red',
        color2: 'white',
        engineSize: 4900
    },
    startEngine: function () {
        return 'Motor çalıştı'
    },
    getDetails: function () {

        // return this
        // return this.brand + ' ' + this.model + ' ' + this.year
        return this.startEngine()

    },
    arrowFunc: () => {
    //? Arrow functions is globalScope. (Not working this keyword in here)
        // return this
        return this.brand
    }
}

// console.log( Car.getDetails() )
console.log( Car.arrowFunc() )

/* ------------------------------------------------------- */
//? ARRAY DESTRUCTURING

const testArray = ["value0", "value1", "value2", "value3"];

// const var0 = testArray[0]
// const var1 = testArray[1]

//? Sıralama Önemli!
// const [ firstItem, secondItem ] = testArray
// console.log(firstItem, secondItem)

//? SpreadOperator (En sonda olmak zorunda)
// let [ first, second, third, ...others ] = testArray
// console.log(first, second, others)

// const [ ...arr ] = testArray
// console.log(arr)

/* ------------------------------------------------------- */
