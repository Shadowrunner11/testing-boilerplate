import { Model } from "mongoose";
import Task from "../data/mongo/models/Task";
import { ITask, TaskStatus } from "../types/task";
import AbstractController from "./abstract.controller";

class TaskController extends AbstractController<ITask>{
  private static instance: TaskController

  private constructor(taskModel: Model<ITask>) {
    super(taskModel)
  }

  static getInstance(taskModel = Task) {
    if(!this.instance)
      this.instance = new this(taskModel)

    return this.instance
  }

  getbyStatus(status: TaskStatus){
    return this.model
      .find({ status })
      .lean()
  }
}


export default TaskController
