// TODO: Write code to define and export the Intern class.

const Employee = require("./Employee");

//HINT: This class should inherit from Employee.
class Intern extends Employee {
  constructor(name, id, emailAddress, school) {
    super(name, id, emailAddress);
    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
