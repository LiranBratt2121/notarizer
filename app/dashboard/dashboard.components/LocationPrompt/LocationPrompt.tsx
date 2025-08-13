"use client";

import React, { useState } from 'react'
import { FormContainer, LocationPromptContainer } from './LocationPrompt.styles';
import Input, { InputProps } from '@/components/Inputs/input/Input';
import { DropdownInput, DropdownInputProps } from '@/components/Inputs/DropdownInput/DropdownInput';
import Button from '@/components/Buttons/Button/Button';

export type FormData = {
  name: string;
  apartment: string;
};

interface LocationPromptProps {
  dropDownInputProps: Omit<DropdownInputProps, "onChange">;
  inputProps: Omit<InputProps, "onChange">;
  handleData: (formData: FormData) => Promise<void>;
}

const LocationPrompt = ({ dropDownInputProps, inputProps, handleData }: LocationPromptProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    apartment: ""
  });

  const handleSubmit = async () => {
    if (Object.values(formData).some((value) => value === "")) {
      alert("Fill all the values");
      return;
    }

    await handleData(formData);
  };

  return (
    <LocationPromptContainer>
      <FormContainer>
        <Input
          {...inputProps}
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <DropdownInput
          {...dropDownInputProps}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, apartment: value }))
          }
        />
      </FormContainer>
      <Button onClick={handleSubmit}>Submit</Button>
    </LocationPromptContainer>
  );
};


export default LocationPrompt;
