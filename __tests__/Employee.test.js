const Employee = require('../lib/Employee')

describe('Employee class test', () => {


    // can instantiated
    it('can be instantiated', () => {

        const employee = new Employee("Geo", 123, "geo@geo.com")
        expect(employee).toBeInstanceOf(Employee);

    })

    // take in the name argumentument, and set as property
    it('can set a name property in the constructor', () => {
        const name = 'Geo';
        const employee = new Employee(name, 123, "geo@geo.com");
        expect(employee.name).toBe(name);
    })

    // take in the id argument, and set as property
    it("can set a id property in the constructor", () => {
        const id = "123";
        const employee = new Employee('Geo', id, "geo@geo.com");
        expect(employee.id).toBe(id);
    });
    // take in the email argument, and set as property
    it("can set a email property in the constructor", () => {
        const email = "geo@geo.com";
        const employee = new Employee("Geo", 123, email);
        expect(employee.email).toBe(email);
    });

    it('can get the employee name by calling getName()', () => {
        // source of truth
        const name = 'Geo';

        // replicate
        const employee = new Employee(name, 123, 'geo@geo.com');

        const result = employee.getName();

        expect(result).toBe(name);
    });


    // test getEmail()
    it("can get the employee email by calling getEmail()", () => {
        // source of truth
        const truth = "Geo@email.com";

        // replicate
        const employee = new Employee("Geo", 123, truth);

        const result = employee.getEmail();

        expect(result).toBe(truth);
    });

    // test getId()
    it("can get the employee id by calling getId()", () => {
        // source of truth
        const truth = 123;

        // replicate
        const employee = new Employee("Geo", truth, 'Geo@email.com');

        const result = employee.getId();

        expect(result).toBe(truth);
    });

    // test getRole()
    it("can get the employee role by calling getRole()", () => {
        // source of truth
        const truth = "Employee";

        // replicate
        const employee = new Employee("Geo", 123, 'Geo@email.com');

        const result = employee.getRole();

        expect(result).toBe(truth);
    });


})