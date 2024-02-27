export {};

// EXAMPLE 1 - Get the Type of a Function's Arguments in TypeScript

function sum(a: number, b: string): string {
  return a + b;
}

// 👇️ type SumParams = [a: number, b: string]
type SumParams = Parameters<typeof sum>;

// 👇️ type FirstParam = number
type FirstParam = SumParams[0];

// 👇️ type SecondParam = string
type SecondParam = SumParams[1];

// ---------------------------------------------------

// // EXAMPLE 2 - Using Parameters type for 2 functions that take same object

// type Person = {
//   name: string;
//   age: number;
//   country: string;
// };

// function getObj(obj: Person): Person {
//   return obj;
// }

// function getObj2(obj: Parameters<typeof getObj>[0]) {
//   return obj;
// }

// console.log(getObj2({ name: 'Bobby Hadz', age: 30, country: 'Chile' }));

// ---------------------------------------------------

// // EXAMPLE 3 - Get the Parameters type of a Class Constructor in TS

// class Person {
//   constructor(
//     public name: string,
//     public age: number,
//     public country: string,
//   ) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
// }

// // 👇️ type PersonParamsType = [name: string, age: number, country: string]
// type PersonParamsType = ConstructorParameters<typeof Person>;

// // 👇️ type First = string
// type First = PersonParamsType[0];

// // 👇️ type Second = number
// type Second = PersonParamsType[1];

// ---------------------------------------------------

// // EXAMPLE 4 - Access the type of a specific parameter

// class Person {
//   constructor(
//     public name: string,
//     public age: number,
//     public country: string,
//   ) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
// }

// // 👇️ type PersonParamsType = [name: string, age: number, country: string]
// type PersonParamsType = ConstructorParameters<typeof Person>;

// // 👇️ type First = string
// type First = PersonParamsType[0];

// // 👇️ type Second = number
// type Second = PersonParamsType[1];

// // 👇️ type Third = string
// type Third = PersonParamsType[2];
