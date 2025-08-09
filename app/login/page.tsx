"use client";

import React from 'react'
import { LoginContainer } from './login.styles'
import GoogleLoginButton from './login.components/GoogleLoginButton'
import HeaderAbs from '@/components/Text/HeaderAbs/HeaderAbs'

const Login = () => {
    return (
        <LoginContainer>
            <HeaderAbs text="Login Now!" />

            <GoogleLoginButton />
        </LoginContainer>
    )
}

export default Login
