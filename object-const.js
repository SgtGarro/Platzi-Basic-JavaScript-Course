var myObject = {
  brand: "Audi",
  model: "Standard",
  age: 2014,
  carDetail: function () {
    console.log(`Car ${this.model} ${this.age}`);
  },
};

function car(brand, model, age) {
  this.brand = brand;
  this.model = model;
  this.age = age;
}

var newcar = new car("Audi", "Standard", 2014);
console.log(newcar);
