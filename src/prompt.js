const inquirer = require("inquirer");

const Manager = require('../lib/Managers');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

let employees = [];


// Questions are asked to all roles
const sharedPrompts = (employeeRole) => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: `Enter your ${employeeRole}'s name:`,
            validate: (name) => {
                if (name) {
                    return true;
                } else {
                    console.log(`Please enter your ${employeeRole}'s name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter your ${employeeRole}'s id:`,
            validate: (id) => {
                if (id) {
                    return true;
                } else {
                    console.log(`Please enter your ${employeeRole}'s id!`);
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'email',
            message: `Enter your ${employeeRole}'s email:`,
            validate: (email) => {
                if (email) {
                    return true;
                } else {
                    console.log(`Please enter your ${employeeRole}'s email!`);
                    return false;
                }
            }
        }

    ])
}

//Questions are asked if adding manager
const managerPrompt = () => {
    return inquirer.prompt({
        type: 'input',
        name: 'officeNumber',
        message: `Enter your Manager's office number:`,
        validate: (officeNumber) => {
            if (officeNumber) {
                return true;
            } else {
                console.log(`Please enter your Manager's office number`);
                return false
            }
        }

    })
}

//Questions are asked if adding engineer

const engineerPrompt = () => {
    return inquirer.prompt({
        type: 'input',
        name: 'github',
        message: `Enter your Engineer's Github username:`,
        validate: (github) => {
            if (github) {
                return true;
            } else {
                console.log(`Please enter your Engineer's Github username`);
                return false
            }
        }

    })
}

//Questions are asked if adding intern

const internPrompt = () => {
    return inquirer.prompt({
        type: 'input',
        name: 'school',
        message: `Enter your Intern's school`,
        validate: (school) => {
            if (school) {
                return true;
            } else {
                console.log(`Please enter your Intern's school`);
                return false
            }
        }

    })
}

//Questions to initialise

const initialisePrompt = () => {
    return inquirer.prompt({
            type: 'list',
            name: 'employeeRole',
            message: 'Choose employee type',
            choices: ['Manager', 'Engineer', 'Intern'],
        })
        .then(({ employeeRole }) => {
            return sharedPrompts(employeeRole)
                .then(
                    ({ name, id, email }) => {
                        // switch statement to check which role were select and promt corrisponding question
                        switch (employeeRole) {
                            case 'Manager':
                                return managerPrompt().
                                then(
                                    ({ officeNumber }) => {
                                        const manager = new Manager(name, id, email, officeNumber);
                                        manager.role = employeeRole;
                                        employees.push(manager);
                                    });
                            case 'Engineer':
                                return engineerPrompt().
                                then(
                                    ({ github }) => {
                                        const engineer = new Engineer(name, id, email, github);
                                        engineer.role = employeeRole;
                                        employees.push(engineer);
                                    });
                            case 'Intern':
                                return internPrompt().
                                then(
                                    ({ school }) => {
                                        const intern = new Intern(name, id, email, school);
                                        intern.role = employeeRole;
                                        employees.push(intern);
                                    });

                        }
                    })
                .then(() => {
                    return inquirer.prompt({
                        type: 'confirm',
                        name: 'isContinue',
                        message: 'Would you like to add more employees?',
                        default: true,
                    });
                })
                .then(
                    ({ isContinue }) => {
                        if (isContinue) {
                            return initialisePrompt();
                        }
                    })
                .then(
                    () => {
                        return employees;
                    }
                )
        })

}
module.exports = { initialisePrompt };