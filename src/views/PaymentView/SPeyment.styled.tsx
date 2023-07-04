import styled from 'styled-components';
import tw from 'twin.macro';

export const SBackGroundColor = styled.div`
  ${tw`bg-zinc-800  `}
`;

export const SForm = styled.form`
  ${tw`bg-zinc-800 flex	justify-center items-center flex-col pt-[197px] pb-[66px]  `}
`;

export const STitle = styled.h1`
  ${tw`text-white text-[30px] pb-[58px] font-mono `}
`;

export const SFirstSelect = styled.select`
  ${tw`border-b-2 font-mono  bg-zinc-800 border-l-2 pb-[10px]  pl-[17px] pt-[5px]	mb-[70px] text-white border-purple-600 w-[600px] text-[17px]`}
`;

export const SLineInput = styled.input`
  ${tw`border-b-2 font-mono  bg-zinc-800  pb-[10px]  pl-[17px] pt-[5px]	 text-white border-purple-600 w-[700px] text-[17px] `}
`;

export const SButtonContainer = styled.div`
  ${tw`flex space-x-[40px] mr-[230px] mb-[50px]  `}
`;

export const SButton = styled.button`
  ${tw`bg-purple-700 text-white p-[10px] px-[20px] font-mono rounded-lg mt-[30px] `}
`;

export const SSecondInput = styled.input`
  ${tw`bg-zinc-800 border-r-2 font-mono	border-b-2 pb-[10px]  pr-[17px] pt-[5px] 	mb-[30px]	text-white border-purple-600 w-[600px] text-[17px]`}
`;
