const inquirer = require('inquirer');
const generateHTML = require('./lib/generateHTML');
const writeFile = require('./lib/writeFile');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const questions = require('./lib/questions');

const test = false;

// use inquire to ask employee questions
const askEmpl = () => {
  if (test) console.log('entered: askEmpl', questions.employee);
  return inquirer.prompt(questions.employee);
};

// use inquire to ask intern specific questions
const askInt = () => {
  if (test) console.log('entered: askInt', questions.intern);
  return inquirer.prompt(questions.intern);
};

// use inquire to ask engineer specific questions
const askEng = () => {
  if (test) console.log('entered: askEng', questions.engineer);
  return inquirer.prompt(questions.engineer);
};

// use inquire to ask manager specific questions
const askMan = () => {
  if (test) console.log('entered: askMan', questions.manager);
  return inquirer.prompt(questions.manager);
};

// use inquire to return to prompt to add another team member
const askAgain = () => {
  if (test) console.log('entered: askAgain', questions.again);
  return inquirer.prompt(questions.again);
};

async function init() {
  if (test) console.log('started init:');
  // array to store employees
  const engList = [];
  const intList = [];
  const manList = [];

  const teamList = [manList,engList,intList];
  let employee;
  try {
    let again = true;
    let id = 0;

    while (again) {
      // build employee information (i would put this in the Employee object)
      const ansEmpl = await askEmpl();
      const name = `${ansEmpl.name}`;
      const email = `${ansEmpl.email}`;

      // increment id for next employee
      id += 1;

      switch (ansEmpl.role) {
        case 'Intern':
          ansRoleEmpl = await askInt();
          employee = new Intern (name,id,email,ansRoleEmpl.school);
          intList.push(employee);
          break;
        case 'Engineer':
          ansRoleEmpl = await askEng();
          employee = new Engineer (name,id,email,ansRoleEmpl.github);
          engList.push(employee);
          break;
        case 'Manager':
          ansRoleEmpl = await askMan();
          employee = new Manager (name,id,email,ansRoleEmpl.office);
          manList.push(employee);
          break;
      }

      if (test) console.log(employee);
      console.log(`Saved new employee ${employee.getName()} to team!`);

      // can i combine this into one statement
      const askResult = await askAgain();
      again = askResult.again;
    }

    // sort lists 
    manList.sort(nameSort);
    engList.sort(nameSort);
    intList.sort(nameSort);

    const file = generateHTML(teamList);

    // write to file

    const filename = './dist/index.html';
    writeFile(filename,file);

  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};

function nameSort(a, b) {
  // Use toUpperCase() to ignore character casing
  const nameA = a.getName().toUpperCase();
  const nameB = b.getName().toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
};

init();