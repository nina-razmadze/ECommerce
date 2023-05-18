import tw from 'twin.macro';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;
export const SHomeContent = styled.div`
  width: 100%;
  position: relative;

  &:hover .hidden {
    overflow: hidden;
    display: block;
  }
  width: 100%;
  height: 100%;
  margin-top: 60px;
  animation: ${slideIn} 1s ease-in-out;
`;
export const SImagesForSlider = styled.div`
  width: 200px;
  height: 200px;
`;

export const SBsChevronCompactLeft = styled.div`
  display: flex;
  align-items: center;
  size: 30px;
  width: 50px;
  position: absolute;
  top: 40%;
  left: 70px;
  font-size: 1.5rem;
  border-radius: 50%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  line-height: 2rem;
  transform: translateX(0);
  transform: translateX(-50%);
  display: none;
`;
export const SBsChevronCompactRight = styled.div`
  display: flex;
  align-items: center;
  size: 30px;
  width: 50px;
  position: absolute;
  top: 40%;
  width: 50px;
  right: 30px;
  font-size: 1.5rem;
  border-radius: 50%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  line-height: 2rem;
  transform: translateX(0);
  transform: translateX(-50%);
  display: none;
`;
export const SfourDotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 24%;
  top: 4px;
  color: white;
`;
export const SfourDots = styled.div`
  cursor: pointer;
`;
