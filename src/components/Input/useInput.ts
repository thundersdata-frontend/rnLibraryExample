import { useEffect, useState } from 'react';

import { useMemoizedFn } from '@td-design/rn-hooks';

import type { InputProps } from '.';

export default function useInput({
  inputType,
  value,
  defaultValue,
  onChange,
  onClear,
}: Pick<InputProps, 'inputType' | 'value' | 'defaultValue' | 'onChange' | 'onClear'>) {
  const [inputValue, setInputValue] = useState<string>();
  const [eyeOpen, setEyeOpen] = useState(inputType === 'password');

  // useEffect(() => {
  //   setInputValue(value || defaultValue);
  // }, [value, defaultValue]);

  const handleInputClear = () => {
    setInputValue('');
    onChange?.('');
    onClear?.();
  };

  const handleChange = (val: string) => {
    setInputValue(val);
    onChange?.(val);
  };

  const triggerPasswordType = () => {
    setEyeOpen(!eyeOpen);
  };

  return {
    inputValue,
    eyeOpen,
    handleChange: useMemoizedFn(handleChange),
    handleInputClear: useMemoizedFn(handleInputClear),
    triggerPasswordType: useMemoizedFn(triggerPasswordType),
  };
}
