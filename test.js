var request = require('supertest');
var app = require('./app');


describe('GET users', function() {
    it('return all users', function(done) {
        request(app)
          .get('/friends')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
    it('New user signed up', function(done) {
        request(app)
          .post('/friends/signup')
          .set('Accept', 'application/json')
          .send({name:'Yessine', surname: 'Kebir'})
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
