const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];

//Type alias
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];