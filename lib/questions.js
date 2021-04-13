questions = {
  employee: [
    {
      type: 'input',
      name: 'name',
      message: 'Please input the employee\'s name:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please input the employee\'s email:'
    },
    {
      type: 'list',
      name: 'role',
      message: 'Please choose the employee\'s role:',
      choices: ['Engineer', 'Intern', 'Manager']
    }
  ],

  manager: [
    {
      type: 'input',
      name: 'office',
      message: 'Please input the office number:'
    }
  ],

  intern: [
    {
      type: 'input',
      name: 'school',
      message: 'Please input the employee\'s school:'
    }
  ],

  engineer: [
    {
      type: 'input',
      name: 'github',
      message: 'Please input the employee\'s github username:'
    }
  ],

  again: [
    {
      type: 'confirm',
      name: 'again',
      message: 'Would you like to add another employee?',
      default: true
    } 
  ]
};

module.exports = questions;
