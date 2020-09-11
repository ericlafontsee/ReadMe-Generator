const inquirer = require("inquirer");
const fs = require('fs');
var generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [

    {
        message: "What is your project title?",
        name: "Title"
    },
    {
        message: "Provide a description",
        name: "Description"
    },
    {
        message: "What are the installation instructions?",
        name: "Installation"
    },
    {
        type: "list",
        message: "What type of license did you use?",
        name: "License",
        choices: [
            "MIT",
            "GPL",
            "Apache 2.0",
            "BSD"
        ]
    },
    {
        message: "Please enter any Usage Information",
        name: "Usage"
    },
    {
        message: "Please enter any Usage images/gif urls",
        name: "usageMedia"
    },
    {
        message: "Please enter any Contribution Guidelines",
        name: "Contributors"
    },
    {
        message: "Please enter any Test Instructions.",
        name: "Testing"
    },
    {
        message: "Please enter your GitHub username.",
        name: "Questions"
    },
    {
        message: "Please enter your email.",
        name: "Contact"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) console.log(err);
        console.log("Works");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        const answersData = generateMarkdown(answers);
        writeToFile("ReadMeTest.md", answersData);
    });
}

// function call to initialize program
init();