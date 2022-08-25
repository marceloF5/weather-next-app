import styled from 'styled-components'

const ListBox = styled.ul<{ isOpen: boolean }>`
    width: 100%;
    max-width: 50rem;
    background-color: #1a191c;
    padding: 2rem 0;
    border-radius: 0.5rem;
    transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')}
        translateY(0.05rem);
    transform-origin: top;
    transition: transform 0.2s ease;

    position: absolute;
    top: 7rem;
`

export default ListBox
