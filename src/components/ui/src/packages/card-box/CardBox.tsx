import media from 'styled-media-query'

import styled, { css } from 'styled-components'

type TCardBoxProps = {
    isToday?: boolean
    subBox?: boolean
    hasCursor?: boolean
}

const CardBox = styled.div<TCardBoxProps>`
    ${({ isToday = false, subBox = false, hasCursor = false }) => css`
        width: ${isToday ? '100%' : '5rem'};
        height: ${isToday ? '30rem' : '10rem'};
        border-radius: 2rem;
        background-color: ${isToday ? '#C1D7EA' : '#1A191C'};
        padding: 1rem;

        p {
            color: ${isToday ? '#000' : '#fff'};
        }

        div > p {
            color: ${isToday ? '#000' : '#fff'};
        }

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        ${hasCursor &&
        css`
            cursor: pointer;
        `}
        ${subBox &&
        css`
            width: 100%;
            height: 15rem;
        `}

        ${media.greaterThan('medium')`
            width: ${isToday ? '30rem' : '10rem'};
            height: 30rem;
       
            ${
                subBox &&
                css`
                    width: 25rem;
                    height: 15rem;
                `
            }
        `}
    `}
`

export default CardBox
