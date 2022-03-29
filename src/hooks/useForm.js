import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);
  const reset = () => {
    setFormValues(initialState);
  };
  const handleInputChange = ({ target: { name, value } }) => {
    setFormValues({ ...formValues, [name]: value });
  };
  return [formValues, handleInputChange, reset];
};
