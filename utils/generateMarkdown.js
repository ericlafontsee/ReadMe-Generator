// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
## Description
${data.description}

## Table Of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [Testing](#Testing)
* [Questions](#Questions)
* [License](#License)



## Installation
${data.installation}

## Usage
${data.usage}


## Contributors
${data.contributors}

## Testing
${data.testing}

## Questions
GitHub: https://github.com/${data.questions}   
If you have any additional questions, please send them to: ${data.contact}

## License 
This project is licensed under the ${data.license}. 
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  
`
};

module.exports = generateMarkdown;