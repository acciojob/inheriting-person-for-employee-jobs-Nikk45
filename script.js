// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.greet = function () {
	console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
	Person.call(this);
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;
}

Employee.prototype.jobGreet = function () {
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}

Employee.prototype.__proto__ = Person.prototype;

// const employee = new Employee("Bob",30,"Manager");
// const person = new Person("alice",25);

// employee.jobGreet();
// person.greet();
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
