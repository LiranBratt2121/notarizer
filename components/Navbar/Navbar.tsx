"use client";

import React from 'react'
import { ButtonsWrapper, NavbarContainer, NavButton } from './Navbar.styles';
import MenuBar from './components/MenuBar/MenuBar';

const Navbar = () => {
    const buttons = [
        { href: "/dashboard", name: "Capture" },
        { href: "/apartments", name: "View Captured Images" }
    ]

    return (
        <NavbarContainer>
            <MenuBar />
            <ButtonsWrapper>
                {buttons.map(({ href, name }) =>
                    <NavButton href={href} key={href}>
                        {name}
                    </NavButton>)}
            </ButtonsWrapper>
        </NavbarContainer>
    )
}

export default Navbar;
