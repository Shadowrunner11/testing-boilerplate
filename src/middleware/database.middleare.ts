import { RequestHandler } from "express";
import DatabaseCustomError from "../services/DatabaseError";

export const DataBaseConenction : RequestHandler = function(_, res, next){
  if(DatabaseCustomError.error)
    res
      .status(500)
      .json({ error: DatabaseCustomError.error})
    
  next()
}
