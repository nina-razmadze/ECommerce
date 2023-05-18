import styled from 'styled-components';
import tw from 'twin.macro';

export const SFooter = styled.footer`
  ${tw`bg-zinc-800 shadow dark:bg-gray-900 `}
`;
export const SDIvContainer = styled.div`
  ${tw`w-full max-w-screen-xl mx-auto p-4 md:py-8`}
`;
export const SFooterLogoA = styled.a`
  ${tw`self-center text-2xl list-none no-underline  whitespace-nowrap dark:text-white  text-white`}
`;
export const SFooterListUl = styled.ul`
  ${tw`flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 list-none no-underline `}
`;
export const SListA = styled.a`
  ${tw`mr-4  md:mr-6 text-white hover:text-purple-700 cursor-pointer`}
`;
export const SfooterHr = styled.hr`
  ${tw`my-6 border-gray-200 sm:mx-auto   dark:border-gray-700 lg:my-8`}
`;
export const SFooterSpan = styled.span`
  ${tw`block text-sm text-gray-500 sm:text-center dark:text-gray-400 `}
`;
export const SFooterSpanA = styled.a`
  ${tw`hover:underline pl-2 pr-1`}
`;
export const SfooterSecondDiv = styled.div`
  ${tw`sm:flex sm:items-center sm:justify-between`}
`;
