"use client";

import React from 'react'
import { Icon } from "../IconButton/IconButton.styles";

export interface IconButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
    return (
        <Icon onClick={onClick}>{icon}</Icon>
    )
}

export default IconButton;
