const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Integration Test: Nginx Web Server', () => {
  it('should return status 200 and the greeting from the HTML file', (done) => {
    chai.request('http://localhost:8080&#39;) 
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);  
        expect(res.text).to.include('Hello from Docker!');  
        done();
      });
  });
});
