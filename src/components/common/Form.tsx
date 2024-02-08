import { ReactElement } from 'react';

interface FormProps {
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
}

const Form: React.FC<FormProps> = ({
  userData,
  formErrors,
  handleInputChange,
  handleSubmit,
  buttonText,
  showConfirmPasswordInput,
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
          required
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
          required
        />
        <span style={{ marginTop: '10px', fontSize: '12px', color: 'red' }}>
          {formErrors.password}
        </span>
      </label>

      {showConfirmPasswordInput && (
        <label>
          <input
            onChange={handleInputChange}
            type="password"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            name="confirmPassword"
            required
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
