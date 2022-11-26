import { POJO } from "../types/globals"

export function omitKeys<T>(pojo: POJO<T>, keys: string[]){
  return keys
    .reduce((prev, next)=>{
      const { [next]: ommited , ...rest  } = prev

      return rest
    }, pojo)
}
