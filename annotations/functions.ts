// const add = (a: number, b: number): number => {
//   return a + b;
// };

const add = (a: number, b: number) => {
  return a + b;
};


function devide(a: number, b: number): number {
  return a / b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message){
    throw new Error(message);
  }
};

/////////////////////

const todaysWeather = {
  data: new Date(),
  weather: 'sunny'
};

//destrukturyzacja
const logWeather = ({data, weather} : {data: DataTransfer, weather: string}): void => {
  console.log(data);
  console.log(weather);
};


