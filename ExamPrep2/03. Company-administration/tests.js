let companyAdministration = require('./companyAdministration')
let { assert } = require('chai');

describe("Tests …", function () {
    describe("test hiringEmployee", function () {
         let hiringEmployee = companyAdministration.hiringEmployee
        it("Test different position", function () {
            let exp = `We are not looking for workers for this position.`
            assert.throw(() => hiringEmployee('Todor', 'DifferentPosition', 30),exp )
        });
    });

    // TODO: …
});
