import {
  FormAuth,
  FormButton,
  FormInput,
  FormLabel,
  FormSpan,
} from '@components/styledComponents/Form';

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
}) => {
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
