import { ConfigProvider } from "antd"
import { ThemeProvider } from "context/theme-provider"
import '!style-loader!css-loader!sass-loader!../src/index.scss'

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
                value: '#fff'
                // value: '#f5f5f5'
            },
            {
                name: 'dark',
                value: '#333333'
            }
        ]
    }
}

export const decorators = [
    Story =>
        <ConfigProvider theme={{ token: { fontFamily: 'Ubuntu' } }}>
            <ThemeProvider>
                <Story/>
            </ThemeProvider>
        </ConfigProvider>
]