class Animal {
  public favFood: string;

  static numOfAnimals: number = 0;

  constructor(private name: string, private owner: string) {
    Animal.numOfAnimals++;
  }

  ownerInfo() {
    console.log(
      this.name +
      " is owned by " +
      this.owner
    );
  }

  static howManyAnimals(): number {
    return Animal.numOfAnimals;
  }

  private _weight: number;

  get weight(): number {
    return this._weight;
  }

  set weight(weight: number) {
    this._weight = weight;
  }
}

var spot = new Animal("Spot", "Doug");

console.log(spot.ownerInfo());

spot.weight = 100;
console.log(spot.weight);