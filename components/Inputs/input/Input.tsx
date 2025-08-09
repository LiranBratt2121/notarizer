import React from 'react'
import { InputField } from './Input.styles';

export interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <InputField value={value} placeholder={placeholder} onChange={onChange} />
  )
}

export default Input;
