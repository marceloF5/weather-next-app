import styled from 'styled-components'

const ListItem = styled.li`
    cursor: pointer;
    list-style: none;
    padding: 1rem 2rem;
    background-color: #1a191c;
    transition: filter 0.2s;
    margin-bottom: 1rem;
    cursor: pointer;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover {
        filter: brightness(2);
    }
`

export default ListItem
