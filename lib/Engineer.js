// TODO: Write code to define and export the Engineer class.  HINT: This

const Employee = require("./Employee");

//class should inherit from Employee.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
