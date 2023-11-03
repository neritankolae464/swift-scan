/* 
 * Filename: SophisticatedCode.js
 * Content: A complex and elaborate code showcasing various advanced JavaScript concepts and functionalities.
 * Author: CodeGenius
 */

// Create a class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Extend Person class to create a Student class
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying hard for grade ${this.grade}.`);
  }
}

// Helper function to generate a random number between a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate an array of 10 random Person and Student objects
const people = [];
for (let i = 0; i < 10; i++) {
  const randomAge = getRandomNumber(18, 50);
  const randomGrade = getRandomNumber(1, 12);
  
  if (i % 2 === 0) {
    const person = new Person(`Person ${i}`, randomAge);
    people.push(person);
  } else {
    const student = new Student(`Student ${i}`, randomAge, randomGrade);
    people.push(student);
  }
}

// Print the details of each person and have students study
people.forEach((person) => {
  person.greet();
  
  if (person instanceof Student) {
    person.study();
  }
});

// Demonstrate asynchronous code using Promises
function asyncAction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Asynchronous action completed successfully.');
    }, 2000);
  });
}

async function performAsyncAction() {
  console.log('Starting the asynchronous action...');
  try {
    const result = await asyncAction();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

performAsyncAction();
