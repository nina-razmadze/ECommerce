import styled from 'styled-components';

// const GlobalStyle = `
// @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

//   body {
//     font-family: 'Open Sans', sans-serif;
//   }
// `;
export const SAuthTitle = styled.h1`
  padding-bottom: 25px;
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SFormInput = styled.input`
  padding: 12px;
  width: 400px;
  border-radius: 12px;
  border: none;
  border: 3px solid #880ed4;
  margin-bottom: 10px;
  /* margin-bottom: 25px; */
`;
export const SFormSubmit = styled.input`
  font-size: 14px;
  margin-left: 74%;
  margin-bottom: 15px;
  background-color: #880ed4;
  width: 100px;
  padding: 8px;
  border-radius: 12px;
  border: none;
`;

export const SInputError = styled.div`
  margin-bottom: 25px;
  padding-left: 6px;
  color: black;
  font-weight: bold;
`;
