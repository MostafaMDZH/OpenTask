import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DoneList } from './done-list'

export default {
    title: 'DoneList',
    component: DoneList
} as ComponentMeta<typeof DoneList>

export const Primary: ComponentStory<typeof DoneList> = () =>
    <DoneList
        tasks={[
            {
                id: 123121,
                value: 'The first sub task',
                isChecked: true,
                subTasks: []
            },
            {
                id: 123122,
                value: 'The second sub task',
                isChecked: true,
                subTasks: []
            },
            {
                id: 123123,
                value: 'The third sub task',
                isChecked: true,
                subTasks: []
            }
        ]}
    />