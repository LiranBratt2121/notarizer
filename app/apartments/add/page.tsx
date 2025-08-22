"use client";

import React, { useState } from 'react'
import { AddApartmentContainer } from './add.styles';
import InputArray, { InputNaming } from '@/components/Inputs/InputArray/InputArray';
import Button from '@/components/Buttons/Button/Button';
import Header from '@/components/Text/Header/Header';
import { Apartment } from '@/types/apartment';
import { useRouter } from 'next/navigation';
import { useUserApartments } from '@/hooks/useUserApartments';
import LoadingCircle from '@/components/LoadingBar/LoadingCircle/LoadingCircle';

const fields: InputNaming[] = [
  { header: "Street Address", placeholder: "Enter street address", id: "streetAddress"},
  { header: "City", placeholder: "Enter city", id: "city"},
  { header: "State", placeholder: "Enter state", id: "state", defaultValue: "No State" },
  { header: "Postal Code", placeholder: "Enter Postal code", id: "postalCode", defaultValue: "No Postal code"},
  { header: "Country", placeholder: "Enter country", id: "country" },
]

const AddApartment = () => {
  const router = useRouter();

  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map(field => [field.id, ""]))
  );

  const { addApartment, isSavingApartment } = useUserApartments();


  const handleInputChange = (id: string, newValue: string) => {
    setValues(prev => ({ ...prev, [id]: newValue }));
  };

  const handleSubmit = async () => {
    const requiredFields = fields.filter(field => !field.defaultValue)

    for (const field of requiredFields) {
      if (values[field.id].trim() === "") {
        alert(`Please fill out the ${field.header} field.`);
        return;
      }
    }

    const filledValues = Object.fromEntries(
      fields.map(field => [
        field.id,
        values[field.id].trim() !== "" ? values[field.id] : field.defaultValue ?? ""
      ])
    );

    const newApartment: Apartment = {
      street: filledValues.streetAddress,
      city: filledValues.city,
      state: filledValues.state,
      postalCode: filledValues.postalCode,
      country: filledValues.country,
      images: [],
    };

    await addApartment(newApartment)

    router.replace("/apartments");
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
