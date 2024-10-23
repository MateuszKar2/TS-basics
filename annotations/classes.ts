//1)
class Vehicle {
  color: string;
  // color: string = 'red';

  constructor(color: string) {
    this.color = color
  }

//Zdefiniowany za każdym razem gdy zostanie utworzona nowa instancja klasy
//Można zdefiniować właściowość w linni 3, albo zainicjalizować w construktorze (linja 5)

  
  protected honk(): void {
    console.log('beep');
  };
}



//2)Szybsza opcja

// class Vehicle {
//   constructor(public color: string) {}
//     protected honk(): void {
//       console.log('beep');
//     };
// }



//3)Zakodowana aby działała pierwsza część kodu

//Rozszerzam klasę
//(if)Nie posiada funkcji konstruktora
//W związku z tym automatycznie zostanie wykonany konstruktor funkcji nadrzędnej(rodzicu)
//(if else)Będzie posiadać funkcję konstruktora
//gdy wywołujemy funkcję konstruktora klasy podrzędnej musimy wywołać metodę super()-odniesienie do konstruktora funkcji nadrzędnej

class Car extends Vehicle {

  constructor(public wheels: number, color: string) {
      super(color)
  }

  private drive(): void {
    console.log('vroom');
  };

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red'); //intancja klasy
car.startDrivingProcess;
