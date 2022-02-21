const Engineer = require('../lib/Engineer')

describe('Engineer class test', () => {


    // can instantiated
    it('can be instantiated', () => {
        const engineer = new Engineer("Geo", 123, "geo@geo.com", "geo88")
        expect(engineer).toBeInstanceOf(Engineer);
    })

    // take in the name argumentument, and set as property
    it('can set a name property in the constructor', () => {
        const name = 'Geo';
        const engineer = new Engineer(name, 123, "geo@geo.com", "geo88");
        expect(engineer.name).toBe(name);
    })

    // take in the id argument, and set as property
    it("can set a id property in the constructor", () => {
        const id = 123;
        const engineer = new Engineer('Geo', id, "geo@geo.com", "geo88");
        expect(engineer.id).toBe(id);
    });

    // take in the email argument, and set as property
    it("can set a email property in the constructor", () => {
        const email = "geo@geo.com";
        const engineer = new Engineer("Geo", 123, email, "geo88");
        expect(engineer.email).toBe(email);
    });

    // take in the github argument, and set as property
    it("can set a github property in the constructor", () => {
        const github = "geo88";
        const engineer = new Engineer("Geo", 123, 'geo@geo.com', github);
        expect(engineer.github).toBe(github);
    });




    // test getName()
    it('can get the Engineer name by calling getName()', () => {
        // source of truth
        const name = 'Geo';

        // replicate
        const engineer = new Engineer(name, 123, 'geo@geo.com', "geo88");

        const result = engineer.getName();

        expect(result).toBe(name);
    });

    // test getId()
    it("can get the Engineer id by calling getId()", () => {
        // source of truth
        const truth = 123;

        // replicate
        const engineer = new Engineer("Geo", truth, 'Geo@email.com', "geo88");

        const result = engineer.getId();

        expect(result).toBe(truth);
    });

    // test getEmail()
    it("can get the Engineer email by calling getEmail()", () => {
        // source of truth
        const truth = "geo@email.com";

        // replicate
        const engineer = new Engineer("Geo", 123, truth, "geo88");

        const result = engineer.getEmail();

        expect(result).toBe(truth);
    });


    // test getRole()
    it("can get the Engineer role by calling getRole()", () => {
        // source of truth
        const truth = "Engineer";

        // replicate
        const engineer = new Engineer("Geo", 123, 'Geo@email.com', "geo88");

        const result = engineer.getRole();

        expect(result).toBe(truth);
    });

    // test getGithub()
    it("can get the Engineer role by calling getGithub()", () => {
        // source of truth
        const truth = "geo88";

        // replicate
        const engineer = new Engineer("Geo", 12, 'Geo@email.com', truth);

        const result = engineer.getGithub();

        expect(result).toBe(truth);
    });

})