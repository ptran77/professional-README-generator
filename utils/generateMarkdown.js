// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license.length == 0) {
    return '';
  }
  let licBadges = '';
  license.forEach(lic => {
    if (lic === 'Apache License 2.0') licBadges += '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) ';
    else if (lic === 'GNU General Public License v3.0') licBadges += '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) ';
    else if (lic === 'MIT License') licBadges += '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ';
    else if (lic === 'BSD 2-Clause "Simplified" License') licBadges += '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause) ';
    else if (lic === 'BSD 3-Clause "New" or "Revised" License') licBadges += '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) ';
    else if (lic === 'Boost Software License 1.0') licBadges += '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) ';
    else if (lic === 'Creative Commons Zero v1.0 Universal') licBadges += '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/) ';
    else if (lic === 'Eclipse Public License 2.0') licBadges += '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0) ';
    else if (lic === 'GNU Affero General Public License v3.0') licBadges += '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0) ';
    else if (lic === 'GNU General Public License v2.0') licBadges += '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) ';
    else if (lic === 'GNU Lesser General Public License v2.1') licBadges += '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) ';
    else if (lic === 'Mozilla Public License 2.0') licBadges += '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) ';
    else licBadges += '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) ';
  })
  return licBadges;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }
  if (license === 'Apache License 2.0') return 'https://opensource.org/licenses/Apache-2.0';
  else if (license === 'GNU General Public License v3.0') return 'https://www.gnu.org/licenses/gpl-3.0';
  else if (license === 'MIT License') return 'https://opensource.org/licenses/MIT';
  else if (license === 'BSD 2-Clause "Simplified" License') return 'https://opensource.org/licenses/BSD-2-Clause';
  else if (license === 'BSD 3-Clause "New" or "Revised" License') return 'https://opensource.org/licenses/BSD-3-Clause';
  else if (license === 'Boost Software License 1.0') return 'https://www.boost.org/LICENSE_1_0.txt';
  else if (license === 'Creative Commons Zero v1.0 Universal') return 'http://creativecommons.org/publicdomain/zero/1.0/';
  else if (license === 'Eclipse Public License 2.0') return 'https://opensource.org/licenses/EPL-1.0';
  else if (license === 'GNU Affero General Public License v3.0') return 'https://www.gnu.org/licenses/agpl-3.0';
  else if (license === 'GNU General Public License v2.0') return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
  else if (license === 'GNU Lesser General Public License v2.1') return 'https://www.gnu.org/licenses/lgpl-3.0';
  else if (license === 'Mozilla Public License 2.0') return 'https://opensource.org/licenses/MPL-2.0';
  else return 'http://unlicense.org/';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license.length == 0) {
    return '';
  }

  return `## License

  ${license.map((lic) => {
    return `[${lic}](${renderLicenseLink(lic)})<br>`;
  }).join('')}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#test)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribution

  ${data.contribution}

  ## Test 
  
  ${data.test}

  ## Questions

  Github: [${data.github}](https://github.com/${data.github})<br>
  For any questions, contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
