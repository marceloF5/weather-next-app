import media from 'styled-media-query'

import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    margin: auto;
    padding: 2.5rem;
    background-color: #000;

    display: flex;
    flex-direction: column;

    ${media.lessThan('small')`
        height: calc(100vh - calc(100vh - 100%));
    `}

    ${media.between('medium', 'large')`
        padding: 2.5 3rem;       
    `}

    ${media.greaterThan('large')`
        padding: 5rem 10rem;    
    `}

    ${media.greaterThan('huge')`
        padding: 5rem 16rem;    
    `}
`

export default Container
