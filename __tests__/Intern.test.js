const Intern = require('../lib/Intern')

describe('Intern class test', () => {


    // can instantiated
    it('can be instantiated', () => {
        const intern = new Intern("Geo", 123, "geo@geo.com", "GU")
        expect(intern).toBeInstanceOf(Intern);
    })

    // take in the name argumentument, and set as property
    it('can set a name property in the constructor', () => {
        const name = 'Geo';
        const intern = new Intern(name, 123, "geo@geo.com", "GU");
        expect(intern.name).toBe(name);
    })

    // take in the id argument, and set as property
    it("can set a id property in the constructor", () => {
        const id = 123;
        const intern = new Intern('Geo', id, "geo@geo.com", "GU");
        expect(intern.id).toBe(id);
    });

    // take in the email argument, and set as property
    it("can set a email property in the constructor", () => {
        const email = "geo@geo.com";
        const intern = new Intern("Geo", 123, email, "GU");
        expect(intern.email).toBe(email);
    });

    // take in the school argument, and set as property
    it("can set a school property in the constructor", () => {
        const school = "GU";
        const intern = new Intern("Geo", 123, 'geo@geo.com', school);
        expect(intern.school).toBe(school);
    });




    // test getName()
    it('can get the Intern name by calling getName()', () => {
        // source of truth
        const name = 'Geo';

        // replicate
        const intern = new Intern(name, 123, 'geo@geo.com', "GU");

        const result = intern.getName();

        expect(result).toBe(name);
    });

    // test getId()
    it("can get the Intern id by calling getId()", () => {
        // source of truth
        const truth = 123;

        // replicate
        const intern = new Intern("Geo", truth, 'Geo@email.com', "GU");

        const result = intern.getId();

        expect(result).toBe(truth);
    });

    // test getEmail()
    it("can get the Intern email by calling getEmail()", () => {
        // source of truth
        const truth = "geo@email.com";

        // replicate
        const intern = new Intern("Geo", 123, truth, "GU");

        const result = intern.getEmail();

        expect(result).toBe(truth);
    });


    // test getRole()
    it("can get the Intern role by calling getRole()", () => {
        // source of truth
        const truth = "Intern";

        // replicate
        const intern = new Intern("Geo", 123, 'Geo@email.com', "GU");

        const result = intern.getRole();

        expect(result).toBe(truth);
    });

    // test getSchool()
    it("can get the Intern role by calling getSchool()", () => {
        // source of truth
        const truth = "GU";

        // replicate
        const intern = new Intern("Geo", 12, 'Geo@email.com', truth);

        const result = intern.getSchool();

        expect(result).toBe(truth);
    });

})