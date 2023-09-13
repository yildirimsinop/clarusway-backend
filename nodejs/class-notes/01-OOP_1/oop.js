// "use strict";

// const exampleObject = {
//   propertyName: "value", // field, attribute
//   methodName: function () {
//     return "This is Method";
//   },
// };

// console.log(exampleObject.propertyName);
// console.log(exampleObject.methodName);

const Car = {
  brand: "Ford",
  model: "Mustang",
  year: 1967,
  isAutoGear: true,
  colors: ["white", "red"],
  details: {
    color1: "red",
    color2: "white",
    engineSize: 4900,
  },
  startEngine: function () {
    return "Motor çalisti";
  },
};

// console.log(Car.brand);
// console.log(Car.colors);
// console.log(Car.colors[0]);
// console.log(Car.details);
// console.log(Car.details.engineSize);
// console.log(Car.startEngine());

console.log(Car.details["engineSize"]);
console.log(Car["details"]["en"]);
