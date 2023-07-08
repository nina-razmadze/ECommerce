import tw from 'twin.macro';
import styled from 'styled-components';

export const SEditReport = styled.div`
  ${tw` text-white rounded-3xl		p-[10px] text-[20px] `}
`;
export const SUser = styled.div`
  ${tw` text-white flex  text-[20px] pb-[30px]`}
`;
export const SForm = styled.form`
  ${tw` bg-purple-800 text-white text-[20px] grid justify-center grid-cols-2 gap-x-[20px]	 rounded p-[60px]	 w-[800px] rounded-3xl`}
`;
export const SSelect = styled.select`
  ${tw` text-white bg-zinc-600 text-[20px] w-[40px] cursor-pointer	`}
`;
export const SOption = styled.option`
  ${tw` text-white bg-zinc-600 text-[20px]  `}
`;
export const SInput = styled.input`
  ${tw`bg-zinc-600 text-[20px] w-[260px] m-[20px] h-[50px] rounded-3xl 	p-[18px]	`}
`;
export const SSubmitButton = styled.input`
  ${tw`bg-purple-900 text-[20px] w-[260px] ml-[17px] mt-[30px]  p-[10px] h-[50px] rounded-3xl			`}
`;
export const SSelectDiv = styled.div`
  ${tw`bg-zinc-600 text-[20px] w-[260px] ml-[17px] mt-[30px]  p-[10px]  h-[50px] rounded-3xl	cursor-pointer	flex 	`}
`;
export const SRightInputs = styled.input`
  ${tw`text-[20px] `}
`;
export const SDivContainer = styled.div`
  ${tw`bg-zinc-800 grid justify-center   `}
`;
