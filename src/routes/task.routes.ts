import { Router, ErrorRequestHandler } from "express";
import TaskController from "../controllers/Task.controller";
import { ModelInput } from "../types/globals";
import { ITask } from "../types/task";

const taskRouter = Router()

export default taskRouter

const taskController = TaskController
.getInstance()

const CustomErrorHandler: ErrorRequestHandler = (err, _, res, __)=>{
  res
    .status(5600)
    .json({ success: false, error: err})
}

taskRouter
  .put('/upsertTask', async (req, res, next) => {
    try {
      const { body }: { body: ModelInput<ITask> } = req.body

      const data = await taskController
        .upsertTaskById(body)

      res.json({ data, success: true})

    } catch (error) {
      next(error)
    }
  })
  .get('/', async (_, res, next) =>{
    try {
      const data = await taskController
        .listAll()

      res.json({ data , success: true })
    } catch (error) {
      next(error)
    }
  })
  .delete('/', async (req, res, next) =>{
    try {
      const { body : { id } } =  req

      const data = await taskController
        .deleteById(id)

      res.json({ data , success: true})
    } catch (error) {
      next(error)
    }
  })
  .use(CustomErrorHandler)
