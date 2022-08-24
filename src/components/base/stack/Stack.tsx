import styled, { css } from 'styled-components'

type TStackProps = {
    direction?: 'horizontal' | 'vertical'
    justify?:
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-around'
        | 'space-between'
    align?: 'center' | 'flex-start' | 'flex-end'
    gap?: string
    wrap?: 'wrap' | 'nowrap'
}

const Stack = styled.div<TStackProps>`
    ${({
        direction = 'horizontal',
        justify = 'flex-start',
        align = 'flex-start',
        gap = 0,
        wrap = 'wrap'
    }) => css`
        width: 100%;

        display: flex;
        justify-content: ${justify};
        align-items: ${align};
        flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
        gap: ${`${gap}rem`};
        flex-wrap: ${wrap};
    `}
`

export default Stack
