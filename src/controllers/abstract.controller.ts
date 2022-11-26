import { ObjectId } from "bson";
import { GlobalStatus, ModelInput } from "../types/globals";
import { Model } from "mongoose";
import { omitKeys } from "../utils";

abstract class AbstractController<T = any> {
  protected model = Model<T>

  constructor(model: Model<T>){
    this.model = model
  }

  deleteById(_id: string) {
    return this.model
      .findOneAndUpdate({ _id }, { $set: { state: GlobalStatus.DELETED} }, { new: true })
      .lean()
  }

  listAll() {
    return this.model
      .find()
      .sort({ updatedAt: -1 })
      .lean()
  }

  upsertTaskById(modelInput: ModelInput<T>) {
    if(!modelInput)
      throw new Error('')

    const { _id = new ObjectId } = modelInput

    return this.model
      .findOneAndUpdate(
        { _id },
        {
          $set: omitKeys<unknown>(modelInput, ['_id'])
        },
        { upsert: true, new: true }
      )
      .select('-__v')
      .lean()
  }
}


export default AbstractController
