// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  // Project title
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('You need to enter a project title!');
        return false;
      }
    }
  },
  // Description
  {
    type: 'input',
    name: 'description',
    message: 'Provide a  description about the project. (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a description.');
        return false;
      }
    }
  },
  // Installations Instructions
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? (Required)',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('You need to enter installation instructions.');
        return false;
      }
    }
  },
  // Usage Information 
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on how to use this project. (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log("You need to provide usage information.");
        return false;
      }
    }
  },
  // Contribution Guidelines
  {
    type: 'input',
    name: 'contribution',
    message: "Provide information and guidelines about contribution. (Required)",
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
        console.log ("You need to provide contribution guidelines");
        return false;
      }
    }
  },
  // Test Instructions
  {
    type: 'input',
    name: 'test',
    message: 'Provide testing instructions if applicable',
    default: 'No testing was done'
  },
  // License
  {
    type: 'checkbox',
    name: 'license',
    choices: ['Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License',
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      'Boost Software License 1.0',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0',
      'GNU Affero General Public License v3.0',
      'GNU General Public License v2.0',
      'GNU Lesser General Public License v2.1',
      'Mozilla Public License 2.0',
      'The Unilicense']
  },
  // Github Username
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  // Email Address
  {
    type: 'input',
    name: 'email',
    message: 'Would you like to include your email?'
  }    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if(err) throw err;
    console.log('Success! Readme created.')
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(userInput => {
      return generateMarkdown(userInput);
    })
    .then(markdown => {
      writeToFile("sampleREADME.md", markdown);
    });
}

// Function call to initialize app
init();
