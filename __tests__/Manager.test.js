const Manager = require('../lib/Manager')

describe('Manager class test', () => {


    // can instantiated
    it('can be instantiated', () => {
        const manager = new Manager("Geo", 123, "geo@geo.com", "0402xxxxxx")
        expect(manager).toBeInstanceOf(Manager);
    })

    // take in the name argumentument, and set as property
    it('can set a name property in the constructor', () => {
        const name = 'Geo';
        const manager = new Manager(name, 123, "geo@geo.com", "0402xxxxxx");
        expect(manager.name).toBe(name);
    })

    // take in the id argument, and set as property
    it("can set a id property in the constructor", () => {
        const id = 123;
        const manager = new Manager('Geo', id, "geo@geo.com", "0402xxxxxx");
        expect(manager.id).toBe(id);
    });

    // take in the email argument, and set as property
    it("can set a email property in the constructor", () => {
        const email = "geo@geo.com";
        const manager = new Manager("Geo", 123, email, "0402xxxxxx");
        expect(manager.email).toBe(email);
    });

    // take in the school argument, and set as property
    it("can set a school property in the constructor", () => {
        const officeNumber = "0402xxxxxx";
        const manager = new Manager("Geo", 123, 'geo@geo.com', officeNumber);
        expect(manager.officeNumber).toBe(officeNumber);
    });




    // test getName()
    it('can get the Manager name by calling getName()', () => {
        // source of truth
        const name = 'Geo';

        // replicate
        const manager = new Manager(name, 123, 'geo@geo.com', "0402xxxxxx");

        const result = manager.getName();

        expect(result).toBe(name);
    });

    // test getId()
    it("can get the Manager id by calling getId()", () => {
        // source of truth
        const truth = 123;

        // replicate
        const manager = new Manager("Geo", truth, 'Geo@email.com', "0402xxxxxx");

        const result = manager.getId();

        expect(result).toBe(truth);
    });

    // test getEmail()
    it("can get the Manager email by calling getEmail()", () => {
        // source of truth
        const truth = "geo@email.com";

        // replicate
        const manager = new Manager("Geo", 123, truth, "0402xxxxxx");

        const result = manager.getEmail();

        expect(result).toBe(truth);
    });


    // test getRole()
    it("can get the Manager role by calling getRole()", () => {
        // source of truth
        const truth = "Manager";

        // replicate
        const manager = new Manager("Geo", 123, 'Geo@email.com', "0402xxxxxx");

        const result = manager.getRole();

        expect(result).toBe(truth);
    });

    // test getOfficeNumber()
    it("can get the Manager role by calling getOfficeNumber()", () => {
        // source of truth
        const truth = "officeNumber";

        // replicate
        const manager = new Manager("Geo", 12, 'Geo@email.com', truth);

        const result = manager.getOfficeNumber();

        expect(result).toBe(truth);
    });

})