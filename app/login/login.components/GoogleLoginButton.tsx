"use client";

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react'
import GoogleButton from 'react-google-button';

const GoogleLoginButton = () => {
    const { signIn } = useAuth();
    const navigate = useRouter();

    const handleGoogleLogin = async () => {
        try {
            await signIn();
            navigate.replace('/dashboard');
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please try again.");
        }
    };
    
    return (
        <GoogleButton
            type="light"
            onClick={handleGoogleLogin}
        />
    )
}

export default GoogleLoginButton;
