

let apples: number = 5;

apples = 10;

let speed: string = 'speed';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

//built in objects

let now: Date = new Date();

//Array
let colors: string[] = ['red', 'yellow', 'blue'];

let myNumbers: number[] = [1,2,3];

let treths: boolean[] = [true, true, false];

//Classes

class Car {

}
let car: Car = new Car();

//Object literal

let point: {x: number, y: number} = {
  x: 10,
  y: 20
};

//Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
};

//When to use annotations
// 1)Function that returns the 'any' type

const json = '{"x": 10; "y":20}';
const coordinates: {x: number, y:number} = JSON.parse(json);
console.log(coordinates);

//2) When we declare a variable on one line
//and initalizate it later

let words = ['red', 'blue', 'green'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++){
  if (words[i] === 'green'){
    foundWord = true;
  }
}

//3) Variable whose type cannot be inferred corretly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
  if (numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}