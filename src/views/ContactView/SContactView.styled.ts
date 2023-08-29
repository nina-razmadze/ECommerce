import styled from "styled-components";
import tw from "twin.macro";

export const SBackGround = styled.div`
  ${tw`bg-zinc-900 h-[700px] w-full  `}
`;
export const SForm = styled.form`
  ${tw`bg-zinc-900 flex	justify-center items-center flex-col    md:h-screen lg:py-[20px]  `}
`;
export const SInput = styled.input`
  ${tw`border-b-2 font-mono  bg-zinc-900 border-l-2 pb-[10px]  pl-[17px] pt-[5px]	mb-[30px] text-white border-purple-600 w-[600px] text-[17px]  xl:w-[640px] lg:w-[620px] md:w-[512px] sm:w-[420px]`}
`;
export const SSecondInput = styled.input`
  ${tw`bg-zinc-900 border-r-2 font-mono	border-b-2 pb-[10px]  pr-[17px] pt-[5px] 	mb-[30px]	text-white border-purple-600 w-[600px] text-[17px]   xl:w-[640px] lg:w-[620px] md:w-[512px] sm:w-[420px]`}
  &::placeholder {
    text-align: right;
    font-size: 17px;
  }
`;
export const SPurpleButton = styled.input`
  ${tw`bg-purple-700 text-white px-[30px] py-[10px] cursor-pointer  font-mono rounded-lg mt-[30px]`}
`;
