export type Task = {
    id: number
    value: string
    isFocused: boolean
    isDone: boolean
    isExpanded: boolean
    subTasks: Task[]
}