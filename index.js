const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee.js');
const manager = require('./lib/Manager.js');
const engineer = require('./lib/Engineer.js');
const intern = require('./lib/Intern.js');

const startApp = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'Would you like to create profiles for your team?',
            choices: ['Yes', 'No']
        },
    ]);
};

// function to initialize app
function init() {
    startApp()
        .then((data) => {
            console.log(data);
        });
};

// initialize app
init();