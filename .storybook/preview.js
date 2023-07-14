import { ConfigProvider } from "antd"
import { ThemeProvider } from "context/theme-provider"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from 'utils'
import '!style-loader!css-loader!sass-loader!../src/index.scss'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { MmsHandlers } from "../src/utils/msw-handlers"
import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'

//start week from Monday:
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
    weekStart: 1
})

//initialize MSW:
initialize()

//parameters:
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    backgrounds: {
        default: 'light',
        values: [
            {
                name: 'light',
                // value: '#fff'
                value: '#f5f5f5'
            },
            {
                name: 'dark',
                value: '#333333'
            }
        ]
    },
    msw: {
        handlers: MmsHandlers
    }
}

export const decorators = [
    Story =>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider theme={{ token: { fontFamily: 'inter' } }}>
                <ThemeProvider>
                    <Story/>
                    <ReactQueryDevtools/>
                </ThemeProvider>
            </ConfigProvider>
        </QueryClientProvider>,
    mswDecorator
]