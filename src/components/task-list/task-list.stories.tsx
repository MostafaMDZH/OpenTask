import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TaskList } from './task-list'

export default {
    title: 'TaskList',
    component: TaskList
} as ComponentMeta<typeof TaskList>

export const Primary: ComponentStory<typeof TaskList> = () =>
    <TaskList
        tasks={[
            {
                id: 123121,
                value: 'The first sub task',
                isChecked: false,
                subTasks: []
            },
            {
                id: 123122,
                value: 'The second sub task',
                isChecked: false,
                subTasks: []
            },
            {
                id: 123123,
                value: 'The third sub task',
                isChecked: false,
                subTasks: []
            }
        ]}
    />