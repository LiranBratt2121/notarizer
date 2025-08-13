import React, { useState } from 'react';
import { InputWrapper, InputField, DropdownList, DropdownItem } from './DropdownInput.styles';

export interface DropdownInputProps {
  placeholder?: string;
  options: string[];
  onChange?: (value: string) => void;
}

export const DropdownInput: React.FC<DropdownInputProps> = ({ placeholder, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelect = (option: string) => {
    onChange?.(option);
    setValue(option);
    setOpen(false);
  };

  return (
    <InputWrapper>
      <InputField
        value={value || placeholder}
        placeholder={placeholder}
        onFocus={() => setOpen(true)}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {open && options.length > 0 && (
        <DropdownList>
          {options.map((option, idx) => (
            <DropdownItem key={idx} onClick={() => handleSelect(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </InputWrapper>
  );
};

