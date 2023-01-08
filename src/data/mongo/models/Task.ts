import { Schema } from 'mongoose'
import { todoAppCon } from '..';
import { ITask, TaskStatus } from '../../../types/task';

export const TaskSchema = new Schema<ITask>({
  description: { type: String },
  title: { type: String },
  state: { 
    type: String,
    'enum': Object.values(TaskStatus), 
    'default': TaskStatus.PENDING
  }
}, { timestamps: true })

export default todoAppCon.model('task', TaskSchema)
