import tw from "twin.macro";
import styled from "styled-components";

export const SProductViewBackground = styled.div`
  ${tw` bg-zinc-900 pb-[50px]  pt-[150px] text-white  `}
`;
export const SProductViewImageDiv = styled.div`
  ${tw`   flex  h-[498px] w-[500px] rounded-xl  `}
`;
export const SProductViewInfoTitle = styled.h1`
  ${tw`text-4xl	 font-serif `}
`;
export const SProductViewInfoniscription = styled.h1`
  ${tw`text-2xl	font-serif  	pt-[40px] `}
`;
export const SProductViewInfonNormiscription = styled.h1`
  ${tw`text-[20px]			font-serif  `}
`;
export const SProductViewInfoMoreImages = styled.div`
  ${tw`grid grid-cols-3	 pt-[160px]  `}
`;
export const SProductViewInfoContainer = styled.div`
  ${tw`bg-zinc-700 flex flex-col w-[400px] h-[498px] 	pt-[180px] rounded-xl  `}
`;
export const SProductViewInfoContainerSecond = styled.div`
  ${tw`bg-purple-700 flex flex-col w-[500px] h-[498px]		p-[50px] pt-[90px] rounded-xl  `}
`;
export const SProductViewContainer = styled.div`
  ${tw` bg-zinc-700 h-[500px] w-[70%]  m-auto flex justify-between items-center border border-purple-400		 `}
`;
