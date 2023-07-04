import styled from 'styled-components';
import tw from 'twin.macro';

export const SBackColor = styled.div`
  ${tw`bg-zinc-800  flex justify-center  pt-[200px] pb-[400px]`}
`;

export const SColumn = styled.div`
  ${tw`bg-zinc-700  h-full w-[300px]`}
`;
export const SSecondColumn = styled.div`
  ${tw`bg-purple-700  rounded-3xl	h-full  w-[60%]`}
`;
export const SColumns = styled.div`
  ${tw`  flex justify-between h-full w-[50%]`}
`;
export const SList = styled.div`
  ${tw`text-[20px] text-white list-none p-[100px]`}
`;
export const SListItem = styled.div`
  ${tw` pb-[40px]`}
`;

// export const SColumn = styled.div`
//   ${tw`bg-zinc-700  h-full w-[400px]`}
// `;
// export const SColumn = styled.div`
//   ${tw`bg-zinc-700  h-full w-[400px]`}
// `;
