import { FC, JSX } from "react";

interface ButtonProps {
  label: string;
}
const Button: FC<ButtonProps> = ({ label }): JSX.Element => {
  return <button>{label}</button>;
};

export default Button;
