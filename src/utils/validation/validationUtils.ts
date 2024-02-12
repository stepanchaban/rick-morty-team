export interface ValidationResult {
  isValid: boolean;
  message: string;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordMinLength = 6;

const validateWithRegex = (regex: RegExp, value: string): boolean => {
  return regex.test(value);
};

export const validateEmail = (email: string): ValidationResult => {
  const isValid = !!email && validateWithRegex(emailRegex, email);
  return {
    isValid,
    message: isValid ? '' : 'Invalid email format',
  };
};

export const validatePassword = (password: string): ValidationResult => {
  const isValid = !!password && password.length >= passwordMinLength;
  return {
    isValid,
    message: isValid
      ? ''
      : `Password must be at least ${passwordMinLength} characters long`,
  };
};
