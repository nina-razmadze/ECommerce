import { PropsWithChildren } from 'react';
import { SPrimaryButton } from './SPrimaryButton.styled';

interface TButton {
  title: string;
}
export default function Button<TButton>({ title }: PropsWithChildren) {
  return <SPrimaryButton>{title}</SPrimaryButton>;
}
