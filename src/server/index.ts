import Express, { json } from "express"
import morgan from "morgan"
import Cors from 'cors'
import { corsOption } from "../config"
import miniApp from "../routes"
import { DataBaseConenction } from "../middleware/database.middleare"

const server = Express()

export default server

const logger = morgan("dev")

const cors = Cors(corsOption)

server
  .use(logger)
  .use(DataBaseConenction)
  .get('/', (_, res)=>{res.json({ success: true, data: Date()})})
  .use(json())
  .use(cors)
  .use('/api/v1', miniApp)

