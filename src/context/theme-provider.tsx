import { ThemeProvider as AntdThemeProvider } from "styled-components"
import { theme } from "antd"
import React from "react"

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
    
    //theme:
    const { token } = theme.useToken()
    
    //render:
    return (
        <AntdThemeProvider theme={token}>
            {children}
        </AntdThemeProvider>
    )

}