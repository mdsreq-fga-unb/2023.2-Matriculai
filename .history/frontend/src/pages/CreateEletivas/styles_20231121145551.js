import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: #243a69;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: #f4f4f2;
  max-width: 1000px;
  max-height: 650px;
  padding: 0px;
  border-radius: 60px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
export const texto = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #243A69;
  margin-left: 20px;
  margin-top: 20px;
`;