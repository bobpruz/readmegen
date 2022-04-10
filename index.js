// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please write a description of your project!');
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "builtWith",
        message: "What did you build this project with? (Check all that apply)",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "jQuery",
          "Bootstrap",
          "Node",
        ],
      },
    {
        type: 'input',
        name: 'website',
        message: 'Enter the website link',
        validate: websiteInput => {
            if (websiteInput) {
                return true;
            } else {
                console.log('Please enter the website link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'maintainer',
        message: 'Enter the name of the Maintainer',
        validate: maintainersInput => {
            if (maintainersInput) {
                return true;
            } else {
                console.log('Please enter the name of the Maintainer!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address of the maintainer',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter email address of the maintainer!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter the screenshot filename',
        validate: screenshotInput => {
            if (screenshotInput) {
                return true;
            } else {
                console.log('Please enter the screenshot filename!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3',
                 'Mozilla Public License 2.0', 'Apache License 2.0',
                 'MIT License', 'Boost Software License 1.0', 'None']
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeText = generateMarkdown(data);

    fs.writeFile(`./dist/${fileName}`, readmeText, err => {
        if (err) throw err;
        console.log(`${fileName} is generated.`);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
