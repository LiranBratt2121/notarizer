"use client";

import React from 'react'
import { AddressCardContainer, AddressText } from './AddressCard.styles';
import { FirebaseApartment } from '@/types/apartment';
import { useRouter } from 'next/navigation';

interface AddressCardProps {
  address: FirebaseApartment['street'];
  id: FirebaseApartment['id'];
}

const AddressCard = ({ address, id }: AddressCardProps) => {
  const navigate = useRouter(); 
  
  const handleClick = () => {
    navigate.push(`/apartments/${id}`);
  }
  
  return (
    <AddressCardContainer onClick={handleClick}>
      <AddressText>{address}</AddressText>
    </AddressCardContainer>
  )
}

export default AddressCard;
