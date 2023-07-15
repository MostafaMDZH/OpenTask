import styled from 'styled-components'
import styledContainerQuery from 'styled-container-query'

export const MainWrapper = styledContainerQuery.div`
    width: 100%;
    max-width: 500px;
    padding: ${(props: any) => `${props.theme.paddingXL}px`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: ${(props: any) => `solid 1px ${props.theme.colorBorderSecondary}`};
    border-radius: ${(props: any) => `${props.theme.borderRadiusLG}px`};
    box-shadow: ${(props: any) => props.theme.boxShadow};
    gap: ${(props: any) => `${props.theme.margin}px`};
    overflow-x: auto;
    &:container(max-width: 499px){
        border: none;
        box-shadow: unset;
        padding: ${(props: any) => `0 ${props.theme.paddingXS}px ${props.theme.paddingXS}px ${props.theme.paddingXS}px`};
    }
`