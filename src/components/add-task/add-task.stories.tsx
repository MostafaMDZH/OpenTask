import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddTask } from './add-task'

export default {
    title: 'AddTask',
    component: AddTask
} as ComponentMeta<typeof AddTask>

export const Primary: ComponentStory<typeof AddTask> = () =>
    <AddTask
        onAdd={val => console.log('onAdd', val)}
    />