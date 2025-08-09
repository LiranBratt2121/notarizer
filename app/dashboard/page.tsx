import React from 'react'
import { CaptureCircleButton } from './dashboard.components/CaptureCircleButton/CaptureCircleButton';
import { DashboardContainer } from './dashboard.styles';
import HeaderAbs from '../../components/Text/HeaderAbs/HeaderAbs';

const Dashboard = () => {
  return (
    <>
    <HeaderAbs text='Hello, User'/>
    <DashboardContainer>
      <CaptureCircleButton>
        Capture
      </CaptureCircleButton>
    </DashboardContainer>
    </>
  )
}

export default Dashboard;
