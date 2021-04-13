'use strict';

class Employee {
  constructor(name,id,email) {
    this.name = name;
    this.email =  email;
    this.id = id;
    this.special = 'special';
  }

  getName() { return this.name; }
  getId()   { return this.id; }
  getEmail()   { return this.email; }
  getRole()   { return 'Employee'; }
  getSpecial()   { return this.special; }
}

module.exports = Employee;