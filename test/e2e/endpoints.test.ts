import { expect } from "chai"
import supertest from "supertest"
import server from '../../src/server'
import { TaskStatus } from "../../src/types/task"
import { taskBuilder } from "../builders/taskBuilder"

const appTest = supertest(server)

let globalId = '';


describe('endpoints', () => {
  it('is service available', function (done) {
    appTest
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
  it('Put one record', async function(done){
    const taskInsert  =  taskBuilder.product()
    
    const response = await appTest
      .put('/api/v1/task/upsertTask')
      .send(taskInsert)
      .expect('Content-Type', /json/)
      .expect(200)
      //.then(({body}) => {_id = body._id; done()})
    
    const { _id, ...taskStored } = response.body
    globalId = _id
    expect(taskStored).to.equal(taskInsert)
    expect(Boolean(_id)).to.be.true
    done()
      
  })
  it('Update one record', async function(done){
    const taskUpdate = taskBuilder.product({
      status: TaskStatus.CLOSED
    }) 

    const response = await appTest
      .put('/api/v1/task/upsertTask')
      .send({_id : globalId , ...taskUpdate})
      .expect('Content-Type', /json/)
      .expect(200)
    
    expect(response.body).to.equal({_id : globalId, ...taskUpdate})
    done()
  })
  it('list all', async function (done) {
    appTest
      .get('/api/v1/task')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(({body}) => {console.log(body); done()})
  })
  it('delete record', async function (done) {
     
    const response  = await appTest
      .delete('/api/v1/task')
      .send({_id : globalId})
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body.status).to.equal(TaskStatus.CLOSED)
    done()
  })
})
