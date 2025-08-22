import React from 'react'
import Input, { } from '../input/Input'
import { InputArrayContainer, TextAlert } from './InputArray.styles';
import Header from '@/components/Text/Header/Header';

export type InputNaming = { placeholder: string, header: string; id: string, defaultValue?: string };

export interface InputArrayProps {
  inputNaming: InputNaming[];
  values: Record<string, string>;
  onChange: (id: string, value: string) => void;
}

const InputArray = ({ inputNaming, values, onChange }: InputArrayProps) => {
  return (
    <InputArrayContainer>
      {inputNaming.map(({ header, id, placeholder, defaultValue }) => (
        <React.Fragment key={id}>
          <Header text={header} size="1.5rem" />
          <Input
            value={values[id] || ""}
            placeholder={placeholder}
            onChange={(e) => onChange(id, e.target.value)}
          />
          {defaultValue && <TextAlert>Not Required</TextAlert>}
        </React.Fragment>
      ))}
    </InputArrayContainer>
  );
};

export default InputArray;
