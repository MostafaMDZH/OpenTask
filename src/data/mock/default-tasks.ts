import { Task } from "types"

export const defaultTasks: Task[] = [
    {
        id: 3643462322,
        value: 'This is the OneTask todo app!',
        isFocused: false,
        isDone: false,
        isExpanded: false,
        subTasks: []
    },
    {
        id: 1346346,
        value: 'Features:',
        isFocused: false,
        isDone: false,
        isExpanded: true,
        subTasks: [
            {
                id: 136664641,
                value: 'Nested tasks:',
                isFocused: false,
                isDone: false,
                isExpanded: true,
                subTasks: [
                    {
                        id: 134634612,
                        value: 'No limits on depth',
                        isFocused: false,
                        isDone: false,
                        isExpanded: false,
                        subTasks: []
                    },
                    {
                        id: 134634612,
                        value: 'Expand and shrinkable',
                        isFocused: false,
                        isDone: false,
                        isExpanded: false,
                        subTasks: []
                    }
                ]
            },
            {
                id: 1345345342,
                value: 'Separated todo and done lists',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 13234234234,
                value: 'Count total todo and done tasks',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 1235655674,
                value: 'Responsive design',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            }
        ]
    },
    {
        id: 13223346,
        value: 'Actions:',
        isFocused: false,
        isDone: false,
        isExpanded: true,
        subTasks: [
            {
                id: 1396664641,
                value: 'New task with enter',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 13459345342,
                value: 'Remove task with backspace and delete',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 13234234234,
                value: 'Create task by typing on "Add task" input',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 1235655674,
                value: 'Auto focus on newly created task',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            }
        ]
    },
    {
        id: 3232355325,
        value: 'Tech stack:',
        isFocused: false,
        isDone: true,
        isExpanded: true,
        subTasks: [
            {
                id: 123123,
                value: 'Typescript',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 45645,
                value: 'React.js',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 65786543514,
                value: 'Ant Design',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 65786543514,
                value: 'Styled Components',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 65786543514,
                value: 'Styled Container Query',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 235256514,
                value: 'Storybook',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            }
        ]
    }
]