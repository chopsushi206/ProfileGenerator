'use strict';

const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name,id,email,office) {
    super(name,id,email);

    this.officeNumber = office;
    this.special = `Office Number: ${this.office}`;
  }

  getOfficeNumber() { return this.officeNumber; }
  getRole() { return 'Manager'; }
}

module.exports = Manager;