import styled, { css } from 'styled-components'

type TTextProps = {
    weight?: 'bold' | 300 | 500
    size?: '1rem' | '1.5rem' | '2rem' | '2.5rem' | '4rem' | '6rem'
}

const Text = styled.p<TTextProps>`
    ${({ weight = 300, size = '2.5rem' }) => css`
        font-weight: ${weight};
        font-size: ${size};
    `}
`

export default Text
