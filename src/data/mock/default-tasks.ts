import { Task } from "types"

export const defaultTasks: Task[] = [
    {
        id: 36434622322,
        value: 'This is the OneTask todo app!',
        isFocused: false,
        isDone: false,
        isExpanded: false,
        subTasks: []
    },
    {
        id: 13463246,
        value: 'Features:',
        isFocused: false,
        isDone: false,
        isExpanded: true,
        subTasks: [
            {
                id: 1364664641,
                value: 'Nested tasks:',
                isFocused: false,
                isDone: false,
                isExpanded: true,
                subTasks: [
                    {
                        id: 1346634612,
                        value: 'No limits on depth',
                        isFocused: false,
                        isDone: false,
                        isExpanded: false,
                        subTasks: []
                    },
                    {
                        id: 1344634612,
                        value: 'Expand and shrinkable',
                        isFocused: false,
                        isDone: false,
                        isExpanded: false,
                        subTasks: []
                    }
                ]
            },
            {
                id: 13345345342,
                value: 'Separated todo and done lists',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 132342234234,
                value: 'Count total todo and done tasks',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 12356515674,
                value: 'Responsive design',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            }
        ]
    },
    {
        id: 132233436,
        value: 'Actions:',
        isFocused: false,
        isDone: false,
        isExpanded: true,
        subTasks: [
            {
                id: 139766654641,
                value: 'New task with enter',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 134593845342,
                value: 'Remove task with backspace and delete',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 132342304234,
                value: 'Create task by typing on "Add task" input',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 12356559674,
                value: 'Auto focus on newly created task',
                isFocused: false,
                isDone: false,
                isExpanded: false,
                subTasks: []
            }
        ]
    },
    {
        id: 32323855325,
        value: 'Tech stack:',
        isFocused: false,
        isDone: true,
        isExpanded: true,
        subTasks: [
            {
                id: 1273123,
                value: 'Typescript',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 465645,
                value: 'React.js',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 657856543514,
                value: 'Ant Design',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 657486543514,
                value: 'Styled Components',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 657865423514,
                value: 'Styled Container Query',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 2352561514,
                value: 'Storybook',
                isFocused: false,
                isDone: true,
                isExpanded: false,
                subTasks: []
            }
        ]
    }
]