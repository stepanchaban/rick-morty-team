import React, { ReactElement } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
          value={userData.email}
          name="email"
        />
        <span style={{ marginTop: '10px', fontSize: '12px', color: 'red' }}>
          {formErrors.email}
        </span>
      </label>

      <label>
        <input
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          value={userData.password}
          name="password"
        />
        <span style={{ marginTop: '10px', fontSize: '12px', color: 'red' }}>
          {formErrors.password}
        </span>
      </label>

      {formType === 'signup' && (
        <label>
          <input
            onChange={handleInputChange}
            type="password"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            name="confirmPassword"
          />
          <span style={{ marginTop: '10px', fontSize: '12px', color: 'red' }}>
            {formErrors.confirmPassword}
          </span>
        </label>
      )}

      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
