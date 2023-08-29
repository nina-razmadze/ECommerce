import styled from 'styled-components';
import tw from 'twin.macro';

export const SAuthSection = styled.section`
  ${tw`bg-gray-50 bg-transparent p-20`}
`;

export const SAuthContainer = styled.div`
  ${tw`flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 `}
`;

export const SAuthLogo = styled.a`
  ${tw`flex  mb-6 text-2xl font-semibold text-gray-900 text-white`}
`;
export const SAuthTitleDiv = styled.div`
  ${tw`flex justify-start `}
`;
export const SAuthFormContainer = styled.div`
  ${tw`w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-purple-600 `}
`;

export const SAuthFormHeader = styled.h1`
  ${tw`text-xl font-bold leading-tight tracking-wide	 text-gray-900 md:text-2xl text-white pb-[15px] pt-[10px]   `}
`;

export const SAuthForm = styled.form`
  ${tw`space-y-4 md:space-y-6 `}
`;

export const SAuthFormLabel = styled.label`
  ${tw`block mb-2 text-sm font-medium text-gray-900 text-white`}
`;

export const SAuthFormInput = styled.input`
  ${tw`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500`}
`;

export const SAuthFormCheckbox = styled.input`
  ${tw`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500`}
`;

export const SAuthFormCheckboxLabel = styled.label`
  ${tw`text-gray-500 text-gray-300`}
`;
export const SAuthFormButton = styled.button`
  ${tw`w-full text-white bg-purple-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800`}
`;
export const SAuthSignInA = styled.a`
  ${tw`font-medium text-purple-600 hover:underline text-gray-500 pl-2`}
`;
export const SAuthDoesNotAccaunt = styled.p`
  ${tw`text-sm font-light text-gray-500 text-gray-400`}
`;
export const SAuthForgotPasswordA = styled.a`
  ${tw`text-sm font-medium text-purple-600 hover:underline text-gray-500`}
`;
export const SAuthFormDiv = styled.div`
  ${tw` space-y-4 md:space-y-6  bg-zinc-800  pb-[35px] pt-[30px] pl-[30px]  pr-[30px]`}
`;
export const SAuthInputError = styled.span`
  ${tw`text-red-700`}
`;
export const SAuthimg = styled.img`
  ${tw`absolute translate-x-60`}
`;

export const SAuthTitle = styled.h1`
  padding-bottom: 25px;
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SFormInput = styled.input`
  padding: 12px;
  width: 400px;
  border-radius: 12px;
  border: none;
  border: 3px solid #880ed4;
  margin-bottom: 10px;
  /* margin-bottom: 25px; */
`;
export const SFormSubmit = styled.input`
  font-size: 14px;
  margin-left: 74%;
  margin-bottom: 15px;
  background-color: #880ed4;
  width: 100px;
  padding: 8px;
  border-radius: 12px;
  border: none;
`;

export const SInputError = styled.div`
  margin-bottom: 25px;
  padding-left: 6px;
  color: black;
  font-weight: bold;
`;
