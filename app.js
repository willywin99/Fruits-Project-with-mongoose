// jshint esversion: 6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so yummy!"
});

fruit.save();



const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

// person.save();


const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour for me."
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Weird texture"
});

// Fruit.insertMany([kiwi, orange, banana])
//   .then(
//     function() {
//       console.log("Successfully saved all the fruits to FruitsDB");
//     }
//   )
//   .catch(function (err) {
//     console.log(err);
//   });

Fruit.find()
  .then(fruits => {

    mongoose.connection.close();

    fruits.forEach(fruit => {
      console.log(fruit.name);
    });
  }).catch(err => {
    console.log(err);
  })
