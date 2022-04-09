// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badgeMessage = "";
  switch (license) {
    case "GNU AGPLv3":
      badgeMessage = "AGPL-3.0";
      break;
    case "GNU GPLv3":
      badgeMessage = "GPL-3.0";
      break;
    case "GNU LGPLv3":
      badgeMessage = "LGPL-3.0";
      break;
    case "Mozilla Public License 2.0":
      badgeMessage = "MPL-2.0";
      break;
    case "Apache License 2.0":
      badgeMessage = "Apache-2.0";
      break;
    case "MIT License":
      badgeMessage = "MIT";
      break;
    case "Boost Software License 1.0":
      badgeMessage = "BSL-1.0";
      break;
    case "None":
      return "";
  }
  return `![${badgeMessage}](https://img.shields.io/static/v1?label=license&message=${badgeMessage}&color=brightgreen "Badge")`;
}

// TODO: Create a function to generate description for README
function generateDescription(description) {
    return `${description};
}

// TODO: Create a function to generate builtwith for README
function generatebuiltWith(builtWith) {
  return `${builtWith}`;
}

// TODO: Create a function to generate website link for README
function generatewebsiteLink(websiteLink) {
  return `${websiteLink}`;
}

// TODO: Create a function to generate maintainers for README
function generatemaintainer(maintainer) {
  return `${maintainer}`;
}

// TODO: Create a function to generate screenshot for README
function generatescreenshot(screenshot) {
  return `${screenshot}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## License

  ${renderLicenseBadge(data.license)}

  ## Description

  ${generateDescription(data.description)}

  ## Built With

  ${generatebuiltWith(data.builtWith)}

  ## Website

  ${generatewebsiteLink(data.websiteLink)}

  ## Maintainers

  ${generatemaintainer(data.maintainer)}

  ## Screenshot

  ![Screenshot](${generatescreenshot(data.screenshot)})

  `;
}

module.exports = generateMarkdown;
