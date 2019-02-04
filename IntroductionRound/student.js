const Person = require("./person");

function Student(firstName, lastName, gender, hobbies, subject) {
    Person.call(this, firstName, lastName, gender, hobbies);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function () {
  console.log(`Hi. I'm ${this.name.first} and I study ${this.subject}.`);
};

module.exports = Student;