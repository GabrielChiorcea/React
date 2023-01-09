import { useState } from 'react';

const useInput = (validateValue) => {
  const [isTouch, setIsTouch] = useState(false);
  const [enteredValue, setEnteredValue] = useState('');

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouch;

  const inputEnteredValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouch(true);
  };

  const reset = () => {
    enteredValue('');
    setIsTouch(false);
  };

  return {
    inputBlurHandler,
    inputEnteredValueHandler,
    value: enteredValue,
    hasError,
    reset,
  };
};

export default useInput;
