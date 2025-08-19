import styled from "@emotion/styled";
import Link from 'next/link'

export const NavbarContainer = styled.div`
    position: sticky;
    display: flex;
    top: 0;
    z-index: 1000;

    background: orange;
    width: 100%;
    height: 50px;
    box-shadow: 0 2px 10px black;
`

export const ButtonsWrapper = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
`

export const NavButton = styled(Link)(() => ({
    background: 'transparent',
    border: 'none',
    textDecoration: 'none',
    color: 'black',
    padding: '0 1rem',
    fontWeight: 500,

    '&:hover': {
        color: 'white',
        transition: 'color 0.3s ease'
    },

    '&:not(:hover)': {
        color: 'black',
        transition: 'color 1s ease'
    }
}))