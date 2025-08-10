"use client";

import React, { useState } from 'react'
import { AddApartmentContainer } from './add.styles';
import InputArray, { InputArrayProps, InputNaming } from '@/components/Inputs/InputArray/InputArray';
import HeaderAbs from '@/components/Text/HeaderAbs/HeaderAbs';
import Button from '@/components/Buttons/Button/Button';
import Header from '@/components/Text/Header/Header';
import { Apartment } from '@/types/apartment';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useUserApartments } from '@/hooks/useUserApartments';
import LoadingCircle from '@/components/LoadingBar/LoadingCircle/LoadingCircle';

const fields: InputNaming[] = [
  { header: "Street Address", placeholder: "Enter street address", id: "streetAddress" },
  { header: "City", placeholder: "Enter city", id: "city" },
  { header: "State", placeholder: "Enter state", id: "state" },
  { header: "Postal Code", placeholder: "Enter Postal code", id: "postalCode" },
  { header: "Country", placeholder: "Enter country", id: "country" },
]

const AddApartment = () => {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map(field => [field.id, ""]))
  );
  
  const { addApartment, isSavingApartment } = useUserApartments();

  const router = useRouter();

  const handleInputChange = (id: string, newValue: string) => {
    setValues(prev => ({ ...prev, [id]: newValue }));
  };

  const validateInputs = () => {
    return Object.values(values).every(value => value.trim() !== "");
  }

  const handleSubmit = async () => {
    if (!validateInputs()) {
      console.error("All fields must be filled out.");
      alert("Please fill out all fields.");
      return;
    }

    const newApartment: Apartment = {
      street: values.streetAddress,
      city: values.city,
      state: values.state,
      postalCode: values.postalCode,
      country: values.country,
      images: [],
    };

    await addApartment(newApartment)

    router.replace("/apartments");
    console.log("Submitted values:", newApartment);
  }

  return (
    <AddApartmentContainer>
      <Header text='Add apartment' />
      <InputArray
        inputNaming={fields}
        values={values}
        onChange={handleInputChange}
      />

      {
        isSavingApartment && (
          <LoadingCircle />
        )
      }

      <Button onClick={handleSubmit}>Add apartment</Button>
    </AddApartmentContainer>
  )
}

export default AddApartment;
