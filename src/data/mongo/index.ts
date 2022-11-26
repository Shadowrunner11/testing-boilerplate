import mongoose from "mongoose";
import { dataBases } from "../../config";
import DatabaseCustomError from "../../services/DatabaseError";

const  { mongo : { defaultCon }} = dataBases


if(!defaultCon)
  throw new Error('Not enough info to stablish connection')

export const todoAppCon = mongoose
  .createConnection(defaultCon, { dbName: 'todoapp' })

todoAppCon
  .on('disconnected', ()=> console.log('disconnected'))
  .on('error', (err)=> {
    console.log('Upps')
    DatabaseCustomError.error = err.message ?? 'la base de datos se cayo'
  })
  .on('connecting', ()=> console.log('is statring connection'))


