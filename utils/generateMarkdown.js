// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}
## Description
${data.Description}

## Table Of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [Testing](#Testing)
* [Questions](#Questions)
* [License](#License)
* [Contributors](#Contributors)
* [Author](#Author)
* [Tests](#Tests)

## Installation
${data.Installation}

## Usage
${data.Usage}
![Image/GIF](${usageMedia})

## Contributors
${data.Contributors}

## Tests
${data.Testing}

## Questions
${data.Questions}
If you have any additional questions, please send them to: ${data.Contact}

## License 
This project is licensed under the ${data.License}. 
![GitHub license](https://img.shields.io/badge/license-${data.License}-blue.svg)

  
`
};




module.exports = generateMarkdown;