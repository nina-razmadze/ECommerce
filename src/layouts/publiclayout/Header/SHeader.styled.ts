import styled from 'styled-components';

export const SHeader = styled.header<{ height?: string; width?: string }>`
  display: flex;
  padding: 12px;
  align-items: center;
  background-color: #171717;
`;

export const SSearchInput = styled.input`
  width: 800px;
  height: 45px;
  border: none;
  padding-left: 30px;
  font-size: 18px;
  border-radius: 20px;
  cursor: pointer;
  border: 3px solid #880ed4;
  /* margin-left: 120px; */
`;
export const SSelectOption = styled.select`
  position: absolute;
  border-radius: 20px;
  border: none;
  left: 52%;
  top: 19px;
  width: 120px;
  height: 33px;
  cursor: pointer;
`;
export const STranslateSelect = styled.select`
  margin-left: 30px;
  border: none;
  border-radius: 15px;
  width: 65px;
  padding-left: 3px;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  border: 3px solid #880ed4;
`;
export const SPrimaryButtonWrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* justify-content: space-between; */
  margin-left: 30px;
`;

export const SLogo = styled.div`
  color: #fff;
  font-size: 27px;
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 65px;
  cursor: pointer;
`;
export const SSearchIconWrapper = styled.div`
  position: absolute;
  left: 59%;
  top: 25px;
  cursor: pointer;
`;
export const SCartIcon = styled.button`
  background-color: white;
  width: 50px;
  margin-left: 30px;
  height: 50px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  border: 3px solid #880ed4;
`;
export const SUserICon = styled.div`
  position: absolute;
  top: 29px;
  left: 70%;
  cursor: pointer;
`;
