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

// const fruit = new Fruit({
//   rating: 10,
//   review: "Peaches are so yummy!"
// });

// fruit.save();



const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review: "Great fruit."
// })

// pineapple.save();

// const person = new Person({
//   name: "John",
//   age: 37
// });
// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

// person.save();

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "Decent fruit."
})

mango.save();
// Update Person
Person.updateOne({name: "John"}, {favouriteFruit: mango})
  .then(res => {
    console.log("Succesfully updated the document");
    console.log(res);
    mongoose.connection.close();
  }).catch(err => {
    console.log(err);
  })

// // Delete Many
// Person.deleteMany({name: "John", age: 37})
//   .then(res => {
//     console.log("Successfully deleted the document");
//     // mongoose.connection.close();
//     console.log(res);
//   }).catch(err => {
//     console.log(err);
//   }).finally(() => {
//     // mongoose.connection.close();
//   })


// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit!"
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Too sour for me."
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 3,
//   review: "Weird texture"
// });

// mongoose.connection.close();

// Insert/Create
// Fruit.insertMany([kiwi, orange, banana])
//   .then(
//     function() {
//       console.log("Successfully saved all the fruits to FruitsDB");
//     }
//   )
//   .catch(function (err) {
//     console.log(err);
//   });

// Find/Read All
// Fruit.find()
//   .then(fruits => {

//     mongoose.connection.close();

//     fruits.forEach(fruit => {
//       console.log(fruit.name);
//     });
//   }).catch(err => {
//     console.log(err);
//   })

// Update
// Fruit.updateOne({_id: "64234b8446c3f675ed900619"}, {name: "Peach"})
//   .then(res => {
//     mongoose.connection.close();
//     console.log(res);
//   }).catch(err => {
//     console.log(err);
//   })

// Delete
// Fruit.deleteOne({name: "Peach"})
//   .then(res => {
//     mongoose.connection.close();
//     console.log(res);
//   }).catch(err => {
//     console.log(err);
//   })
