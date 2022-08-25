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
    position?: 'absolute' | 'relative' | 'inherit'
}

const Stack = styled.div<TStackProps>`
    ${({
        direction = 'horizontal',
        justify = 'flex-start',
        align = 'flex-start',
        gap = 0,
        wrap = 'wrap',
        position
    }) => css`
        width: 100%;
        position: ${position};

        display: flex;
        justify-content: ${justify};
        align-items: ${align};
        flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
        gap: ${`${gap}rem`};
        flex-wrap: ${wrap};
    `}
`

export default Stack
