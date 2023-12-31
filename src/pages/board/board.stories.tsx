import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Board } from './board'

export default {
    title: 'Board',
    component: Board
} as ComponentMeta<typeof Board>

export const Primary: ComponentStory<typeof Board> = () =>
    <Board/>