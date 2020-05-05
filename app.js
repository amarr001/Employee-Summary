const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

const Rostering = function (){
    inquirer
    .prompt([
      {
        type: "input",
        message: "Type name",
        name: "name"
      },
      {
        type: "input",
        message: "Type id",
        name: "id"
      },
      {
        type: "input",
        message: "Type email",
        name: "email"
      },
      {
        type: "input",
        message: "Type your office number",
        name: "officenumber"
      },
      {
        type: "list",
        message: "Which employee are you adding next?",
        name: "roleEmployee",
        choices: [
          "Engineer",
          "Intern",
          {
            name: "I am not adding more employees",
            value: false
  
          }
      ]
    }
    ]).then(data => {
    const manager = new Manager (data.name, data.id, data.email, data.officenumber);
    employees.push(manager);
    if(data.roleEmployee === "Engineer"){
      promptEng();
    }else if(data.roleEmployee === "Intern"){
      promptIntern();
    }
  });

const promptEng = function(){
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is their name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is their id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is their email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is their GitHub?",
        name: "github"
      }
    ]).then(data => {
      const eng = new Engineer(data.name, data.id, data.email, data.github);
      employees.push(eng);
    })
}
const promptIntern = function(){
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is their name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is their id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is their email address?",
        name: "email"
      },
      {
        type: "input",
        message: "Which school do they come from?",
        name: "school"
      }
    ]).then(data => {
      const int = new Intern(data.name, data.id, data.email, data.school);
      employees.push(int);
    })
}
}
Rostering();




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
