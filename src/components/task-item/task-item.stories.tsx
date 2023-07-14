import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TaskItem } from './task-item'

export default {
    title: 'TaskItem',
    component: TaskItem
} as ComponentMeta<typeof TaskItem>

export const Primary: ComponentStory<typeof TaskItem> = () =>
    <TaskItem
        task={{
            id: 123123,
            value: 'The first main task',
            isChecked: false,
            subTasks: []
        }}
        onValueUpdate={newValue => console.log('onValueUpdate', newValue)}
        onCheck={() => console.log('onCheck')}
        onAddSubtask={() => console.log('onAddSubtask')}
        onRemove={() => console.log('onRemove')}
    />

export const WithSubTasks: ComponentStory<typeof TaskItem> = () =>
    <TaskItem
        task={{
            id: 1234556,
            value: 'The first main task',
            isChecked: false,
            subTasks: [
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
            ]
        }}
        onValueUpdate={newValue => console.log('onValueUpdate', newValue)}
        onCheck={() => console.log('onCheck')}
        onAddSubtask={() => console.log('onAddSubtask')}
        onRemove={() => console.log('onRemove')}
    />

export const Checked: ComponentStory<typeof TaskItem> = () =>
    <TaskItem
        task={{
            id: 11111,
            value: 'The first task',
            isChecked: true,
            subTasks: []
        }}
        onValueUpdate={newValue => console.log('onValueUpdate', newValue)}
        onCheck={() => console.log('onCheck')}
        onAddSubtask={() => console.log('onAddSubtask')}
        onRemove={() => console.log('onRemove')}
    />