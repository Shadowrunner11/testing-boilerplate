import chai, { expect } from "chai"
import chaiAsPromised from "chai-as-promised"
import TaskController from "../../src/controllers/Task.controller"
import Task from "../../src/data/mongo/models/Task"
import { TaskStatus } from "../../src/types/task"

chai.use(chaiAsPromised)

const taskController = TaskController.getInstance()

const data = { 
  description: 'Esta es data de prueba 2',
  title: 'Mi tarea de prueba 2'
}


let upsertResult: any;

before(async ()=>{
  upsertResult = await taskController
    .upsertTaskById(data)

})

after(async ()=>{
  await Task.deleteOne({ _id: upsertResult._id })
})

describe('Task Controller tests', ()=>{
  it('Has keys', async function(){
    expect(upsertResult)
      .to
      .have
      .keys('_id', 'createdAt', 'description', 'state', 'title', 'updatedAt')
  })

  it('Has properties', async function (){
    Object.entries(data)
    .forEach( ( [ key, value ]) => expect(upsertResult)
      .to
      .have
      .property(key, value)
    )
  })

  it('Delete by id', async function (){
    const { state } = await taskController.deleteById(upsertResult._id)
    
    expect(state).to.be.equal(TaskStatus.DELETED)
  })

})
