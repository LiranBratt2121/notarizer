"use client";

import React from 'react'
import IconButton from '../IconButton/IconButton'
import { CiMenuBurger } from "react-icons/ci";

interface MenuButtonProps {
    iconsizepx?: number;
    onClick?: () => void;
}

const MenuButton = ({ iconsizepx = 50, onClick }: MenuButtonProps) => {
    return (
        <IconButton icon={<CiMenuBurger size={iconsizepx} />} onClick={onClick} />
    )
}

export default MenuButton
