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
        message: "Please enter any Contribution Guidelines",
        name: "Contributors"
    },
    {
        message: "Please enter any Test Instructions.",
        name: "Testing"
    }

];
// const { Title } = await prompt(questions);
// console.log(Title);
// const answersData = generateMarkdown(answers);

// writeToFile("READ.md", answersData);
// };
// ).then(function(data) {
//     console.log(data);
//     const title = data.Title;
//     const description = data.Description;
//     const installation = data.installation;
//     const license = data.License;
//     const usage = data.Usage;
//     const contributors = data.Contributors;
//     const testing = data.Testing;
//     const filename = title.toLowerCase().split(' ').join('') + ".json";

// var result = (`
//         # ${title} 

//         ${description}
//         * [Installation](#Installation)
//         * [License](#License)
//         * [Contributors](#Contributors)
//         * [Author](#Author)
//         * [Tests](#Tests)
//         ## Installation
//         ${installation}
//         ## License 
//         This project is licensed under the ${license}.
//         ## Contributors
//         ${contributors}

//         ## Tests
//         ${testing}

//                     `);


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, err => {
        if (err) throw err;
        console.log("Works");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions, answers => {
        console.log(answers);
        const answersData = generateMarkdown(answers);
        writeToFile("README.md", answersData);
    });
}

// function call to initialize program
init();