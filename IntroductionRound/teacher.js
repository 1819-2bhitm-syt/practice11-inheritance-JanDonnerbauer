const Person = require("./person");

function Teacher(firstName, lastName, gender, hobbies, subject) {
    /*this.name = {
        first: firstName,
        last: lastName
    };
    this.gender = gender;
    this.hobbies = hobbies;
    */
    Person.call(this, firstName, lastName, gender, hobbies);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.sayHello = function () {
    let m;
    if(this.gender == "male") {
        m = "Mr.";
    } else {
        m = "Mrs.";
    }
    console.log(`Hello. My name is ${m} ${this.name.last} and I teach ${this.subject}.`);
};

module.exports = Teacher;