import styled from 'styled-components'

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeaderContainer = styled.div`
    padding-top: ${props => `${props.theme.paddingXS}px`};
    padding-bottom: ${props => `${props.theme.paddingXS}px`};
    border-top: ${props => `solid 1px ${props.theme.colorBorder}`};
    display: flex;
    gap: ${props => `${props.theme.marginXXS}px`};
    justify-content: flex-start;
    align-items: center;
`

export const ListContainer = styled.div`
    padding-left: ${props => `${props.theme.paddingXS}px`};
    display: flex;
    flex-direction: column;
`