'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const {TEST_DATABASE_URL} = require('../config');

// Set NODE_ENV to `test` to disable http layer logs
// You can do this in the command line, but this is cross-platform
process.env.NODE_ENV = 'test';

// Clear the console before each run
process.stdout.write('\x1Bc\n');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Mocha and Chai', function() {
    it('should be properly setup', function() {
        expect(true).to.be.true;
    });
});

