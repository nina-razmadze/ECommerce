import tw from 'twin.macro';
import styled from 'styled-components';

export const SEditReport = styled.div`
  ${tw` text-white rounded-3xl		p-[10px] text-[20px] `}
`;
export const SUser = styled.div`
  ${tw` text-white p-[20px] text-[20px] pb-[50px]`}
`;
export const SForm = styled.form`
  ${tw` bg-purple-500 text-white text-[20px] grid grid-cols-2 gap-4`}
`;
export const SSelect = styled.select`
  ${tw` text-white bg-zinc-600 text-[20px] `}
`;
export const SOption = styled.option`
  ${tw` text-white bg-zinc-600 text-[20px] `}
`;
export const SInput = styled.input`
  ${tw`bg-zinc-600 text-[20px] w-[300px] m-[20px] h-[50px]`}
`;
export const SRightInputs = styled.input`
  ${tw`text-[20px] `}
`;
