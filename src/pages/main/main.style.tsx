import styled from 'styled-components'

export const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => `${props.theme.marginXL}px`};
    padding-bottom: ${props => `${props.theme.paddingXL}px`};
`

export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colorBgContainer};
    border-bottom: ${props => `solid 1px ${props.theme.colorBorder}`};
    position: sticky;
    top: 0;
    z-index: 100;
`

export const TitleContainer = styled.div`
    padding: ${props => `${props.theme.paddingSM}px ${props.theme.padding}px`};
    display: flex;
    flex-direction: column;
`