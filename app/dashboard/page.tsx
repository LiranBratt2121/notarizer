import React from 'react'
import { CaptureCircleButton } from './dashboard.components/CaptureCircleButton/CaptureCircleButton';
import { DashboardContainer } from './dashboard.styles';
import HeaderAbs from '../../components/Text/HeaderAbs/HeaderAbs';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <HeaderAbs text='Hello, User'/>
      <CaptureCircleButton>
        Capture
      </CaptureCircleButton>
    </DashboardContainer>
  )
}

export default Dashboard;
