export type Task = {
    id: number
    value: string
    isChecked: boolean
    subTasks: Task[]
}