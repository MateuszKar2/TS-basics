// const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];


// const carsByMaake: string[][] = [
//   ['f-150'],
//   ['corolla'],
//   ['camaro']
// ];

const carsByMaake = [
  ['f-150'],
  ['corolla'],
  ['camaro']
];


//1)Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

//2)Prevent incompatible vaules

// carMakers.push(100);--błąd

//3) Help with ,,map"

carMakers.map(
  (car: string): string => {
    return car.toLocaleUpperCase();
  }
);

//Flexible types

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100); -- błąd