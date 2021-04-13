'use strict';

const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name,id,email,github) {
    super(name,id,email);

    this.github = github;
    this.special = `Github account: <a href="https://github.com/${this.github}" target="new">${this.github}</a>`;
  }

  getGithub() { return this.github; }
  getRole() { return 'Engineer'; }

  // need to extend draw method
}

module.exports = Engineer;