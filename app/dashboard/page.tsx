"use client";

import React from 'react'
import { CaptureCircleButton } from './dashboard.components/CaptureCircleButton/CaptureCircleButton';
import { DashboardContainer } from './dashboard.styles';
import HeaderAbs from '../../components/Text/HeaderAbs/HeaderAbs';
import { useAuth } from '@/hooks/useAuth';
import LoginNotice from '@/components/LoginNotice/LoginNotice';

const Dashboard = () => {
  const { user } = useAuth();
  
  if (!user) {
    return LoginNotice({
      headerMessage: "Please log in to access your dashboard.",
      buttonMessage: "Log In"
    });
  }

  return (
    <DashboardContainer>
      <HeaderAbs text={`Hello, ${user.displayName}`}/>
      <CaptureCircleButton>
        Capture
      </CaptureCircleButton>
    </DashboardContainer>
  )
}

export default Dashboard;
