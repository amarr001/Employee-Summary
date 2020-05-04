var inquirer = require("inquirer");
var fs = require('fs');

 inquirer.prompt([
    {
    name: "username",
    message: "Enter your GitHub username"
    },
    {
    message: "Enter the title of your project: ",
    name: "title",
    },
    {
    message: "A little info about your project:",
    name: "description"
    },
    { 
    message: "Explain how to run the automated tests for this system",
    name: "testing"
    },
    {
    message: "How would you install this project?",
    name: "installation"
    },
    {
    type: 'checkbox',
    name: 'license',
    message: "Choose the project license:",
    choices: [
            "MIT", "ISC", "Other"
        ],
    initial: 1
    },
    {
    message:"Include step by step guide to use your project:",
    name: "usage"
    }
]).then(data => {
    let InfoStr = "";
    let contentTable = "# Table of contents";

    //Project info

    if(data.title){
    InfoStr += `# ${data.title} \n ${data.description} \n`
    }
    
    //Installation
    if(data.installation){
        InfoStr += `# Installation \n ${data.installation}  \n`
        contentTable += `\n * [Installation](<a href="#Installation">Installation</a>) \n`
    }

    //Usage
    if(data.usage){
        InfoStr += `# How to use \n ${data.usage} \n`
        contentTable += `\n * [How to use](#usage) \n` 
    }

    //Testing
    if(data.testing){
        InfoStr += `# Testing \n ${data.testing} \n`
        contentTable += `\n * [Testing](#Testing) \n` 
    }

    const fileSections = contentTable + InfoStr;
   
    fs.writeFile("README.md", fileSections , function(err) {

        if (err) {
          return console.log(err);
        }
    
        console.log("Success!");
    
      });
    });
    
    


