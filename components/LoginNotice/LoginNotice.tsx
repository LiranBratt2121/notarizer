"use client";

import React from 'react'
import Notice from '../Notice/Notice';

interface LoginNoticeProps {
    headerMessage: string;
    buttonMessage: string;
}

const LoginNotice = ({ headerMessage, buttonMessage }: LoginNoticeProps) => {
    return (
        <Notice headerMessage={headerMessage} buttonMessage={buttonMessage} href='/login' />
    )
}

export default LoginNotice;
