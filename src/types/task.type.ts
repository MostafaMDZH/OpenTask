export type Task = {
    id: number
    value: string
    isDone: boolean
    subTasks: Task[]
}