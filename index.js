const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee.js');
const manager = require('./lib/Manager.js');
const engineer = require('./lib/Engineer.js');
const intern = require('./lib/Intern.js');

// function to initialize app
function init() {
    questions()
        .then((data) => {
            console.log(data);
            writeToFile('./dist/index.html', generate(data))
        });
};

// initialize app
init();