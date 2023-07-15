import { Task } from "types"

export const defaultTasks: Task[] = [
    {
        id: 1,
        value: 'The 1 sub task',
        isDone: false,
        subTasks: [
            {
                id: 11,
                value: 'The 11 sub task',
                isDone: false,
                subTasks: []
            },
            {
                id: 12,
                value: 'The 12 sub task',
                isDone: true,
                subTasks: []
            },
            {
                id: 13,
                value: 'The 13 sub task',
                isDone: false,
                subTasks: [
                    {
                        id: 131,
                        value: 'The 131 sub task',
                        isDone: false,
                        subTasks: []
                    },
                    {
                        id: 132,
                        value: 'The 132 sub task',
                        isDone: false,
                        subTasks: []
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        value: 'The 2 sub task',
        isDone: false,
        subTasks: []
    },
    {
        id: 3,
        value: 'The 3 sub task',
        isDone: true,
        subTasks: []
    },
    {
        id: 4,
        value: 'The 4 sub task',
        isDone: true,
        subTasks: []
    },
    {
        id: 5,
        value: 'The 5 sub task',
        isDone: false,
        subTasks: []
    }
]