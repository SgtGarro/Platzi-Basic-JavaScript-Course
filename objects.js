var myObject = {
  brand: "Audi",
  model: "Standard",
  age: 2014,
  carDetail: function () {
    console.log(`Car ${this.model} ${this.age}`);
  },
};

// console.log(myObject);

// console.log(myObject.age);
myObject.carDetail();
