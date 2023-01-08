import { ITask, TaskStatus } from "../../../../src/types/task";
import { ModelInput } from "../../../../src/types/globals";

const defaultTask : ModelInput<ITask> = {
    
    title: 'Default task',
    description: 'TypeScripts Partial and factory-function',
    state: TaskStatus.PENDING
}

const createMockTask = (overwrites: Partial<ITask> = {}) => ({
    ...defaultTask,
    ...overwrites
})


createMockTask()

export {
    createMockTask
}