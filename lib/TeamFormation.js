// import modules

const generateHTML = require('../src/generate-html');
const { initialisePrompt } = require('../src/prompt')
const { copyCSS, createHTML } = require('../src/create-html-copy-css');

class TeamFormation {
    constructor() {}
    profileGenerator() {
        return initialisePrompt()
            .then((employees) => {
                return generateHTML(employees);
            })
            .then((pageHTML) => {
                return createHTML(pageHTML);
            })
            .then(
                () => {
                    return copyCSS();
                })
            .catch(
                (err) => {
                    console.log(err);
                })
    }


}

module.exports = TeamFormation;