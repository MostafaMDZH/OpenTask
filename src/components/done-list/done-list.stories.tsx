import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DoneList } from './done-list'

export default {
    title: 'DoneList',
    component: DoneList
} as ComponentMeta<typeof DoneList>

export const Primary: ComponentStory<typeof DoneList> = () =>
    <DoneList
        route={[0]}
        parentTask={null}
        tasks={[
            {
                id: 123121,
                value: 'The first sub task',
                isFocused: false,
                isExpanded: false,
                isDone: true,
                subTasks: []
            },
            {
                id: 123122,
                value: 'The second sub task',
                isDone: true,
                isFocused: false,
                isExpanded: false,
                subTasks: []
            },
            {
                id: 123123,
                value: 'The third sub task',
                isFocused: false,
                isExpanded: false,
                isDone: true,
                subTasks: []
            }
        ]}
        onUpdate={() => console.log('onUpdate')}
        onRemove={() => console.log('onRemove')}
    />