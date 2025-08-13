"use client";

import React, { useMemo, useState } from 'react'
import { CaptureCircleButton } from './dashboard.components/CaptureCircleButton/CaptureCircleButton';
import { DashboardContainer } from './dashboard.styles';
import HeaderAbs from '../../components/Text/HeaderAbs/HeaderAbs';
import { useAuth } from '@/hooks/useAuth';
import LoginNotice from '@/components/LoginNotice/LoginNotice';
import { Camera } from '@/components/Camera/Camera';
import { DropdownInput } from '@/components/Inputs/DropdownInput/DropdownInput';
import LocationPrompt from './dashboard.components/LocationPrompt/LocationPrompt';
import { useGoogleDrive } from '@/hooks/useGoogleDrive';
import { useUserApartments } from '@/hooks/useUserApartments';
import Notice from '@/components/Notice/Notice';
import { FormData } from './dashboard.components/LocationPrompt/LocationPrompt';
import LoadingThreeDot from '@/components/LoadingBar/LoadingThreeDot/LoadingThreeDot';


const Dashboard = () => {
  const [inCaptureMode, setInCaptureMode] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const { uploadAndGetUrl } = useGoogleDrive();
  const { apartments, addImageToApartment } = useUserApartments();

  const apartmentStreetsIds = useMemo(() => {
    return apartments.map(apartment => ({ id: apartment.id, street: apartment.street }))
  }, [apartments]);

  const handleCaptureClick = () => {
    setInCaptureMode(true);
  }

  const onSavePhoto = async (photoBase64: string) => {
    setCapturedPhoto(photoBase64);
    setPopupOpen(true);
    setInCaptureMode(false);
  }

  const uploadData = async ({ name, apartment: apartmentStreet }: FormData) => {
    setLoading(true);

    if (!capturedPhoto) {
      alert("No Captured Image");
      return;
    }

    const { webContentLink } = await uploadAndGetUrl(capturedPhoto, name);

    const id = apartmentStreetsIds.find(apartment => apartment.street === apartmentStreet)?.id;

    if (!id) {
      alert("Apartment not found");
      return;
    }

    await addImageToApartment(id, {link: webContentLink, name: name});
    
    setPopupOpen(false);
    setLoading(false);
  }

  if (!user) {
    return LoginNotice({
      headerMessage: "Please log in to access your capture dashboard.",
      buttonMessage: "Log In"
    });
  }

  if (apartments.length === 0) {
    return Notice({
      headerMessage: "Please add an apartment before capturing",
      buttonMessage: "Add",
      href: "apartments/add"
    });
  }

  return (
    <DashboardContainer>
      <HeaderAbs text={`Hello, ${user.displayName}`} />
      <CaptureCircleButton onClick={handleCaptureClick}>
        Capture
      </CaptureCircleButton>

      {inCaptureMode && (
        <Camera
          savePhoto={onSavePhoto}
          onExitCameraMode={() => setInCaptureMode(false)}
        />
      )}

      {
        loading && (
          <LoadingThreeDot />
        )
      }

      {popupOpen && (
        <LocationPrompt
          dropDownInputProps={{ options: apartmentStreetsIds.map(asi => asi.street), placeholder: "Select an apartment" }}
          inputProps={{ placeholder: "image name" }}
          handleData={uploadData}
        />
      )}
    </DashboardContainer>
  );
}
export default Dashboard;
