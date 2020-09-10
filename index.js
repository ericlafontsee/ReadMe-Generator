var inquirer = require("inquirer");
var fs = require('fs');

inquirer
    .prompt([{
            type: "input",
            message: "What is your project title?",
            name: "Title"
        },
        {
            type: "input",
            message: "Provide a description",
            name: "Description"
        },
        {
            type: "input",
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
            type: "input",
            message: "Please enter any Usage Information",
            name: "Usage"
        },
        {
            type: "input",
            message: "Please enter any Contribution Guidelines",
            name: "Contributors"
        },
        {
            type: "input",
            message: "Please enter any Test Instructions.",
            name: "Testing"
        }

    ]).then(function(data) {
        console.log(data);
        const title = data.Title;
        const description = data.Description;
        const installation = data.installation;
        const license = data.License;
        const usage = data.Usage;
        const contributors = data.Contributors;
        const testing = data.Testing;
        const filename = title.toLowerCase().split(' ').join('') + ".json";

        var result = (`
        # ${title} 
        
        ${description}
        * [Installation](#Installation)
        * [License](#License)
        * [Contributors](#Contributors)
        * [Author](#Author)
        * [Tests](#Tests)
        ## Installation
        ${installation}
        ## License 
        This project is licensed under the ${license}.
        ## Contributors
        ${contributors}
        
        ## Tests
        ${testing}
       
                    `);
        writeToFile(filename, data);
    });

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, result, function(err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();