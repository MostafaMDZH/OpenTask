import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainPage } from './main-page'

export default {
    title: 'MainPage',
    component: MainPage
} as ComponentMeta<typeof MainPage>

export const Primary: ComponentStory<typeof MainPage> = () =>
    <MainPage/>