const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

describe('Integration Test', function () {
    this.timeout(5000); // Ensure timeout is sufficient for server response

    it('should return a 200 status for the homepage', function (done) {
        chai.request('http://localhost:8080') 
            .get('/')
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.status(200);
                expect(res).to.be.json; // Ensure response is in JSON format (optional)
                done();
            });
    });
});
