import styled from 'styled-components';

export const BodyWrapper = styled.div`
  font-family: 'Kantumruy Pro', sans-serif;
  color: #2e444e;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-weight: medium;
  text-align: left;
  margin-bottom: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  width: 420px;
  font-size: 150%;
`;

export const Button = styled.button`
  background-color: #2e444e;
  color: white;
  border: none;
  height: 30px;
  width: 200;
  border-radius: 5px;
  font-weight: 500;
  font-size: 25px;
  align-self: center;
  margin-top: 10px;
  :hover {
    background-color: #1b232e;
  }
`;

  export const Input = styled.input`
    margin-bottom: 10px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #2e444e;
    padding: 5px 10px;
`;