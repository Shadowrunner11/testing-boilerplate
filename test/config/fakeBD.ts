import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose';
import { TaskSchema } from '../../src/data/mongo/models/Task';

export async function fakeTaskConection(){
  
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  const conn = await mongoose.createConnection(uri, {dbName: 'todoApp'}).asPromise()

  return conn.model('task', TaskSchema)
}




