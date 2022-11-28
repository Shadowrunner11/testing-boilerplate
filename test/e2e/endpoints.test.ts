import supertest from "supertest"
import server from '../../src/server'

const appTest = supertest(server)

let _id = ''

const taskInsert = {
  title: 'Put endpoint', 
  description: 'Task reference to put method',
  status: 'Pending'
}
const taskUpdate = {
  _id,
  status: 'Close'
}

describe('endpoints', () => {
  it('is service available', function (done) {
    appTest
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
  it('Put one record', function(done){
    appTest
      .put('/api/v1/task/upsertTask')
      .send({body: taskInsert})
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({body}) => {_id = body._id; done()})
      
  })
  it('Update one record', function(done){
    appTest
      .put('/api/v1/task/upsertTask')
      .send({body: taskUpdate})
      .expect('Content-Type', /json/)
      .expect(200)
      
  })
  it('list all', function (done) {
    appTest
      .get('/api/v1/task')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({body}) => {console.log(body); done()})
  })
  it('delete record', function (done) {
    appTest
      .delete('/api/v1/task')
      .send({body: {_id}})
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
