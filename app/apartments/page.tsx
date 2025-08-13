"use client";

import React from 'react'
import { ApartmentContainer } from './apartments.styles';
import Button from '@/components/Buttons/Button/Button';
import { useRouter } from 'next/navigation';
import AddressCardList from './apartments.components/AddressCardList/AddressCardList';
import Header from '@/components/Text/Header/Header';
import { useAuth } from '@/hooks/useAuth';
import LoginNotice from '@/components/LoginNotice/LoginNotice';
import { useUserApartments } from '@/hooks/useUserApartments';


// const apartments: FirebaseApartment[] = [
//   { id: '1', street: '123 Main St', city: 'Springfield', state: 'IL', postalCode: '62701', country: 'USA', images: [] },
//   { id: '2', street: '456 Elm St', city: 'Shelbyville', state: 'IL', postalCode: '62565', country: 'USA', images: [] },
//   { id: '3', street: '789 Oak St', city: 'Capital City', state: 'IL', postalCode: '62702', country: 'USA', images: [] },
// ]

const Apartments = () => {
  const navigate = useRouter();
  const { user } = useAuth();
  const { apartments } = useUserApartments();
  
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
      <Header text={apartments.length > 0 ? `${user.displayName}'s Apartments` : "No apartments available"} />
      <AddressCardList apartments={apartments} />

      <Button width='80%' height='5rem' onClick={handleAddApartment}>
        Add Apartment
      </Button>
    </ApartmentContainer>
  )
}

export default Apartments;
