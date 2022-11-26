
export type POJO<T> = Record<string, T>

export enum GlobalStatus {
    DELETED = 'Deleted',
  }
  
export type ModelInput<T> = Partial<Omit<T, '_id'> & { _id: string }>

