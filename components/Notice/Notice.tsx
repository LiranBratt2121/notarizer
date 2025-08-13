"use client";

import React from 'react'
import Header from '../Text/Header/Header';
import { NoticeContainer } from './Notice.styles';
import NavButton from '../Buttons/NavButton/NavButton';

interface NoticeProps {
    headerMessage: string;
    buttonMessage: string;
    href: string
}

const Notice = ({ headerMessage, buttonMessage, href }: NoticeProps) => {
    return (
        <NoticeContainer>
            <Header text={headerMessage} />
            <NavButton width='80%' height='5rem' href={href} >
                {buttonMessage}
            </NavButton>
        </NoticeContainer >
    )
}

export default Notice;
