"use client";

import React from 'react'
import { CaptureCircleButton } from './dashboard.components/CaptureCircleButton/CaptureCircleButton';
import { DashboardContainer } from './dashboard.styles';
import HeaderAbs from '../../components/Text/HeaderAbs/HeaderAbs';
import { useAuth } from '@/hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <div>Please log in to access the dashboard.</div>;
  }

  console.log('User:', user);
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
