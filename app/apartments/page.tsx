"use client";

import React from 'react'
import { ApartmentContainer } from './apartments.styles';
import Button from '@/components/Buttons/Button/Button';
import { useRouter } from 'next/navigation';

const Apartments = () => {
  const navigate = useRouter();
  
  const handleAddApartment = () => {
    navigate.replace('/apartments/add');
  }
  
  if (!user) {
    return (
      <LoginNotice
        headerMessage="Please log in to view your apartments."
        buttonMessage="Log In"
      />
    )
  }
  return (
    <ApartmentContainer>
        <Button width='80%' height='5rem' onClick={handleAddApartment}>
            Add Apartment
        </Button>
    </ApartmentContainer>
  )
}

export default Apartments;
