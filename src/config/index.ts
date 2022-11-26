import { CorsOptions } from 'cors';
import 'dotenv/config'
import { env } from "process";

export const dataBases = {
  mongo:{
    defaultCon: env.MONGO_DEFAULT_CONNECTION
  }
}

export const server = {
  port: Number(env.PORT) || 8000,
  host: env.HOST || '0.0.0.0',
}

export const corsOption : CorsOptions = {
  preflightContinue: true,
  optionsSuccessStatus: 200,
  origin: '*'
}
