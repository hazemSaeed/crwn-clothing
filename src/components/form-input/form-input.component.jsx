import React from 'react';
import {
  FormGroupContainer,
  FormInputStyles,
  FormInputLable,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormGroupContainer>
      <FormInputStyles onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLable shrink={otherProps.value.length}>
          {label}
        </FormInputLable>
      ) : null}
    </FormGroupContainer>
  );
};

export default FormInput;
