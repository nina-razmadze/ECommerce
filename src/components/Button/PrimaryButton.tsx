import { PropsWithChildren } from "react";
import { SPrimaryButton } from "./SPrimaryButton.styled";

interface TButton {
  title: string;
}

type ButtonProps = TButton & PropsWithChildren;

export default function Button({ title, children }: ButtonProps) {
  return <SPrimaryButton>{title}</SPrimaryButton>;
}
