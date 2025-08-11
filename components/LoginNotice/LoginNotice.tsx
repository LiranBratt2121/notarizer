"use client";

import React from 'react'
import Header from '../Text/Header/Header';
import { LoginNoticeContainer } from './LoginNotice.styles';
import NavButton from '../Buttons/NavButton/NavButton';

interface LoginNoticeProps {
    headerMessage: string;
    buttonMessage: string;
}

const LoginNotice = ({ headerMessage, buttonMessage }: LoginNoticeProps) => {
    return (
        <LoginNoticeContainer>
            <Header text={headerMessage} />
            <NavButton width='80%' height='5rem' href={'/login'} >
                {buttonMessage}
            </NavButton>
        </LoginNoticeContainer >
    )
}

export default LoginNotice;
