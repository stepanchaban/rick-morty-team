import React, { ReactElement } from 'react';
import styled from 'styled-components';

const FormAuth = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 100%;
`;

const FormInput = styled.input`
  margin-top: 5px;
  background-color: transparent;
  border: 1px solid #595959;
  border-radius: 12px;
  box-sizing: border-box;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;
  padding: 9px 50px 9px 16px;
  transition: border-color 0.4s ease;
`;

const FormSpan = styled.span`
  margin-bottom: 20px;
  font-size: 12px;
  color: red;
`;

const FormButton = styled.button`
  background-color: #4fb4f5;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;
  padding: 10px 16px;
  transition: background-color 0.4s ease;
  width: 50%;
  cursor: pointer;

  &:hover {
    background-color: #6078ed;
  }
`;

type FormProps = {
  formType: 'signin' | 'signup';
  userData: {
    email: string;
    password: string;
    confirmPassword?: string;
  };
  formErrors: {
    email: string;
    password: string;
    confirmPassword?: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  showConfirmPasswordInput: boolean;
};

const Form: React.FC<FormProps> = ({
  formType,
  userData,
  formErrors,
  buttonText,
  handleInputChange,
  handleSubmit,
}: FormProps): ReactElement => {
  return (
    <FormAuth onSubmit={handleSubmit}>
      <FormLabel>
        <FormInput
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
          value={userData.email}
          name="email"
        />
        <FormSpan>{formErrors.email}</FormSpan>
      </FormLabel>

      <FormLabel>
        <FormInput
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          value={userData.password}
          name="password"
        />
        <FormSpan>{formErrors.password}</FormSpan>
      </FormLabel>

      {formType === 'signup' && (
        <FormLabel>
          <FormInput
            onChange={handleInputChange}
            type="password"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            name="confirmPassword"
          />
          <FormSpan>{formErrors.confirmPassword}</FormSpan>
        </FormLabel>
      )}

      <FormButton type="submit">{buttonText}</FormButton>
    </FormAuth>
  );
};

export default Form;
