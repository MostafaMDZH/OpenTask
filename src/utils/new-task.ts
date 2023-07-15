import { Task } from "types"

//getNewTask:
export const getNewTask = (value?: string, isFocused?: boolean, isDone?: boolean): Task => {
    const date = new Date()
    return {
        id: date.getTime(),
        value: value ?? '',
        isFocused: isFocused ?? false,
        isDone: isDone ?? false,
        isExpanded: false,
        subTasks: []
    }
}