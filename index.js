const inquirer = require("inquirer");
const fs = require('fs');
var generateMarkdown = require("./utils/generateMarkdown.js");
const { url } = require("inspector");

const questions = [

    {
        message: "What is your project title?",
        name: "title"
    },
    {
        message: "Provide a description",
        name: "description"
    },
    {
        message: "What are the installation instructions?",
        name: "installation"
    },
    {
        type: "list",
        message: "What type of license did you use?",
        name: "license",
        choices: [
            "MIT",
            "GPL",
            "Apache 2.0",
            "BSD"
        ]
    },
    {
        message: "Please enter any Usage Information",
        name: "usage"
    },
    {
        message: "Please enter any Contribution Guidelines",
        name: "contributors"
    },
    {
        message: "Please enter any Test Instructions.",
        name: "testing"
    },
    {
        message: "Please enter your GitHub username.",
        name: "questions"
    },
    {
        type: "url",
        message: "Please enter your email.",
        name: "contact"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) console.log(err);
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        const answersData = generateMarkdown(answers);
        writeToFile("generateReadMe/README.md", answersData);
    });
}

// function call to initialize program
init();