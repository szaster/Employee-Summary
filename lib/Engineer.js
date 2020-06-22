// TODO: Write code to define and export the Engineer class.  HINT: This
//class should inherit from Employee.
class Engineer {
  constructor(github) {
    this.github = github;
    this.role = "Engineer";
    this.github = "GitHubUser";
  }

  getRole() {
    return this.role;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
