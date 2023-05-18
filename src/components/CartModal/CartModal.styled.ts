import styled from 'styled-components';
import tw from 'twin.macro';

export const SCartItem = styled.div`
  ${tw`transition ease-in-out delay-150 grid grid-cols-3 bg-zinc-800 hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300 items-center 	`}
`;
export const SCartImgWrapper = styled.div`
  ${tw`w-[100px] `}
`;
export const SCartCloseIcon = styled.div`
  ${tw`w-[20px] absolute top-[120px]  left-[88%] items-center`}
`;
