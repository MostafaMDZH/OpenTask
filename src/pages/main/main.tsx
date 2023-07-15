import { HeaderWrapper, MainWrapper, TitleContainer } from './main.style'
import { Typography, theme } from 'antd'
import { Board } from 'pages/board/board'
const { Text } = Typography

export const Main = () => {

    //theme:
    const { token: { fontSizeXL } } = theme.useToken()
    
    //render:
    return (
        <MainWrapper>

            <HeaderWrapper>
                <TitleContainer>
                    <Text style={{ fontSize: fontSizeXL }}>{'OneTask'}</Text>
                    <Text type='secondary'>{'An open-source todo app'}</Text>
                </TitleContainer>
            </HeaderWrapper>

            <Board/>
            
        </MainWrapper>
    )

}