import tw from "twin.macro";
import styled from "styled-components";

export const SLoginLink = styled.link`
  ${tw`no-underline`}
`;
export const SHeaderNav = styled.nav`
  ${tw` bg-zinc-900  px-4  py-2.5 fixed   top-0 left-0 w-full bg-white  z-20  mx-auto 	`}
`;
export const SAuthButtons = styled.div`
  ${tw`flex justify-around items-center lg:order-2 bg-transparent border-none mr-[20px]  absolute top-[20px] left-[55%] `}
`;
export const SLoginButton = styled.button`
  ${tw` text-white  bg-zinc-800  dark:bg-zinc-600   border-none	 hover:bg-zinc-600 focus:bg-zinc-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none 	`}
`;
export const SCartIcon = styled.div`
  ${tw`mr-1.5  w-7 `}
`;

export const SSimplyBtn = styled.button`
  ${tw`bg-transparent mr-[24px] border-none text-white flex items-center justify-between  hover:bg-zinc-600 rounded-lg mr-8 p-[5px] `}
`;
export const SSEarchAndLangWrapper = styled.div`
  ${tw`flex justify-between`}
`;
export const SCartP = styled.p`
  ${tw`pr-[6px] `}
`;

export const SdivContainer = styled.div`
  ${tw`flex text-white font-[17px] flex-wrap justify-between items-center mx-auto  mr-[13%] w-[80%] xl:w-[80%] lg:w-[620px] md:w-[512px] sm:w-[420px] 	 `}
`;
export const SListUl = styled.ul`
  ${tw`flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 list-none`}
`;
export const SPrimaryButton = styled.button`
  ${tw`text-white bg-purple-600 hover:bg-purple-700	focus:ring-4  focus:ring-purple-900 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2   border-none `}
`;

export const SLogoSpan = styled.span`
  ${tw` text-white pl-[20px] absolute top-[20px] left-[45%] self-center text-xl font-semibold whitespace-nowrap dark:text-white`}
`;
export const STranslateSelect = styled.select`
  ${tw`border-none mr-[24px]  px-3 py-2 cursor-pointer bg-transparent text-white hover:bg-zinc-600  rounded-lg items-center`}
`;
export const SContactUS = styled.div`
  ${tw`text-white  mr-[24px] cursor-pointer bg-transparent text-white hover:bg-zinc-600 p-[7px]  rounded-lg items-center`}
`;

export const SHeader = styled.header<{ height?: string; width?: string }>`
  display: flex;
  padding: 12px;
  align-items: center;
  background-color: #171717;
`;

export const SSearchInput = styled.input`
  ${tw`w-[612px] h-[45px] pl-[30px] bg-zinc-800 rounded-lg  border-4 border-purple-200 border-y-purple-500  border-x-zinc-800 mr-[50px]  xl:w-[600px] lg:w-[220px] md:w-[212px] sm:w-[420px]  `}
`;
export const SSelectOption = styled.select`
  position: absolute;
  border-radius: 20px;
  border: none;
  left: 52%;
  top: 19px;
  width: 120px;
  height: 33px;
  cursor: pointer;
`;

export const SPrimaryButtonWrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* justify-content: space-between; */
  margin-left: 30px;
`;

export const SLogo = styled.div`
  color: #fff;
  font-size: 27px;
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 65px;
  cursor: pointer;
`;
export const SSearchIconWrapper = styled.div`
  position: absolute;
  left: 59%;
  top: 25px;
  cursor: pointer;
`;

export const SUserICon = styled.div`
  position: absolute;
  top: 29px;
  left: 70%;
  cursor: pointer;
`;
