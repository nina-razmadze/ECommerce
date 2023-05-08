import styled from 'styled-components';

export const SSelect = styled.select`
  padding: 12px;
  width: 400px;
  border-radius: 12px;
  border: none;
  border: 3px solid #880ed4;
  margin-bottom: 10px;
  color: gray;
`;
export const SRadioBtnsWrapper = styled.div`
  display: flex;
`;
export const SRadioBtnWrapper = styled.div`
  align-items: center;
  display: flex;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 3px;
  font-size: 18px;
`;
export const SRadioBtnLabel = styled.label`
  padding-left: 23px;
`;
export const SRadioInput = styled.input`
  position: absolute;
  cursor: pointer;
  height: 16px;
  width: 16px;

  &:checked::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: purple;
  }
`;
export const SGender = styled.p`
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;
