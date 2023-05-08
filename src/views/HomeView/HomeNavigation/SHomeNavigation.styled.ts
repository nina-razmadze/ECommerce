import styled from 'styled-components';

export const SHomeNavigation = styled.nav`
  position: absolute;
  margin-left: 190px;
  z-index: 10;
  margin-top: 0px;
  width: 300px;
  height: 500px;
  background-color: #880ed4;
  border-radius: 10px;
`;

export const SNavHeader = styled.div`
  height: 60px;
  width: 300px;
  display: flex;
  align-items: center;
  font-size: 20px;
  background-color: #6300a9;
`;
export const SNavListItem = styled.div`
  padding: 15px;
  font-size: 18px;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: #6300a9;
  }
`;

export const SListTitle = styled.p`
  padding-left: 15px;
`;
