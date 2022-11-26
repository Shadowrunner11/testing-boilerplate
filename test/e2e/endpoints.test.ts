import supertest from "supertest"
import server from '../../src/server'

const appTest = supertest(server)

describe('endpoints', () => {
  it('is service available', function (done) {
    appTest
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('list all', function (done) {
    appTest
      .get('/api/v1/task')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({body}) => {console.log(body); done()})
  })

})
