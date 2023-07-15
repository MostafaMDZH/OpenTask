import { ConfigProvider } from "antd"
import { ThemeProvider } from "context/theme-provider"
import { Main } from "pages/main/main"

export const App = () =>
    <ConfigProvider theme={{ token: { fontFamily: 'Ubuntu' } }}>
        <ThemeProvider>
            <Main/>
        </ThemeProvider>
    </ConfigProvider>