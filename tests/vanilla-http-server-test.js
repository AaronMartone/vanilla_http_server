var chai = require('chai');
var chaiHTTP = require('chai-http');
var expect = chai.expect;

chai.use(chaiHTTP);

describe('Our vanilla HTTP server...', function() {
    var app = 'localhost:3000';

    // respond to root requests
    it('should respond to: GET /.', function(done) {
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
            });
        done();
    });

    // respond to '/time' requests
    it('should respond to: GET /time.', function(done) {
        chai.request(app)
            .get('/time')
            .send({})
            .end(function(err, res) {
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
            });
        done();
    });

    // respond to base '/greet' requests
    it('should respond to: GET /greet.', function(done) {
        chai.request(app)
            .get('/greet')
            .send({})
            .end(function(err, res) {
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
            });
        done();
    });

    // respond to '/greet/<name>' requests
    it('should respond to: GET /greet/<name>.', function(done) {
        chai.request(app)
            .get('/greet/BoBoWeeWee')
            .send({})
            .end(function(err, res) {
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
            });
        done();
    });

    // respond to: POST /greet without req.body.name provided.
    it('should respond to: POST /greet without req.body.name provided', function(done) {
        chai.request(app)
            .post('/greet')
            .field('name', '')
            .end(function(err, res) {                          
                expect(err).to.eql(null);
                expect(req).to.be.json;
                expect(res.status).to.eql(200);
                console.log(req.body);
            });
            
        done();
    });

    // respond to: POST /greet with req.body.name provided.
    it('should respond to: POST /greet with req.body.name provided', function(done) {
        chai.request(app)
            .post('/greet')
            .send({ 'name': 'Aaron' })
            .end(function(err, res) {                
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
                console.log(res);
            });
            
        done();
    });
});