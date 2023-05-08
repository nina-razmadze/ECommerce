import styled from 'styled-components';

export const STransparentBox = styled.div`
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);

  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
