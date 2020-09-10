// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}
${data.Description}
* [Installation](#Installation)
* [License](#License)
* [Contributors](#Contributors)
* [Author](#Author)
* [Tests](#Tests)
## Installation
${data.Installation}
## License 

This project is licensed under the ${data.License}. 
![GitHub license](https://img.shields.io/badge/license-${data.License}-blue.svg)
## Contributors
${data.Contributors}
  
## Tests
${data.Testing}
  
`
};




module.exports = generateMarkdown;