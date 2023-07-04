import styled from 'styled-components';
import tw from 'twin.macro';

export const SBackGround = styled.div`
  ${tw`bg-zinc-800 h-full	 w-full `}
`;
export const SForm = styled.form`
  ${tw`bg-zinc-800 flex	justify-center items-center flex-col pt-[300px] pb-[379px] `}
`;
export const SInput = styled.input`
  ${tw`border-b-2 font-mono  bg-zinc-800 border-l-2 pb-[10px]  pl-[17px] pt-[5px]	mb-[30px] text-white border-purple-600 w-[600px] text-[17px] `}
`;
export const SSecondInput = styled.input`
  ${tw`bg-zinc-800 border-r-2 font-mono	border-b-2 pb-[10px]  pr-[17px] pt-[5px] 	mb-[30px]	text-white border-purple-600 w-[600px] text-[17px]`}
  &::placeholder {
    text-align: right;
    font-size: 17px;
  }
`;
export const SPurpleButton = styled.input`
  ${tw`bg-purple-700 text-white p-[10px] px-[20px] font-mono rounded-lg mt-[30px]`}
`;
