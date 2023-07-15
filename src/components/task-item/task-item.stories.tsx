import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TaskItem } from './task-item'

export default {
    title: 'TaskItem',
    component: TaskItem
} as ComponentMeta<typeof TaskItem>

export const Primary: ComponentStory<typeof TaskItem> = () =>
    <TaskItem
        route={[0]}
        parentTask={null}
        task={{
            id: 123123,
            value: 'The first main task',
            isFocused: false,
            isExpanded: false,
            isDone: false,
            subTasks: []
        }}
        onUpdate={() => console.log('onUpdate')}
        onRemove={() => console.log('onRemove')}
    />

export const WithSubTasks: ComponentStory<typeof TaskItem> = () =>
    <TaskItem
        route={[0]}
        parentTask={null}
        task={{
            id: 1234556,
            value: 'The first main task',
            isFocused: false,
            isExpanded: true,
            isDone: false,
            subTasks: [
                {
                    id: 123121,
                    value: 'The first sub task',
                    isFocused: false,
                    isExpanded: false,
                    isDone: false,
                    subTasks: []
                },
                {
                    id: 123122,
                    value: 'The second sub task',
                    isFocused: false,
                    isExpanded: false,
                    isDone: false,
                    subTasks: []
                },
                {
                    id: 123123,
                    value: 'The third sub task',
                    isFocused: false,
                    isExpanded: false,
                    isDone: false,
                    subTasks: []
                }
            ]
        }}
        onUpdate={() => console.log('onUpdate')}
        onRemove={() => console.log('onRemove')}
    />

export const Checked: ComponentStory<typeof TaskItem> = () =>
    <TaskItem
        route={[0]}
        parentTask={null}
        task={{
            id: 11111,
            value: 'The first task',
            isFocused: false,
            isExpanded: false,
            isDone: true,
            subTasks: []
        }}
        onUpdate={() => console.log('onUpdate')}
        onRemove={() => console.log('onRemove')}
    />