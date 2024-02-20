import styled from 'styled-components';

export const FormAuth = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 100%;
`;

export const FormInput = styled.input`
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

export const FormSpan = styled.span`
  margin-bottom: 20px;
  font-size: 12px;
  color: red;
`;

export const FormButton = styled.button`
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
