import { TaskStatus } from "../../src/types/task";

export const taskBuilder = {
     product: ({title = 'task1', description = 'task from builder', status = TaskStatus.PENDING} = {}) => ({
        title,
        description,
        status
     })
}

