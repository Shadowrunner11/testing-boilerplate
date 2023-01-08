import { ObjectId } from "mongoose";
import { GlobalStatus } from '../types/globals';

export enum TaskStatus {
  PENDING = 'Pending',
  DELETED = 'Deleted',
  DONE = 'Done',
  CLOSED = 'Closed'
}

export interface ITask {
  _id: ObjectId,
  title: string;
  description: string;
  state: TaskStatus;
  createdAt?: Date
  updatedAt?: Date
}


