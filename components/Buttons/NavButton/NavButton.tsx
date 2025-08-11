"use client";

import React from 'react'
import Button, { ButtonProps } from '../Button/Button';
import { useRouter } from 'next/navigation';

interface NavButtonProps extends Omit<ButtonProps, "onClick"> {
    href: string;
}

const NavButton = ({ href, children, disabled, height, type, width }: NavButtonProps) => {
    const navigate = useRouter();

    const handleClick = () => {
        navigate.replace(href);
    };

    return (
        <Button
            disabled={disabled}
            height={height}
            type={type}
            width={width}
            onClick={handleClick}>
            {children}
        </Button>
    )
}

export default NavButton;
