import { Router } from "express";
import taskRouter from "./task.routes";

const miniApp = Router()

export default miniApp

miniApp
  .use('/task', taskRouter)
