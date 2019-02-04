const Person = require("./person");
const Teacher = require("./teacher");
const Student = require("./student");

const p = new Person("Richard", "Roe", "male", ["reading"]);
p.sayHello();
p.tellHobbies();
console.log("");

const t = new Teacher("Jane", "Doe", "female", [], "programming");
t.sayHello();
t.tellHobbies();
console.log("");

const s = new Student("John", "Smith", "male", ["cooking", "swimming", "travelling"], "history");
s.sayHello();
s.tellHobbies();